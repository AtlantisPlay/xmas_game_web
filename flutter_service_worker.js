'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a4606194920f75c5dbf5e31c4fa6fffa",
"version.json": "f881f45bdcee82256a52fa211f663388",
"index.html": "9ffb06a99732c7557b9e55e2a33e3830",
"/": "9ffb06a99732c7557b9e55e2a33e3830",
"main.dart.js": "a5bd637c8bee40a724b6bf57ed0a19c7",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b4203c989239bcc68546e2b67664e86",
"assets/NOTICES": "ee7e4348290e72b0e058b5bfae41cc22",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "7d3985f2fa419324a46f6e86bdf1958b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "d191ff72c55014567188ff88a3e828f2",
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
"assets/assets/vo/uk/narrator/mg09_intro.wav": "b645d7f2a8318fb3ccc4e899f84b6bb7",
"assets/assets/vo/uk/narrator/mg10_intro.wav": "6bb282f87dee60b40e26a66449158730",
"assets/assets/vo/uk/narrator/mg03_final.wav": "ff4220d855f5819ad4d5572f0ec0235e",
"assets/assets/vo/uk/narrator/mg11_final.wav": "51d511c1d73e87b90fc43e03facc81ff",
"assets/assets/vo/uk/narrator/mg05_final.wav": "c606ea7d094423fe80ad3406f658cf65",
"assets/assets/vo/uk/narrator/mg02_intro.wav": "51dcad882886e91dcaecbb785b9e71fb",
"assets/assets/vo/uk/narrator/teach_num_9.wav": "2f62a6c6eb73492a29232b33ef1400e0",
"assets/assets/vo/uk/narrator/teach_num_8.wav": "14eacd2279dd9be2fd8832f1d7a38d15",
"assets/assets/vo/uk/narrator/mg11_intro.wav": "71849061f34427025853733c8103e7fe",
"assets/assets/vo/uk/narrator/mg05_intro.wav": "ec2719795c6f73fb23c3b7e75bc1af89",
"assets/assets/vo/uk/narrator/mg02_final.wav": "de3ec80a4eef4c6ee0df4c6f5004d837",
"assets/assets/vo/uk/narrator/mg09_final.wav": "57a3cd1cb3cce34335419239a23eaa93",
"assets/assets/vo/uk/narrator/mg02_hint.wav": "10a70342cefceb4698db33031c4f8f57",
"assets/assets/vo/uk/narrator/mg03_hint.wav": "714d82e82d1eb1df4b6b48c4c4a9882b",
"assets/assets/vo/uk/narrator/mg04_final.wav": "6499996d7110f80b60ab41073e7fcbb1",
"assets/assets/vo/uk/narrator/mg10_final.wav": "fb25fdce1344c30af880165e819662ce",
"assets/assets/vo/uk/narrator/teach_num_0.wav": "e3294f5e6a6668041e63bfb18c2fd238",
"assets/assets/vo/uk/narrator/teach_num_1.wav": "cedb91c23345d260b5d36323503dd8b1",
"assets/assets/vo/uk/narrator/teach_num_3.wav": "2b8d8bd4cad09c0e625612552240a2d1",
"assets/assets/vo/uk/narrator/mg01_final.wav": "cab7d225191abac4955b7f734ba6cf67",
"assets/assets/vo/uk/narrator/mg06_intro.wav": "7bc9b199cab05acb7447dd90624d3239",
"assets/assets/vo/uk/narrator/teach_num_2.wav": "fb9e5c31c71dbb0097108185d0a60d87",
"assets/assets/vo/uk/narrator/mg12_intro.wav": "eb7f2a55f37edbe8598938b479fc13d0",
"assets/assets/vo/uk/narrator/teach_num_6.wav": "f57aaf5e806a161aa26c06a0d3d1543a",
"assets/assets/vo/uk/narrator/teach_num_7.wav": "65132b9d7ffc6de01f37ba11b1e9447a",
"assets/assets/vo/uk/narrator/teach_num_5.wav": "659aab1b2127b4afdeabb0d8808eeb08",
"assets/assets/vo/uk/narrator/teach_num_4.wav": "f10892dedd8fb9138a9167eb171dc2fe",
"assets/assets/vo/uk/narrator/mg01_hint.wav": "5ca3511fe037b10c61f8a5d31b8a3a46",
"assets/assets/vo/uk/narrator/mg01_intro.wav": "06fffd5a13acdcee4e24847135215ffd",
"assets/assets/vo/uk/narrator/teach_num_10.wav": "774fa106574d5cea890805a81ee83bbf",
"assets/assets/vo/uk/narrator/mg06_final.wav": "6664e117990432daa6f0a515d2f45410",
"assets/assets/vo/uk/narrator/mg12_final.wav": "a1e1b12dcdbb2f18c8810fd57e7408ac",
"assets/assets/vo/en/narrator/mg09_intro.wav": "bd7abe941316d94799b7ca524e977146",
"assets/assets/vo/en/narrator/mg10_intro.wav": "7132b49c1f7c8f28cc76859f3d80ba5d",
"assets/assets/vo/en/narrator/mg03_final.wav": "b3b20038a6954947b24d98add369fff8",
"assets/assets/vo/en/narrator/mg11_final.wav": "d5b1eb25b9e3570597d1e44401f6e227",
"assets/assets/vo/en/narrator/mg05_final.wav": "c4a0ea04207cb3ae539c7ceaf5d96237",
"assets/assets/vo/en/narrator/mg02_intro.wav": "6488a58851db912072c112be5e497647",
"assets/assets/vo/en/narrator/teach_num_9.wav": "c363e78c5b6c42aee953d4e2a2a6834c",
"assets/assets/vo/en/narrator/teach_num_8.wav": "0cce57a788e404984e21a70a4b6f3504",
"assets/assets/vo/en/narrator/mg11_intro.wav": "129a07c085b23a93c6650934fdb48021",
"assets/assets/vo/en/narrator/mg05_intro.wav": "7d5a12bcaf3e71b40036208bfaf52f36",
"assets/assets/vo/en/narrator/mg02_final.wav": "b30b3c5abb911f26e26b11ff784dfeea",
"assets/assets/vo/en/narrator/mg09_final.wav": "9967a295b087f6c6469dc38a0564a900",
"assets/assets/vo/en/narrator/mg02_hint.wav": "4b06298dc247fe8fddc58be08baf4083",
"assets/assets/vo/en/narrator/mg03_hint.wav": "386b294f4f00557145d3fd1ce168e26d",
"assets/assets/vo/en/narrator/mg04_final.wav": "d37bcba6c86f3c8685bb4a837f6d848e",
"assets/assets/vo/en/narrator/mg10_final.wav": "07578b39900beabdb6ac8bca695c17a4",
"assets/assets/vo/en/narrator/teach_num_0.wav": "5a58158d92a8bfe06b252fbbabbcf6aa",
"assets/assets/vo/en/narrator/teach_num_1.wav": "db94818989bdd1e2abfc766db27d309f",
"assets/assets/vo/en/narrator/teach_num_3.wav": "cdc60211b580dcf7de4a286781099dc1",
"assets/assets/vo/en/narrator/mg01_final.wav": "8efd167e12e917528f52dd45d7756e34",
"assets/assets/vo/en/narrator/mg06_intro.wav": "55f802014d15ddc38e8d5652f073f7f2",
"assets/assets/vo/en/narrator/teach_num_2.wav": "a8c3185196eee5434246ce826bea3bf2",
"assets/assets/vo/en/narrator/mg12_intro.wav": "902c0b50f43aec089a1b3c86ba96784e",
"assets/assets/vo/en/narrator/teach_num_6.wav": "92a0305d25b20d0a31c2072c5f0fa9c3",
"assets/assets/vo/en/narrator/teach_num_7.wav": "a7181e3b0250903657bbd5acf62715c4",
"assets/assets/vo/en/narrator/teach_num_5.wav": "7cf162e8947e21b8aa43cef46d0152bc",
"assets/assets/vo/en/narrator/teach_num_4.wav": "e09ee379e354b00d12d2de3e9b2bd74f",
"assets/assets/vo/en/narrator/mg01_hint.wav": "886dbd1fb20fc72e045675f76c33086a",
"assets/assets/vo/en/narrator/mg01_intro.wav": "ef49631f73815934b2c93ffb7d9e538f",
"assets/assets/vo/en/narrator/teach_num_10.wav": "2e604a297565225aedaa4238f5ee36ef",
"assets/assets/vo/en/narrator/mg06_final.wav": "4b3908357b9331ae2853153c07bc8a86",
"assets/assets/vo/en/narrator/mg12_final.wav": "8e74346907bb0fea5e78c8c2bbb7d008",
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
"assets/assets/img/cinematics/INTRO_XM_CINEMATIC.png": "a9a56b29dbb938dacd28a6c9e4abdbe4",
"assets/assets/img/cinematics/MG_XM09_CINEMATIC.png": "19ae12df37f9fac2e90f70d1c030166b",
"assets/assets/img/cinematics/MG_XM04_CINEMATIC.png": "9c779d7f70d0df11e64ad778a8dc6f6b",
"assets/assets/img/cinematics/MG_XM03_CINEMATIC.png": "b078f809d7f53272733fdbb33264fcf2",
"assets/assets/img/cinematics/MG_XM07_CINEMATIC.png": "0259e5e61e09e0c694648754ae25a7b4",
"assets/assets/img/cinematics/MG_XM10_CINEMATIC.png": "65cfa484f97cac29897de48d5662db86",
"assets/assets/img/cinematics/INTRO_XM_CINEMATIC_video.mp4": "0cd8a14cbb47e80f74cff12f3acc1d29",
"assets/assets/img/cinematics/MG_XM11_CINEMATIC.png": "f7764d646da516fea8fc3d279862544e",
"assets/assets/img/cinematics/MG_XM06_CINEMATIC.png": "af27efa61c8fef7247f595c5cf6dd377",
"assets/assets/img/cinematics/MG_XM02_CINEMATIC.png": "57892d6639423cf873d4e07ebb51841e",
"assets/assets/img/cinematics/MG_XM10_CINEMATIC_video.mp4": "ea7d6a20b597999e9865992b8cf0e017",
"assets/assets/img/cinematics/MG_XM05_CINEMATIC.png": "9d12087f0aef84dad469a056dbba1bcb",
"assets/assets/img/cinematics/MG_XM12_CINEMATIC.png": "077cef469e461854131451aaab61372f",
"assets/assets/img/cinematics/MG_XM09_CINEMATIC_video.mp4": "06617fbda00eb78f9eb926fd41a5eedb",
"assets/assets/img/cinematics/MG_XM01_CINEMATIC.png": "bc415712864447ee2cd2d04122614625",
"assets/assets/img/cinematics/MG_XM11_CINEMATIC_video.mp4": "d98e5602a0f2a12fec31fc0bccf2d5ea",
"assets/assets/img/cinematics/MG_XM08_CINEMATIC_video.mp4": "bad8288fc10a5a7a8bf290f20a0f45b3",
"assets/assets/img/cinematics/MG_XM12_CINEMATIC_video.mp4": "bd8e3f5340c02da0b5ab676275a360cc",
"assets/assets/img/cinematics/MG_XM07_CINEMATIC_video.mp4": "927391139c9ade4419ce85ca9f9b1dc9",
"assets/assets/img/cinematics/MG_XM06_CINEMATIC_video.mp4": "3d437356df6d05d98d7849bc39787d3d",
"assets/assets/img/cinematics/MG_XM05_CINEMATIC_video.mp4": "abe275cc9b71940c959280266a6fbe6a",
"assets/assets/img/cinematics/MG_XM04_CINEMATIC_video.mp4": "78f7ae200ec4bdaaa4a4c039fc8851ff",
"assets/assets/img/cinematics/MG_XM02_CINEMATIC_video.mp4": "a3e3ca729a8f2f523508da376dd6e4a9",
"assets/assets/img/cinematics/MG_XM08_CINEMATIC.png": "d33b7ffd5dce48c5c3a58e13fd6b6d5b",
"assets/assets/img/cinematics/MG_XM03_CINEMATIC_video.mp4": "b78f81109aa3bcf3806fc3562c5e61a0",
"assets/assets/img/cinematics/MG_XM01_CINEMATIC_video.mp4": "321f6615ace2cce1907a09ac625d51e6",
"assets/assets/img/ui/navigation/hud_home.png": "b119a6aef2aef6bd7e330d7501740551",
"assets/assets/img/ui/navigation/hud_setting.png": "1d8ca5db29b39c558aa2a7679e28efcb",
"assets/assets/img/ui/navigation/hud_back.png": "4bebe851fbe550fa0efc075f00cb10ed",
"assets/assets/img/ui/navigation/hud_play.png": "31356ead9022b7bc810f0e1a8e9d8327",
"assets/assets/img/ui/navigation/hud_next.png": "7ed2f7fb6bf0fb802100d6f97640d9d7",
"assets/assets/img/game_title/text_games.png": "a8ba908c898ab5ff232fd6a5a1c88187",
"assets/assets/img/game_title/text_fun.png": "99eb8460bb06ddfa41d283c8e75c8c15",
"assets/assets/img/game_title/text_christmas.png": "4213971a048d7bb5c0696328883d95ca",
"assets/assets/img/stickers/sticker_penguin.png": "3929466686a16c8b26ba5e0f0a482389",
"assets/assets/img/stickers/sticker_reindeer.png": "b2c2344f037cc10ed1e6da6f6b1b84d7",
"assets/assets/img/stickers/sticker_sleigh.png": "87a33b4ab6ed1cbc898b91d33ddd487b",
"assets/assets/img/stickers/reward_sticker_scene_mg12.png": "491ba7635addd0f6dcc78b8a5bfce0fd",
"assets/assets/img/stickers/sticker_bell.png": "56b71a05e08ddda80f4e06dc6adf27af",
"assets/assets/img/toy_stickers/sticker_bear.png": "dcc5a6e90041b4ea825546f0978f2c89",
"assets/assets/img/toy_stickers/sticker_snowglobe.png": "a5b360116768f699e7db2aa39e7b1374",
"assets/assets/img/toy_stickers/sticker_train.png": "7379d2f2acc065f751d06eb5aadb44c1",
"assets/assets/img/toy_stickers/reward_sticker_scene.png": "b0db1f595fa0f562de8df97e3eace985",
"assets/assets/img/toy_stickers/sticker_car.png": "9d9544cd91da346f17f43aa01ee45abd",
"assets/assets/img/gingerbread_numbers/gingerbread_num_4.png": "dc8720d8c01988c1014a5a57ff0a89a6",
"assets/assets/img/gingerbread_numbers/gingerbread_num_5.png": "b5898c1cf765b0673177465fd95ba912",
"assets/assets/img/gingerbread_numbers/gingerbread_num_7.png": "6e16f91e7b0ecb3e60e5525c3b5e477f",
"assets/assets/img/gingerbread_numbers/gingerbread_num_6.png": "c334110b71c1e580b0dd2f2e0186e3e5",
"assets/assets/img/gingerbread_numbers/gingerbread_num_2.png": "cd525270ba0222d5ce3c74cb6aa5ac86",
"assets/assets/img/gingerbread_numbers/gingerbread_num_3.png": "ae4d0bd223628a5ce59452fb8b5c997c",
"assets/assets/img/gingerbread_numbers/gingerbread_num_1.png": "b3fd21d8b0f2f2c226686d80dce2648f",
"assets/assets/img/gingerbread_numbers/gingerbread_num_0.png": "439891cbc51f10ba1544992a86b390d1",
"assets/assets/img/gingerbread_numbers/gingerbread_num_8.png": "396b82d285c0a236f2547de155339ba3",
"assets/assets/img/gingerbread_numbers/gingerbread_num_9.png": "1e7e12f20136bd32bc9f57988e487d08",
"assets/assets/img/gingerbread_numbers/gingerbread_num_10.png": "c1b292f08398e73e1c537d477d35c32b",
"assets/assets/img/window_items/snowflake.png": "89689d2c65211fe73df6d4f79fded432",
"assets/assets/img/window_items/candy.png": "46ffb7ecd28742e9c2d5209fc3462ccf",
"assets/assets/img/window_items/bunny.png": "4d4ddf4e2dee860dfc1caeecf9ec685c",
"assets/assets/img/window_items/tree.png": "dcaea2a5b6621fdc92b6853d3a87c290",
"assets/assets/img/window_items/snowman.png": "c1cbdba9f2a0a1d2efa44871b7aa3e3b",
"assets/assets/img/window_items/bauble.png": "8d9d1ffa0e7b71c1bde1c4e31ab202c5",
"assets/assets/img/stockings/stocking_bear_green.png": "b5bce60cfa69ed41a3e7c075ee7a60e1",
"assets/assets/img/stockings/stocking_fox_lilac.png": "7956c834460a020159f28eaa7da1cd60",
"assets/assets/img/stockings/stocking_owl_orange.png": "09cdba3a9550bccb61ac82f5b7c7251b",
"assets/assets/img/stockings/stocking_reindeer_red.png": "d4d72eca2a9da3ded0df9db0339f3335",
"assets/assets/img/decorations/wreath_lights_off_mg03.png": "2d269b139e9d368b6c3d9f47f4114f5f",
"assets/assets/img/decorations/garland_on_northern.png": "b85abc0c62d80ffd52e38265f8d292fd",
"assets/assets/img/decorations/garland_off.png": "de4f8592b3621cc935282981ad617fd9",
"assets/assets/img/decorations/garland_on.png": "9d7b61d48f9c15c3ab19fded55fa9046",
"assets/assets/img/decorations/garland_mantle_off.png": "9d80dc17fb811c2b72e1bc5bfe0fb7d8",
"assets/assets/img/decorations/garland_mantle_on.png": "e096e88d82993cc1d267e61aaea70f5e",
"assets/assets/img/decorations/garland_off_northern.png": "478873c93f990409d918f37b2b638e65",
"assets/assets/img/decorations/wreath_lights_on_mg03.png": "ac5f928475567aa67cc6414717cd3680",
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
"assets/assets/img/backgrounds/mg02_aurora_northern_lights.png": "6471736816364fb262cab59ef1607ec4",
"assets/assets/img/backgrounds/mg05_fireplace_room.png": "6e6571df4c47f83a9367103e4240a876",
"assets/assets/img/backgrounds/mg01_forest_clearing.png": "e957e58bd4ef0819519ce574fb6035ce",
"assets/assets/img/backgrounds/mg12_sticker_album_background.png": "96fa2a5b15c997499a8ff82f32523352",
"assets/assets/img/backgrounds/mg11_sticker_album_background.png": "05717612d3830eec1398738579f179a9",
"assets/assets/img/backgrounds/splash_background.png": "0974a7082b4c32ae5a71f09b044b0440",
"assets/assets/img/backgrounds/mg04_gingerbread_house.png": "e7a5df749087db37715c712d187a30a0",
"assets/assets/img/backgrounds/mg03_holiday_entrance.png": "4d30edf3dc9bbd4b6b99436256e8f482",
"assets/assets/img/backgrounds/home_screen_background.png": "58d5334ec41801aa2a89700d88938264",
"assets/assets/img/backgrounds/scene_background_vibrant_blue.png": "54300323bc56f3c16b675a98b4132533",
"assets/assets/img/backgrounds/room_window_composite.png": "8d771125a5e2fdd18a341d6e666c4be5",
"assets/assets/img/backgrounds/scene_background_evening.png": "2c6364642a3c11ca03c36f3773e12ce6",
"assets/assets/img/backgrounds/scene_background_winter_flat.png": "97dfab9bd333965edba4330ee735931c",
"assets/assets/img/characters/polar_bear_cub.png": "899837e9fc5a86bab8bf19ddb4f38c4b",
"assets/assets/img/characters/polar_bear_cub_hooray.webp": "a110949a09f1c86ae14217f2ef17210a",
"assets/assets/img/characters/penguin_red_hat_left_celebrate.webp": "f1e16758f85899141b053d4681d61eac",
"assets/assets/img/characters/polar_bear_cub_idle.webp": "42334a5360efa95eb2d45d8da53dcdf9",
"assets/assets/img/characters/penguin_green_hat_left_celebrate.webp": "2cb0dc96b07d973d5266933672965301",
"assets/assets/img/characters/penguin_red_hat_left.png": "b073ae0d05e832b8c58b804660943986",
"assets/assets/img/characters/snowman_orange_pink_hat.png": "05551bb3462018f8c7c7b3ec7182a84f",
"assets/assets/img/characters/penguin_green_hat_left_idle.webp": "86a20115f3a7402ad3a9e792efca1fcb",
"assets/assets/img/characters/penguin_red_hat_left_idle.mp4": "2a915efd857ae3f6f3ac9e17c211d293",
"assets/assets/img/characters/penguin_green_hat_left.png": "f88cf4b4f0b8c3ade6263cf6fa265201",
"assets/assets/img/ornaments/ornament_pinecone_a.png": "ab77752b2700657c1dd6a2ff91d394da",
"assets/assets/img/ornaments/ornament_heart_velvet.png": "4d5ffaacfecb291c6d8106dfaa18048b",
"assets/assets/img/ornaments/ornament_bow_red.png": "1762ac7fca77cf46004613ef3366f47d",
"assets/assets/img/ornaments/ornament_toy_car.png": "5da9c020851878533849927a1a576fc4",
"assets/assets/img/ornaments/ornament_pinecone_b.png": "7bc530e92d66783aa9fdffe394b5e36a",
"assets/assets/img/ornaments/ornament_gingerbread_man.png": "49e751baf90b167511d523a74cd66d2e",
"assets/assets/img/ornaments/ornament_snowman.png": "d95eca1b7b67726fccf3b3e0450e3488",
"assets/assets/img/ornaments/ornament_bird_cardinal.png": "3d11dd759bd5300fcfa14b134cb0f242",
"assets/assets/img/ornaments/ornament_bell_gold.png": "ffd1db179c863f11c42a261a937d96ca",
"assets/assets/img/ornaments/ornament_bow_red_large.png": "782d3e28bb1b7f0162a46fe500691bdb",
"assets/assets/img/ornaments/ornament_snowflake_white.png": "21c220f4148e18de18c7e726f19060a5",
"assets/assets/img/ornaments/ornament_reindeer.png": "9f18a6a237eac991110e69aea4beed58",
"assets/assets/img/ornaments/ornament_berries_holly_b.png": "a29cc11b5445894b9948abb6e7935d16",
"assets/assets/img/ornaments/ornament_berries_holly_a.png": "ed39c17666d5f9e7233ae1ec6b320d41",
"assets/assets/img/ornaments/ornament_star_topper.png": "387914c554793a347ee107cba560fe66",
"assets/assets/img/ornaments/ornament_bell_gold_large.png": "1addb5cccba2916aa39d153783c250f8",
"assets/assets/img/ornaments/ornament_angel.png": "3950e43c88f35bb04dd68078ce1b9b98",
"assets/assets/img/ornaments/ornament_candy_cane.png": "9681f4b995cc47f026b9899fc8e6b109",
"assets/assets/img/ornaments/ornament_house.png": "0d5ff7e6985cc341c1f09f82166c6ae4",
"assets/assets/img/ornaments/ornament_nutcracker.png": "c9f6c96e2c20fb9937727b33a3bee5d1",
"assets/assets/img/ornaments/ornament_candy_cane_a.png": "28540da7ec3e59eb5ae34d522fe5f4d8",
"assets/assets/img/ornaments/ornament_star_gold_small.png": "14632bdf7ebc918d052c7a3a6b88b4b5",
"assets/assets/img/fireplace_stockings/stocking_green.png": "2ee9cf9c0e90fa278121d4480948e56f",
"assets/assets/img/fireplace_stockings/stocking_red.png": "e6cca4282480dcfc96dcb0f1dd74edd0",
"assets/assets/img/fireplace_stockings/stocking_blue.png": "4b4bf07c706422a223a59052b0a3a2e7",
"assets/assets/img/fireplace_stockings/stocking_white.png": "7f5c19e12a3651ada14c6e3ad08d2b41",
"assets/assets/img/fireplace_stockings/stocking_striped.png": "401ec4e26448976b4ab6b32048f6a9ab",
"assets/assets/img/gingerbread_house_ornaments/hse_bell_wreath_center.png": "46ecf81c2b450a6f56562ee07e282e38",
"assets/assets/img/gingerbread_house_ornaments/hse_snowflake_left.png": "d75bb545eb4133feba638adfcd799865",
"assets/assets/img/gingerbread_house_ornaments/hse_snowflake_right.png": "e121054b44c357784fee734f3cde6643",
"assets/assets/img/gingerbread_house_ornaments/hse_lollipop_spiral.png": "13f4abd5a9b0c2ae6916ace032764dfb",
"assets/assets/img/baubles/ornament_bauble_green.png": "b6fe6e0f56a618188f119650aa54d5e8",
"assets/assets/img/baubles/ornament_blue_snowflake_pattern.png": "2931afdcd6de27882759aac61ae67f71",
"assets/assets/img/baubles/ornament_pink_diagonal_stripe.png": "b47a8f92f230f3bf3ceb4a7e809032df",
"assets/assets/img/baubles/ornament_bauble_yellow.png": "6daee4bd72d3178481204e0ec2c77a8a",
"assets/assets/img/baubles/ornament_bauble_red.png": "aa54da05a5deb924622ba31bf08c1a13",
"assets/assets/img/baubles/hse_bauble_red_stripe.png": "92a3add578e94dd0f520af6bf73c67b7",
"assets/assets/img/baubles/ornament_bauble_pink.png": "e94c98976e7691cdb11925d7e3543f91",
"assets/assets/img/baubles/ornament_bauble_blue.png": "49e82643e550bc6df6fdf8f50212ef75",
"assets/assets/img/baubles/hse_bauble_red_green.png": "114d7df8928d3df16b81ee475c746ff8",
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
