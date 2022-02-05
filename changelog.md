* [CR] Fix nested pockets pickup ([#54941](https://github.com/CleverRaven/Cataclysm-DDA/pull/54941))
* Use move semantics in inventory::add_item() ([#55100](https://github.com/CleverRaven/Cataclysm-DDA/pull/55100))
* Fix water temperature from vehicle faucets ([#55092](https://github.com/CleverRaven/Cataclysm-DDA/pull/55092))
* Skip installing SDL2 on ncurses build on GHA ([#55088](https://github.com/CleverRaven/Cataclysm-DDA/pull/55088))
* Add VARSIZE to gloves_light ([#55087](https://github.com/CleverRaven/Cataclysm-DDA/pull/55087))
* Unhardcode grass cutting and add a stone sickle ([#55086](https://github.com/CleverRaven/Cataclysm-DDA/pull/55086))
* Fix compile error on macOS ([#55085](https://github.com/CleverRaven/Cataclysm-DDA/pull/55085))
* Fix typo in GitHub Actions CI test script ([#55084](https://github.com/CleverRaven/Cataclysm-DDA/pull/55084))
* Make gourmand work as advertised ([#55083](https://github.com/CleverRaven/Cataclysm-DDA/pull/55083))
* Added low profile mag pockets to light ballistic vest ([#55080](https://github.com/CleverRaven/Cataclysm-DDA/pull/55080))
* More Utility Exo Spawns ([#55078](https://github.com/CleverRaven/Cataclysm-DDA/pull/55078))
* Refactor inventory_multiselector and remove inventory_iuse_selector ([#55072](https://github.com/CleverRaven/Cataclysm-DDA/pull/55072))
* Add standing floodlight appliance ([#55047](https://github.com/CleverRaven/Cataclysm-DDA/pull/55047))

---

#### Cataclysm-DDA experimental build 2022-02-04-2151 ([9dc9a34](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-02-04-2151))

* Rubik no longer restocks every time you talk to him ([#55046](https://github.com/CleverRaven/Cataclysm-DDA/pull/55046))

---

#### Cataclysm-DDA experimental build 2022-02-04-0647 ([9fb7080](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-02-04-0647))

* Added pants and leg armor to class ([#55057](https://github.com/CleverRaven/Cataclysm-DDA/pull/55057))
* Make Clang 6 the basic build test configuration ([#55059](https://github.com/CleverRaven/Cataclysm-DDA/pull/55059))
* Speedup item::best_pocket ~100% (2x as fast) and misc other wins too ([#55070](https://github.com/CleverRaven/Cataclysm-DDA/pull/55070))
* Enhance limb healing functionality ([#55069](https://github.com/CleverRaven/Cataclysm-DDA/pull/55069))
* Rebalance test parallelism ([#55065](https://github.com/CleverRaven/Cataclysm-DDA/pull/55065))
* Fixed blocked nested chunks for hunting lodge's basement ([#55064](https://github.com/CleverRaven/Cataclysm-DDA/pull/55064))
* Add ability to count character flags, move all trait flag checks over to character flag ([#55061](https://github.com/CleverRaven/Cataclysm-DDA/pull/55061))
* Link to libncursesw in CMake ([#55054](https://github.com/CleverRaven/Cataclysm-DDA/pull/55054))

---

#### Cataclysm-DDA experimental build 2022-02-04-0021 ([de82384](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-02-04-0021))

* Repair Nanobots are now sleep friendly ([#55052](https://github.com/CleverRaven/Cataclysm-DDA/pull/55052))
* Changed symbol and its color for `mx_casings` map extra ([#55051](https://github.com/CleverRaven/Cataclysm-DDA/pull/55051))
* Cost allowance for "give_equipment" ([#55048](https://github.com/CleverRaven/Cataclysm-DDA/pull/55048))
* Lazy create level cache layers to reduce load path cpu ~8% (and slow tests 15-20s) ([#55038](https://github.com/CleverRaven/Cataclysm-DDA/pull/55038))
* Portal Storm Tweaks ([#55036](https://github.com/CleverRaven/Cataclysm-DDA/pull/55036))
* Adding salt water pipe and tannery to workshop version 2 ([#55026](https://github.com/CleverRaven/Cataclysm-DDA/pull/55026))
* Give a chance of another try if game is unable to find a valid starting location ([#55025](https://github.com/CleverRaven/Cataclysm-DDA/pull/55025))
* Update requirements.txt for Pillow-9.0.0 ([#55022](https://github.com/CleverRaven/Cataclysm-DDA/pull/55022))
* Fix update_mapgen bug ([#55021](https://github.com/CleverRaven/Cataclysm-DDA/pull/55021))
* move BARS to integrated mod ([#55018](https://github.com/CleverRaven/Cataclysm-DDA/pull/55018))
* Mechanics Practice recipes ([#55010](https://github.com/CleverRaven/Cataclysm-DDA/pull/55010))
* Fix wrong calorie count on batch crafted foods ([#55008](https://github.com/CleverRaven/Cataclysm-DDA/pull/55008))
* Vitamin rates from mutations now scale sensibly ([#55005](https://github.com/CleverRaven/Cataclysm-DDA/pull/55005))
* Aligns mutation.cpp with other uses of condition.cpp ([#55004](https://github.com/CleverRaven/Cataclysm-DDA/pull/55004))
* Clarify Trader Refresh Code ([#54996](https://github.com/CleverRaven/Cataclysm-DDA/pull/54996))
* added stick recipe ([#54993](https://github.com/CleverRaven/Cataclysm-DDA/pull/54993))
* Prevent crash when filling empty tank ([#54987](https://github.com/CleverRaven/Cataclysm-DDA/pull/54987))
* Make armor traits more flexible ([#54966](https://github.com/CleverRaven/Cataclysm-DDA/pull/54966))
* Remove redundant null terrains from mapgen ([#54959](https://github.com/CleverRaven/Cataclysm-DDA/pull/54959))
* Optimize JSON validation on CI ([#55060](https://github.com/CleverRaven/Cataclysm-DDA/pull/55060))
* Optimize shot_features and shot_features_with_choke test ([#55063](https://github.com/CleverRaven/Cataclysm-DDA/pull/55063))
* Fix crash in armor coverage test ([#55037](https://github.com/CleverRaven/Cataclysm-DDA/pull/55037))

---

#### Cataclysm-DDA experimental build 2022-02-03-0641 ([97d8c8b](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-02-03-0641))

* Fix magnifying glass recipe ([#55024](https://github.com/CleverRaven/Cataclysm-DDA/pull/55024))

---

#### Cataclysm-DDA experimental build 2022-02-02-0842 ([689dfa5](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-02-02-0842))

* Make floor lamp transparent ([#55009](https://github.com/CleverRaven/Cataclysm-DDA/pull/55009))

---

#### Cataclysm-DDA experimental build 2022-02-02-0031 ([f7e3308](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-02-02-0031))

* Added Masonry Saw to Power Tools group ([#54999](https://github.com/CleverRaven/Cataclysm-DDA/pull/54999))
* Prevent being itchy from canceling activites ([#54994](https://github.com/CleverRaven/Cataclysm-DDA/pull/54994))
* Add "OUTER" to tuxedo ([#54990](https://github.com/CleverRaven/Cataclysm-DDA/pull/54990))
* Unscrew snail serum ([#54978](https://github.com/CleverRaven/Cataclysm-DDA/pull/54978))
* Add context to worn as item location ([#54977](https://github.com/CleverRaven/Cataclysm-DDA/pull/54977))
* Add sake and soy sauce recipe ([#54976](https://github.com/CleverRaven/Cataclysm-DDA/pull/54976))
* Add context to custom sidebar ([#54975](https://github.com/CleverRaven/Cataclysm-DDA/pull/54975))
* Add dialog functions for age, height and improve formatting of compare_int ([#54974](https://github.com/CleverRaven/Cataclysm-DDA/pull/54974))
* Crafting recipe for still no longer destroys included sand ([#54964](https://github.com/CleverRaven/Cataclysm-DDA/pull/54964))

---

#### Cataclysm-DDA experimental build 2022-02-01-0639 ([1d4f464](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-02-01-0639))

* Give better advice for the Foreman's electric motors quest ([#54986](https://github.com/CleverRaven/Cataclysm-DDA/pull/54986))

---

#### Cataclysm-DDA experimental build 2022-01-31-1543 ([272b7a4](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-01-31-1543))

* More Gambeson Stuff ([#54947](https://github.com/CleverRaven/Cataclysm-DDA/pull/54947))
* Fix permanent effect default duration ([#54957](https://github.com/CleverRaven/Cataclysm-DDA/pull/54957))
* Allow split coverage strings to be properly translated ([#54955](https://github.com/CleverRaven/Cataclysm-DDA/pull/54955))
* Fix compile error on Clang compiler ([#54967](https://github.com/CleverRaven/Cataclysm-DDA/pull/54967))

---

#### Cataclysm-DDA experimental build 2022-01-31-1443 ([6895299](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-01-31-1443))

* Consistently name saw tools and blades ([#54948](https://github.com/CleverRaven/Cataclysm-DDA/pull/54948))

---

#### Cataclysm-DDA experimental build 2022-01-31-0804 ([40b6557](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-01-31-0804))

* More Gun Mod Upgrades ([#54961](https://github.com/CleverRaven/Cataclysm-DDA/pull/54961))
* Remove double about ([#54951](https://github.com/CleverRaven/Cataclysm-DDA/pull/54951))
* fix some typos ([#54950](https://github.com/CleverRaven/Cataclysm-DDA/pull/54950))
* Add makeshift cane and crutch items and recipes, add CRUTCH tag to hollow cane ([#54944](https://github.com/CleverRaven/Cataclysm-DDA/pull/54944))
* Add looks_like to basic pipe spear ([#54943](https://github.com/CleverRaven/Cataclysm-DDA/pull/54943))
* Add looks_like to bottle_bathroom ([#54942](https://github.com/CleverRaven/Cataclysm-DDA/pull/54942))
* Update en.credits ([#54938](https://github.com/CleverRaven/Cataclysm-DDA/pull/54938))
* Update robofac_greaves to use ALLOWS_TAIL ([#54936](https://github.com/CleverRaven/Cataclysm-DDA/pull/54936))
* Update pl.credits ([#54935](https://github.com/CleverRaven/Cataclysm-DDA/pull/54935))
* Fix the arsonist's fertilizer description ([#54932](https://github.com/CleverRaven/Cataclysm-DDA/pull/54932))
* Clothing butcher weight ([#54914](https://github.com/CleverRaven/Cataclysm-DDA/pull/54914))
* Align "Goals" with other panels ([#54906](https://github.com/CleverRaven/Cataclysm-DDA/pull/54906))
* Align sidebar widget values to the left by default ([#54905](https://github.com/CleverRaven/Cataclysm-DDA/pull/54905))

---

#### Cataclysm-DDA experimental build 2022-01-30-0754 ([7684355](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-01-30-0754))

* drop the item on the ground ([#54930](https://github.com/CleverRaven/Cataclysm-DDA/pull/54930))
* Add context to W from compass ([#54922](https://github.com/CleverRaven/Cataclysm-DDA/pull/54922))
* Add context to Place to custom sidebar UI ([#54918](https://github.com/CleverRaven/Cataclysm-DDA/pull/54918))
* Fix the padding for widget alignment ([#54915](https://github.com/CleverRaven/Cataclysm-DDA/pull/54915))
* Fix typos in NPC_ROBOFAC_INTERCOM.json ([#54913](https://github.com/CleverRaven/Cataclysm-DDA/pull/54913))
* Remove EBOOK pockets from length calculations ([#54912](https://github.com/CleverRaven/Cataclysm-DDA/pull/54912))
* Mark Unknown for translation ([#54910](https://github.com/CleverRaven/Cataclysm-DDA/pull/54910))
* Mark walk modes for translation ([#54907](https://github.com/CleverRaven/Cataclysm-DDA/pull/54907))
* Add latest pl.motd from Transifex ([#54903](https://github.com/CleverRaven/Cataclysm-DDA/pull/54903))
* Mark missing NPC dialogs for translation ([#54900](https://github.com/CleverRaven/Cataclysm-DDA/pull/54900))
* More accurate checking in layering conflicts ([#54897](https://github.com/CleverRaven/Cataclysm-DDA/pull/54897))
* Add (nonfunctional) vitamins to some mutagens ([#54895](https://github.com/CleverRaven/Cataclysm-DDA/pull/54895))
* to a clear -> to clear ([#54923](https://github.com/CleverRaven/Cataclysm-DDA/pull/54923))

---

#### Cataclysm-DDA experimental build 2022-01-30-0654 ([22c8e2c](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-01-30-0654))

* Added recipe for the Single Point Sling ([#54885](https://github.com/CleverRaven/Cataclysm-DDA/pull/54885))
* Show minimum as well as maximum encumberance on items ([#54884](https://github.com/CleverRaven/Cataclysm-DDA/pull/54884))
* Migrate to new Transifex CLI ([#54892](https://github.com/CleverRaven/Cataclysm-DDA/pull/54892))

---

#### Cataclysm-DDA experimental build 2022-01-29-0942 ([1bba9b7](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-01-29-0942))

* ordinance -> ordnance ([#54888](https://github.com/CleverRaven/Cataclysm-DDA/pull/54888))

---

#### Cataclysm-DDA experimental build 2022-01-29-0623 ([38f5a62](https://github.com/CleverRaven/Cataclysm-DDA/releases/tag/cdda-experimental-2022-01-29-0623))

* Fix though -> tough in robofac free merchant speech ([#54887](https://github.com/CleverRaven/Cataclysm-DDA/pull/54887))
