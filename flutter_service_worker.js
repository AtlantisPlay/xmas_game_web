'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7aa9c5d00e7fe1ab08da3ae92778343c",
"version.json": "f881f45bdcee82256a52fa211f663388",
"index.html": "9ffb06a99732c7557b9e55e2a33e3830",
"/": "9ffb06a99732c7557b9e55e2a33e3830",
"main.dart.js": "db2921b109a4b5e67a22ac8a2cbe04ff",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "1fb1b94e91c1ecf4db522bc4e8ce01b4",
"icons/Icon-192.png": "ca64f73fdc3a3e18d6a9d5ca570677e9",
"icons/Icon-maskable-192.png": "ca64f73fdc3a3e18d6a9d5ca570677e9",
"icons/Icon-maskable-512.png": "29c536a8042465f0ac5655ebae9ae8d2",
"icons/Icon-512.png": "29c536a8042465f0ac5655ebae9ae8d2",
"manifest.json": "f7a2c08a2c850411eb1e2bbbaeca0310",
"assets/NOTICES": "a67a63a0a936ed202ecb046f2640f27d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "b3fcece40747b562faa7bb8598bda549",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "dc44ffadc788c45ea91fc313d461a613",
"assets/fonts/MaterialIcons-Regular.otf": "ed4f9cc63a86e74ae47d1453af7d8c16",
"assets/assets/music/MUS_AMB_PARENT.wav": "27a6cf31f5ad96da9a780651c8639555",
"assets/assets/music/MUS_LOOP_CHRISTMAS_AMB.wav": "27a6cf31f5ad96da9a780651c8639555",
"assets/assets/music/MUS_LOOP_XM_GENTLE.wav": "59f2d435dae9e42eafa8159e1af7e4c6",
"assets/assets/music/MUS_SPLASH_STING_CHRISTMAS_3S.wav": "33698580df35ad5174d945e6182f6d1f",
"assets/assets/music/MUS_LOOP_CHRISTMAS_01.wav": "7ba448927c2824bb98171543b5f84008",
"assets/assets/music/MUS_LOOP_CHRISTMAS.wav": "42841bfcdf2fcf335601c23689104fb7",
"assets/assets/music/MUS_LOOP_CELEBR.wav": "ce3e46998a0dc4b4cafcc96f97f59dce",
"assets/assets/music/MUS_LOOP_CHRISTMAS_HOME.wav": "df23641ea44444e16dd7f0337bed21e7",
"assets/assets/music/MUS_CELEBR_XMASS.wav": "17d204e15e3b95c322f81792d00a10ed",
"assets/assets/vfx_presets.json": "bf136b3886ba9c58a095837a1c19a23f",
"assets/assets/sfx/sfx_gp_snap.mp3": "8730b22adda34232ab1b3ba19ec73fce",
"assets/assets/sfx/sfx_gp_pickup.mp3": "48afe43863d1cff47e0b2f7b4fa7a812",
"assets/assets/sfx/sfx_gp_drop_fail.mp3": "b75c213955814bff2faecc20bd129ed8",
"assets/assets/sfx/sfx_rw_final.mp3": "789c7886e33b1ef1063d0e37db97a2a8",
"assets/assets/sfx/sfx_trans_out_fade_soft.wav": "8e4a96959dafa9685cf61e70b01b8fd0",
"assets/assets/sfx/sfx_magic_glow_pulse_soft.mp3": "c7b0b33fb9de6c8c96a3432fd01c86d7",
"assets/assets/sfx/sfx_ui_toggle_soft.mp3": "4a5be2108c5f69df743e81e12e12f906",
"assets/assets/sfx/sfx_trans_in_sparkle.wav": "990f3a96da3a94c91022a73bebac38a1",
"assets/assets/sfx/sfx_rw_success.mp3": "96a0663199fde1700cbb44c2388ba3f1",
"assets/assets/sfx/sfx_ui_nav_hide.mp3": "f7573505e51e4db50ba516a03844ef55",
"assets/assets/sfx/sfx_home_button.mp3": "432dbab00e731003cf72d915ad1317ae",
"assets/assets/sfx/sfx_trans_out_fade_soft.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/Wee_Sound.mp3": "725e2785cabe3a0b62e71424d475a6ac",
"assets/assets/sfx/sfx_ui_click_soft.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/sfx_ui_nav_show.mp3": "f7573505e51e4db50ba516a03844ef55",
"assets/assets/sfx/sfx_trans_in_sparkle.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/sfx_teach_ping_soft.mp3": "76ef97a6965b60704837332e4af900ad",
"assets/assets/sfx/SFX_KIDS_CHEER_SOFT_GENTLE.mp3": "eb33e3f5964ce37ccc398e3bdafb6337",
"assets/assets/img/cinematics/INTRO_XM_CINEMATIC.png": "a9a56b29dbb938dacd28a6c9e4abdbe4",
"assets/assets/img/cinematics/MG_XM09_CINEMATIC.png": "19ae12df37f9fac2e90f70d1c030166b",
"assets/assets/img/cinematics/MG_XM04_CINEMATIC.png": "9c779d7f70d0df11e64ad778a8dc6f6b",
"assets/assets/img/cinematics/MG_XM03_CINEMATIC.png": "b078f809d7f53272733fdbb33264fcf2",
"assets/assets/img/cinematics/MG_XM07_CINEMATIC.png": "0259e5e61e09e0c694648754ae25a7b4",
"assets/assets/img/cinematics/MG_XM10_CINEMATIC.png": "65cfa484f97cac29897de48d5662db86",
"assets/assets/img/cinematics/INTRO_XM_CINEMATIC_video.mp4": "f6d5e2c015722f97f23ad2a07f138f23",
"assets/assets/img/cinematics/MG_XM11_CINEMATIC.png": "f7764d646da516fea8fc3d279862544e",
"assets/assets/img/cinematics/MG_XM06_CINEMATIC.png": "af27efa61c8fef7247f595c5cf6dd377",
"assets/assets/img/cinematics/MG_XM02_CINEMATIC.png": "57892d6639423cf873d4e07ebb51841e",
"assets/assets/img/cinematics/MG_XM10_CINEMATIC_video.mp4": "e9324fcd19131f95c57a4ce040863a83",
"assets/assets/img/cinematics/MG_XM05_CINEMATIC.png": "9d12087f0aef84dad469a056dbba1bcb",
"assets/assets/img/cinematics/MG_XM12_CINEMATIC.png": "077cef469e461854131451aaab61372f",
"assets/assets/img/cinematics/MG_XM09_CINEMATIC_video.mp4": "36e2e1c16aa40c803a56741c7cc89df2",
"assets/assets/img/cinematics/MG_XM01_CINEMATIC.png": "bc415712864447ee2cd2d04122614625",
"assets/assets/img/cinematics/MG_XM11_CINEMATIC_video.mp4": "d98e5602a0f2a12fec31fc0bccf2d5ea",
"assets/assets/img/cinematics/MG_XM08_CINEMATIC_video.mp4": "3a686f2072a7afb2ad5bf965422dc1ba",
"assets/assets/img/cinematics/MG_XM12_CINEMATIC_video.mp4": "bd8e3f5340c02da0b5ab676275a360cc",
"assets/assets/img/cinematics/MG_XM07_CINEMATIC_video.mp4": "f4ac4d0e842ae3be81e1b1776f33b9b9",
"assets/assets/img/cinematics/MG_XM06_CINEMATIC_video.mp4": "4dbb1ef1641eccf5688fbd5d32e5f4ac",
"assets/assets/img/cinematics/MG_XM05_CINEMATIC_video.mp4": "d5ebb2a752374339c883ab511832c7bf",
"assets/assets/img/cinematics/MG_XM04_CINEMATIC_video.mp4": "78f7ae200ec4bdaaa4a4c039fc8851ff",
"assets/assets/img/cinematics/MG_XM02_CINEMATIC_video.mp4": "339b5e0640bd5402047dd5d92222ab22",
"assets/assets/img/cinematics/MG_XM08_CINEMATIC.png": "d33b7ffd5dce48c5c3a58e13fd6b6d5b",
"assets/assets/img/cinematics/MG_XM03_CINEMATIC_video.mp4": "b78f81109aa3bcf3806fc3562c5e61a0",
"assets/assets/img/cinematics/MG_XM01_CINEMATIC_video.mp4": "4b8243210818bc9515c3f69663a38b75",
"assets/assets/img/baby_bear/baby_bear2.png": "7d55a87476da54b96753fec61fca32b6",
"assets/assets/img/baby_bear/baby_bear3.png": "503372d31cba1dc5bc73e088caa21f48",
"assets/assets/img/baby_bear/baby_bear1.png": "82b56fa9c4b53e837d597d05c672efd5",
"assets/assets/img/baby_bear/baby_bear4.png": "58bdaff77016c6c62f3e6cd4f6641444",
"assets/assets/img/ui/navigation/hud_home.png": "b119a6aef2aef6bd7e330d7501740551",
"assets/assets/img/ui/navigation/hud_setting.png": "1d8ca5db29b39c558aa2a7679e28efcb",
"assets/assets/img/ui/navigation/hud_back.png": "4bebe851fbe550fa0efc075f00cb10ed",
"assets/assets/img/ui/navigation/hud_play.png": "31356ead9022b7bc810f0e1a8e9d8327",
"assets/assets/img/ui/navigation/hud_next.png": "7ed2f7fb6bf0fb802100d6f97640d9d7",
"assets/assets/img/game_title/text_games.png": "25ed82d2d4f4df176a26a289f4b1966d",
"assets/assets/img/game_title/text_fun.png": "853e59295c3e1690d0598ab27fff9fe4",
"assets/assets/img/game_title/text_christmas.png": "d3cf1aa6db75706f4f24e03893761ceb",
"assets/assets/img/stickers/sticker_penguin.png": "b00004d17c0de4eadce10fe9eb0f7772",
"assets/assets/img/stickers/sticker_reindeer.png": "0c6ec9225e70738fc28e2a7de526242d",
"assets/assets/img/stickers/sticker_sleigh.png": "31be85e1ff476fb25c3eee2d0b195d2d",
"assets/assets/img/stickers/reward_sticker_scene_mg12.png": "826e10393e529df4f45245f629e5d097",
"assets/assets/img/stickers/sticker_bell.png": "361da8ab6caf1574f9951162845fe915",
"assets/assets/img/toy_stickers/sticker_bear.png": "d9d95304aeca8aa714a443b486ca4f3b",
"assets/assets/img/toy_stickers/sticker_snowglobe.png": "e765f0440668f786abde97c86b3a3be2",
"assets/assets/img/toy_stickers/sticker_train.png": "422e5e94559f9ff49b854546605823ba",
"assets/assets/img/toy_stickers/reward_sticker_scene.png": "5ad2b0c6d6ebeec79fb6e5add3140d42",
"assets/assets/img/toy_stickers/sticker_car.png": "541438818ce7373b0bb0b109944c4223",
"assets/assets/img/gingerbread_numbers/gingerbread_num_4.png": "19fd702408980fd21817b330e9120c93",
"assets/assets/img/gingerbread_numbers/gingerbread_num_5.png": "d749bf4138710e542c72dd58d9b1d83e",
"assets/assets/img/gingerbread_numbers/gingerbread_num_7.png": "bb65e7dd2b6dab1bb7ced6acbc1d1951",
"assets/assets/img/gingerbread_numbers/gingerbread_num_6.png": "d49f790183dd13b49413a7abdf2e7fdd",
"assets/assets/img/gingerbread_numbers/gingerbread_num_2.png": "ba134334c9eba7e8c950280d4c67ef6d",
"assets/assets/img/gingerbread_numbers/gingerbread_num_3.png": "ee4f6d19084b9330b67f12e36133f7b5",
"assets/assets/img/gingerbread_numbers/gingerbread_num_1.png": "f45dcbc2031d0ec4458b31afe7924398",
"assets/assets/img/gingerbread_numbers/gingerbread_num_0.png": "dda960acabe07469ed1649aefa1fbc40",
"assets/assets/img/gingerbread_numbers/gingerbread_num_8.png": "18311361349e050f44115887dca54436",
"assets/assets/img/gingerbread_numbers/gingerbread_num_9.png": "588bb588849f52637a2141d08ab2cf05",
"assets/assets/img/gingerbread_numbers/gingerbread_num_10.png": "4fab1f0d0662fa8bb9a4d5d19eadb5d5",
"assets/assets/img/window_items/snowflake.png": "89689d2c65211fe73df6d4f79fded432",
"assets/assets/img/window_items/candy.png": "46ffb7ecd28742e9c2d5209fc3462ccf",
"assets/assets/img/window_items/bunny.png": "4d4ddf4e2dee860dfc1caeecf9ec685c",
"assets/assets/img/window_items/tree.png": "dcaea2a5b6621fdc92b6853d3a87c290",
"assets/assets/img/window_items/snowman.png": "c1cbdba9f2a0a1d2efa44871b7aa3e3b",
"assets/assets/img/window_items/bauble.png": "8d9d1ffa0e7b71c1bde1c4e31ab202c5",
"assets/assets/img/stockings/stocking_bear_green.png": "c3db24d008de7d97b4816589a057677a",
"assets/assets/img/stockings/stocking_fox_lilac.png": "3ef531435f3fcc299574d3c7a9df27af",
"assets/assets/img/stockings/stocking_owl_orange.png": "846b1e46c065092027d538072a2597d8",
"assets/assets/img/stockings/stocking_reindeer_red.png": "f6e1760d154a06edf20b0373d4e0819d",
"assets/assets/img/decorations/garland_on_northern.png": "59abee5dab0dcce74ee6835210f6e803",
"assets/assets/img/decorations/garland_off.png": "de4f8592b3621cc935282981ad617fd9",
"assets/assets/img/decorations/garland_on.png": "7baaf3daec8b244986136e1d2d24e322",
"assets/assets/img/decorations/garland_mantle_on.png": "1f37f5331f73748ecd18b5e6a3567bbd",
"assets/assets/img/decorations/wreath_garland.png": "653629f9a3da52b55740b718470b776c",
"assets/assets/img/decorations/garland_off_northern.png": "478873c93f990409d918f37b2b638e65",
"assets/assets/img/vfx/snowflakes/snowflakepart_03.png": "5cca2f7a707ae833c41e000c30fdab7d",
"assets/assets/img/vfx/snowflakes/snowflakepart_02.png": "5b9d6a04b3773d1bcefc9236666a6f61",
"assets/assets/img/vfx/snowflakes/snowflakepart_01.png": "a35d6bcbf9a3baf1b57dbbe77f69a28e",
"assets/assets/img/vfx/snowflakes/README.md": "ad41ca50fe4fea545a76b0faba58766c",
"assets/assets/img/vfx/confetti/README.md": "ad41ca50fe4fea545a76b0faba58766c",
"assets/assets/img/vfx/confetti/Confetti_01.png": "cdc3e05068bc7ad184d4bb7c38d0bfdd",
"assets/assets/img/vfx/confetti/Confetti_02.png": "3c3afb889bf8f93c32787553d9fd0e4b",
"assets/assets/img/vfx/confetti/Confetti_03.png": "c3d6db43dbf342e4679a4bf882fcdde1",
"assets/assets/img/vfx/confetti/Confetti_06.png": "25e5fecd96edcaab617e88c8e722ce1a",
"assets/assets/img/vfx/confetti/Confetti_04.png": "9ef30e731c84abfcf91af1629f4282ed",
"assets/assets/img/vfx/confetti/Confetti_05.png": "30afbe762cae3c64ec3ee0331b61dee5",
"assets/assets/img/vfx/3_sparks.png": "f8fc890b8249edf3989a0043fb244042",
"assets/assets/img/vfx/rays/rays_soft_hero_rainbow.png": "81b82513cc583c826f1ca864b1a8491b",
"assets/assets/img/vfx/rays/rays_soft_hero_gold_2.png": "b89402b49768101fee79248eca975a07",
"assets/assets/img/vfx/rays/glimmer_hero_soft.png": "548af840f96736f50c6add065ed9bdd1",
"assets/assets/img/vfx/rays/rays_soft_hero_gold.png": "0482a5204cf71d2fbcbc5208d042aa92",
"assets/assets/img/backgrounds/scene_background_night_sky.png": "0c00e858d8de3c1663b5b1bec280eb78",
"assets/assets/img/backgrounds/mg02_aurora_northern_lights.png": "c3bfd94bc01352df97005f296787b885",
"assets/assets/img/backgrounds/mg05_fireplace_room.png": "5aba3fc59c642f66c8afe065e288a93f",
"assets/assets/img/backgrounds/mg01_forest_clearing.png": "e957e58bd4ef0819519ce574fb6035ce",
"assets/assets/img/backgrounds/mg12_sticker_album_background.png": "96fa2a5b15c997499a8ff82f32523352",
"assets/assets/img/backgrounds/mg11_sticker_album_background.png": "bb5098eab090a56ff9f9b6546e800ae5",
"assets/assets/img/backgrounds/splash_background.png": "0974a7082b4c32ae5a71f09b044b0440",
"assets/assets/img/backgrounds/mg04_gingerbread_house.png": "8e81f1abf389385901a7d53e1dd7835b",
"assets/assets/img/backgrounds/mg03_holiday_entrance.png": "4d30edf3dc9bbd4b6b99436256e8f482",
"assets/assets/img/backgrounds/home_screen_background.png": "58d5334ec41801aa2a89700d88938264",
"assets/assets/img/backgrounds/scene_background_vibrant_blue.png": "54300323bc56f3c16b675a98b4132533",
"assets/assets/img/backgrounds/room_window_composite.png": "8d771125a5e2fdd18a341d6e666c4be5",
"assets/assets/img/backgrounds/scene_background_evening.png": "897728b8b813acd46bc4362294e7734e",
"assets/assets/img/backgrounds/scene_background_winter_flat.png": "97dfab9bd333965edba4330ee735931c",
"assets/assets/img/santa_reindeer/window.png": "c9ff1888a7a3e7b1855a9f1d585cfe34",
"assets/assets/img/santa_reindeer/santa_reindeer1.png": "7468ddd5ca54d047f069390d68a630d5",
"assets/assets/img/santa_reindeer/santa_reindeer3.png": "0d89c6e9a60fec77c097eacf4a8c3709",
"assets/assets/img/santa_reindeer/santa_reindeer2.png": "1ab8aa566e78165ef6c467dd7beb24fd",
"assets/assets/img/gestures/drag_drop.webp": "9e5ef1aad27e26a0a5db64950a3316ac",
"assets/assets/img/gestures/drag_drop.gif": "824ad77d6c3410d970cf60222c83fe99",
"assets/assets/img/baby_reindeer/baby_reindeer4.png": "ac91b03d12dfbdbd6fe34a7d9e87d699",
"assets/assets/img/baby_reindeer/baby_reindeer3.png": "7111d1694536c80544d349b03430729d",
"assets/assets/img/baby_reindeer/baby_reindeer2.png": "553fd6a5697439a2f4221f2a770c1c41",
"assets/assets/img/baby_reindeer/baby_reindeer1.png": "6aaa69b03a5444c31e5a707b1c144390",
"assets/assets/img/happy_santa/happy_santa4.png": "9a18efcb97933c8f0f799a0bf3977390",
"assets/assets/img/happy_santa/happy_santa3.png": "a0b74772e019b90d04184adc863f832b",
"assets/assets/img/happy_santa/happy_santa2.png": "c0eecd555198d9dc7c9134a4505ffd99",
"assets/assets/img/happy_santa/happy_santa1.png": "ce7d17052679382740ecce7f9f2aec6f",
"assets/assets/img/characters/gingerbread_man_celebrate.webp": "1b2b7c9dc0c90a1ecefc7b886e272dff",
"assets/assets/img/characters/gingerbread_man_idle.webp": "3af39c6c4ad6d4e25f6bd0a490591de5",
"assets/assets/img/characters/baby_reindeer_celebrate.webp": "a6f7ba8531bbe9013d42379de5fd692f",
"assets/assets/img/characters/baby_reindeer.png": "de515607a1d19a9230bdc266a3b174e0",
"assets/assets/img/characters/snowman_orange_pink_hat_celebrate.webp": "4bdb2ada3a48692f4afffff255898d82",
"assets/assets/img/characters/polar_bear_cub.png": "899837e9fc5a86bab8bf19ddb4f38c4b",
"assets/assets/img/characters/polar_bear_cub_hooray.webp": "a110949a09f1c86ae14217f2ef17210a",
"assets/assets/img/characters/snowman_orange_pink_hat_idle.webp": "155be5744b341d510f9f1a13a670e168",
"assets/assets/img/characters/polar_bear_cub_idle.webp": "42334a5360efa95eb2d45d8da53dcdf9",
"assets/assets/img/characters/gingerbread_man.png": "66fc6694a919ba53c7c0716426c3d5f5",
"assets/assets/img/characters/duo_penguins_idle.webp": "c50e478b0598f66e5d33d2818630c8cc",
"assets/assets/img/characters/duo_penguins_celebrate.webp": "d85c0eb380ee87515c66498a5171e3bd",
"assets/assets/img/characters/duo_penguins.png": "5a1d31cada687638929775e7b0ba2f0a",
"assets/assets/img/characters/snowman_orange_pink_hat.png": "05551bb3462018f8c7c7b3ec7182a84f",
"assets/assets/img/characters/baby_reindeer_idle.webp": "8fe6bb575bd1b566f81dc1ea016a39f7",
"assets/assets/img/ornaments/ornament_pinecone_a.png": "49b8a298d6d01ebcdb335d0fe18b52ca",
"assets/assets/img/ornaments/ornament_heart_velvet.png": "316e5630c75f7c91763e43675ca8ba45",
"assets/assets/img/ornaments/ornament_bow_red.png": "f1d8c79bcc8bd32bdbb60116d4cb3e71",
"assets/assets/img/ornaments/ornament_toy_car.png": "2c73a1c1973423ffcbb5a98e1ffbc179",
"assets/assets/img/ornaments/ornament_pinecone_b.png": "525e66a2f3d049cd8429bdd494e40cff",
"assets/assets/img/ornaments/ornament_gingerbread_man.png": "ffb456dd571eba1d936d1aa028a30e08",
"assets/assets/img/ornaments/ornament_snowman.png": "1eb219ca6a6758b02f89c051dd7fd980",
"assets/assets/img/ornaments/ornament_bird_cardinal.png": "898a32751ec7a8715c2ffa5202a58f0b",
"assets/assets/img/ornaments/ornament_bell_gold.png": "aa910000c4a62754e3d177614b196238",
"assets/assets/img/ornaments/ornament_bow_red_large.png": "fd10b80fe0ee625c2536d0beed98c224",
"assets/assets/img/ornaments/ornament_snowflake_white.png": "e13d3a7305b029ce34b184ee805d9f1f",
"assets/assets/img/ornaments/ornament_reindeer.png": "4852506a8c2d85bf6be125aba0abb675",
"assets/assets/img/ornaments/ornament_berries_holly_b.png": "421c0a8b277a0b991333f6e9a9bfd951",
"assets/assets/img/ornaments/ornament_berries_holly_a.png": "5f79a42903e61de0d82bf32164ef69f0",
"assets/assets/img/ornaments/ornament_star_topper.png": "cb610f939f6fefe06a2346b076ba3829",
"assets/assets/img/ornaments/ornament_bell_gold_large.png": "e56378c0b22a53777a651bdfb21e6bcd",
"assets/assets/img/ornaments/ornament_angel.png": "9b95cec91f1e8ee076c9adead4854304",
"assets/assets/img/ornaments/ornament_candy_cane.png": "88b050d8e6425212c2ded902d2fef544",
"assets/assets/img/ornaments/ornament_house.png": "0d5ff7e6985cc341c1f09f82166c6ae4",
"assets/assets/img/ornaments/ornament_nutcracker.png": "67e79d16aaff5da3c5c6af8915202f2d",
"assets/assets/img/ornaments/ornament_candy_cane_a.png": "6c566f973f3307d70932ef2c4b022de0",
"assets/assets/img/ornaments/ornament_star_gold_small.png": "bddd813ac34433ced22d6237c45b4eb5",
"assets/assets/img/fireplace_stockings/stocking_green.png": "6caaf8debf3c9cfa85fb43e85360577a",
"assets/assets/img/fireplace_stockings/stocking_red.png": "32657afc8ff86d693936fc60310e67ef",
"assets/assets/img/fireplace_stockings/stocking_blue.png": "c3c8b411acad1672e4aaf6590ade3439",
"assets/assets/img/fireplace_stockings/stocking_white.png": "87bd608b7847b214411084c924af29d4",
"assets/assets/img/fireplace_stockings/stocking_striped.png": "aea7f7a7f71f5f98db67651d0f569246",
"assets/assets/img/gingerbread_house_ornaments/hse_bell_wreath_center.png": "353f5fa0753df091e604c55379286709",
"assets/assets/img/gingerbread_house_ornaments/hse_snowflake_left.png": "c90c3163339ab6bfae2261850d5481c4",
"assets/assets/img/gingerbread_house_ornaments/gingerbread_heart.png": "7a5aac90de4eadb15ae2b5024123a4fb",
"assets/assets/img/gingerbread_house_ornaments/gingerbread_decoration.png": "063a7d97456351a7b2ef87192b56cb3d",
"assets/assets/img/gingerbread_house_ornaments/hse_snowflake_right.png": "3927d194a152a816200dfd3b287f1f7c",
"assets/assets/img/gingerbread_house_ornaments/hse_lollipop_spiral.png": "afc68064cb2e99f2af9ef80b42245af7",
"assets/assets/img/baubles/ornament_bauble_green.png": "d0476cfd71031571518a5512de747ae2",
"assets/assets/img/baubles/ornament_blue_snowflake_pattern.png": "9b47af8e228688cd0736f2f1805bed55",
"assets/assets/img/baubles/ornament_pink_diagonal_stripe.png": "8ae2d4d7aa4776cc413ed3c04cd3cf02",
"assets/assets/img/baubles/ornament_bauble_yellow.png": "a0cf7eb4e5e3752b61dd1f453bb50c66",
"assets/assets/img/baubles/ornament_bauble_red.png": "7cde0445fb4f75e913bf5d37b7bc24f3",
"assets/assets/img/baubles/hse_bauble_red_stripe.png": "fb2ee051f551fb7b5a041c6c5423fa62",
"assets/assets/img/baubles/ornament_bauble_pink.png": "d6208ccd6f1ed0a7b0f8792050fc871f",
"assets/assets/img/baubles/ornament_bauble_blue.png": "97f82a7294407594a4a5ad771281e90f",
"assets/assets/img/baubles/hse_bauble_red_green.png": "52d8a3ce4a09f7ddcd0214842335decd",
"assets/assets/img/dragees/hse_candy_dragee_lilac.png": "05cd29e332158d665f34ced7f81a7472",
"assets/assets/img/dragees/hse_candy_dragee_blue.png": "7407cff7acbb41ea3dd4ff8a75e31857",
"assets/assets/img/dragees/hse_candy_dragee_pink.png": "4f7523c0f75a835944aa96b471990866",
"assets/assets/img/dragees/hse_candy_dragee_yellow.png": "274f50b57fa4f0f834d696c0fea086bd",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
