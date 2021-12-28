import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

let releases_url = "https://api.github.com/repos/cleverraven/cataclysm-dda/releases";
let changes_url = "https://api.github.com/repos/cleverraven/cataclysm-dda/pulls?state=closed&sort=created&direction=desc&per_page=100";

let settings = { method: 'GET' };

let releases
let changes

const getReleases = async function() {
    if (!releases) {
        const data = await fetch(releases_url, settings);
        releases = await data.json();
    }
    return releases;
}

const getChanges = async function() {
    if (!changes) {
        const data = await fetch(changes_url, settings);
        changes = await data.json();
    }
    return changes;
}

const initData = async function() {
    await getReleases();
    await getChanges()

    releases.sort((a,b) => (a.published_at < b.published_at) ? 1 : -1)
    changes.sort((a,b) => (a.merged_at < b.merged_at) ? 1 : -1)
}

const generateChanges = async function() {
    let markdown = "";
    let plaintext = "";

    await initData();
    for (const change of changes) {
        if (change.merged_at) {
            let release = releases.find(x => x.target_commitish === change.merge_commit_sha);
            if (release) {
                markdown += `\n---\n\n#### ${release.name} ([${release.target_commitish.substring(0,7)}](${release.html_url}))\n\n`;
                plaintext += `\n${release.name} (${release.target_commitish.substring(0,7)})\n`;
            }
            markdown += `* ${change.title} ([#${change.number}](${change.html_url}))\n`;
            plaintext += `* ${change.title} (#${change.number})\n`;
        }
    }
    return {
        markdown: markdown,
        plaintext: plaintext
    }
}

generateChanges()
    .then((output) => {
        fs.writeFileSync(path.resolve("./changelog.txt"), output.plaintext)
        fs.writeFileSync(path.resolve("./changelog.md"), output.markdown)
    });
