'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ee9ec0bb04d2cdbe0edd644ba223dc03",
"version.json": "f881f45bdcee82256a52fa211f663388",
"index.html": "9ffb06a99732c7557b9e55e2a33e3830",
"/": "9ffb06a99732c7557b9e55e2a33e3830",
"main.dart.js": "8d996f4747c91b0141c0508e05da76b5",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b4203c989239bcc68546e2b67664e86",
"assets/NOTICES": "7f17f258403108f8139f891db3d7594c",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "830a0534459678ec206fdd4a53d8394d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "0df9910ecda73cd5e438c7b40e02fdc1",
"assets/fonts/MaterialIcons-Regular.otf": "ed4f9cc63a86e74ae47d1453af7d8c16",
"assets/assets/music/MUSIC_CODE_MAP.csv": "4835bb0ff43a47d092ccd3997c86a9f4",
"assets/assets/music/MUS_AMB_PARENT.wav": "27a6cf31f5ad96da9a780651c8639555",
"assets/assets/music/MUSIC_USAGE_BY_SCENE.md": "79de4de724c9ac58aeb51a06dd053ef1",
"assets/assets/music/MUS_LOOP_CHRISTMAS_AMB.wav": "27a6cf31f5ad96da9a780651c8639555",
"assets/assets/music/MUS_LOOP_XM_GENTLE.wav": "59f2d435dae9e42eafa8159e1af7e4c6",
"assets/assets/music/MUS_SPLASH_STING_CHRISTMAS_3S.wav": "33698580df35ad5174d945e6182f6d1f",
"assets/assets/music/MUS_LOOP_CHRISTMAS_01.wav": "7ba448927c2824bb98171543b5f84008",
"assets/assets/music/MUS_LOOP_CHRISTMAS.wav": "42841bfcdf2fcf335601c23689104fb7",
"assets/assets/music/MUS_LOOP_CELEBR.wav": "ce3e46998a0dc4b4cafcc96f97f59dce",
"assets/assets/music/MUS_LOOP_CHRISTMAS_HOME.wav": "df23641ea44444e16dd7f0337bed21e7",
"assets/assets/music/MUS_CELEBR_XMASS.wav": "ce3e46998a0dc4b4cafcc96f97f59dce",
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
"assets/assets/video/xmass/Santa_Intro_Cinematic_XM.mp4": "0b5c8fe711366fe461e9ba85a601448c",
"assets/assets/video/xmass/MG_XM01_CINEMATIC.mp4": "4acec67ea75cc87e2fc8f5dd8c7491b0",
"assets/assets/vfx_presets.json": "bf136b3886ba9c58a095837a1c19a23f",
"assets/assets/sfx/sfx_gp_snap.mp3": "8730b22adda34232ab1b3ba19ec73fce",
"assets/assets/sfx/sfx_gp_pickup.mp3": "48afe43863d1cff47e0b2f7b4fa7a812",
"assets/assets/sfx/sfx_gp_drop_fail.mp3": "b75c213955814bff2faecc20bd129ed8",
"assets/assets/sfx/sfx_rw_final.mp3": "789c7886e33b1ef1063d0e37db97a2a8",
"assets/assets/sfx/sfx_magic_glow_pulse_soft.mp3": "c7b0b33fb9de6c8c96a3432fd01c86d7",
"assets/assets/sfx/sfx_ui_toggle_soft.mp3": "4a5be2108c5f69df743e81e12e12f906",
"assets/assets/sfx/sfx_rw_success.mp3": "76ef97a6965b60704837332e4af900ad",
"assets/assets/sfx/sfx_ui_nav_hide.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/sfx_home_button.mp3": "432dbab00e731003cf72d915ad1317ae",
"assets/assets/sfx/sfx_trans_out_fade_soft.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/sfx_ui_click_soft.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/sfx_ui_nav_show.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/sfx_trans_in_sparkle.mp3": "4bfc1ef2a1493ea52437e49360573752",
"assets/assets/sfx/sfx_teach_ping_soft.mp3": "76ef97a6965b60704837332e4af900ad",
"assets/assets/img/ui/navigation/hud_home.png": "68ad5a5a37e131ca16fb8ba2c9c32d09",
"assets/assets/img/ui/navigation/Home%2520Screen%2520REF.png": "4421bba2d881884c7ec1e34277675e98",
"assets/assets/img/ui/navigation/hud_setting.png": "1d8ca5db29b39c558aa2a7679e28efcb",
"assets/assets/img/ui/navigation/hud_back.png": "909016ac1905cff2f3044695901d4661",
"assets/assets/img/ui/navigation/hud_play.png": "31356ead9022b7bc810f0e1a8e9d8327",
"assets/assets/img/ui/navigation/hud_next.png": "c10405c0cab29312a9b82b0eb2616a9f",
"assets/assets/img/ui/navigation/Home%2520Screen_Background.png": "58d5334ec41801aa2a89700d88938264",
"assets/assets/img/stickers/sticker_penguin.png": "b9f6f560a8d4269890084cbecc245e46",
"assets/assets/img/stickers/sticker_reindeer.png": "d7d2ba1f72d3090ea5a4dcd574ac812a",
"assets/assets/img/stickers/sticker_sleigh.png": "8044cf07d02b11b91511d41c331f11d7",
"assets/assets/img/stickers/reward_sticker_scene_mg12.png": "b2fbfa97ccfb60e8c28ad7571e2a484d",
"assets/assets/img/stickers/sticker_bell.png": "e1f163003c08a734266cc75d20773951",
"assets/assets/img/splash/text_games.png": "9d86bab7012c4e9a264bd9676b750869",
"assets/assets/img/splash/text_fun.png": "9e16988e60440ec9e6bcb447e27826f0",
"assets/assets/img/splash/text_christmas.png": "9804349e21bd9a7b8de2838480293bd9",
"assets/assets/img/splash/splash_background.png": "0974a7082b4c32ae5a71f09b044b0440",
"assets/assets/img/toy_stickers/sticker_bear.png": "5f63c6c4033bbbf03ec17938038814ff",
"assets/assets/img/toy_stickers/sticker_snowglobe.png": "24c67248711187a290e82b22e139bc16",
"assets/assets/img/toy_stickers/sticker_train.png": "da951a4a2af5de462a786cea22de249f",
"assets/assets/img/toy_stickers/reward_sticker_scene.png": "a599106dd7fbea78e8b1986ca9329e78",
"assets/assets/img/toy_stickers/sticker_car.png": "4c11e1db5f4a90250fa39fc14ff0de96",
"assets/assets/img/gingerbread_numbers/gingerbread_num_4.png": "4ac915b6a2274f3aa9bfb136478f3fb1",
"assets/assets/img/gingerbread_numbers/gingerbread_num_5.png": "249f4bec3359a6e8334fb3187fc7ed5a",
"assets/assets/img/gingerbread_numbers/gingerbread_num_7.png": "f87f47f3f1fa13d8796c49f1198b4d5a",
"assets/assets/img/gingerbread_numbers/gingerbread_num_6.png": "9663e48f7b124bd65c6216525df2af20",
"assets/assets/img/gingerbread_numbers/gingerbread_num_2.png": "fee3a5eab6a51253607417cb58d61f7c",
"assets/assets/img/gingerbread_numbers/gingerbread_num_3.png": "d0acfe12c0c25f5c2aa376b288fbcd3e",
"assets/assets/img/gingerbread_numbers/gingerbread_num_1.png": "cdd33e46ed1f904141af742e2bbfb3fb",
"assets/assets/img/gingerbread_numbers/gingerbread_num_0.png": "8c18b4d931640f7a76279b8f05b0e4de",
"assets/assets/img/gingerbread_numbers/gingerbread_num_8.png": "45b98c83010b0986d900daa52a6d0430",
"assets/assets/img/gingerbread_numbers/gingerbread_num_9.png": "c29f1b00f68c2138556d7b72ab70efb6",
"assets/assets/img/gingerbread_numbers/gingerbread_num_10.png": "625df94f6a1b8359c0bfdbf59e11c742",
"assets/assets/img/snowflakes/snowflake_classic_lace.png": "054a26869af4336469484861f9ca7366",
"assets/assets/img/snowflakes/snowflake_soft_lacework.png": "d289b1370e662da88a7f8c96f880ec3e",
"assets/assets/img/snowflakes/snowflake_bold_geometric.png": "a2a5c42a9f6e296da91e64f6da57c8e8",
"assets/assets/img/stockings/stocking_bear_green.png": "4df719c348ecea2de26e28b30a4a029e",
"assets/assets/img/stockings/stocking_fox_lilac.png": "365044c41c0c1d2cf031af064941c83e",
"assets/assets/img/stockings/stocking_owl_orange.png": "9572f86bf831739c1baa28ee14f652f4",
"assets/assets/img/stockings/stocking_reindeer_red.png": "5a0f518e67dbf1135b23e4a81243e535",
"assets/assets/img/decorations/wreath_lights_off_mg03.png": "2d269b139e9d368b6c3d9f47f4114f5f",
"assets/assets/img/decorations/garland_on_northern.png": "b85abc0c62d80ffd52e38265f8d292fd",
"assets/assets/img/decorations/garland_off.png": "de4f8592b3621cc935282981ad617fd9",
"assets/assets/img/decorations/garland_on.png": "9d7b61d48f9c15c3ab19fded55fa9046",
"assets/assets/img/decorations/garland_mantle_off.png": "9d80dc17fb811c2b72e1bc5bfe0fb7d8",
"assets/assets/img/decorations/garland_mantle_on.png": "e096e88d82993cc1d267e61aaea70f5e",
"assets/assets/img/decorations/garland_off_northern.png": "478873c93f990409d918f37b2b638e65",
"assets/assets/img/decorations/wreath_lights_on_mg03.png": "ac5f928475567aa67cc6414717cd3680",
"assets/assets/img/screens/Santa_Intro_Static.png": "09e4d11cb2f9fa266844901099695f24",
"assets/assets/img/screens/Santa_Intro_Static_XM.png": "09e4d11cb2f9fa266844901099695f24",
"assets/assets/img/screens/Home%2520Screen_Background.png": "58d5334ec41801aa2a89700d88938264",
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
"assets/assets/img/vfx/rays/rays_soft_hero_rainbow.png": "81b82513cc583c826f1ca864b1a8491b",
"assets/assets/img/vfx/rays/rays_soft_hero_gold_2.png": "b89402b49768101fee79248eca975a07",
"assets/assets/img/vfx/rays/glimmer_hero_soft.png": "548af840f96736f50c6add065ed9bdd1",
"assets/assets/img/vfx/rays/rays_soft_hero_gold.png": "0482a5204cf71d2fbcbc5208d042aa92",
"assets/assets/img/backgrounds/scene_background_night_sky.png": "0c00e858d8de3c1663b5b1bec280eb78",
"assets/assets/img/backgrounds/mg02_aurora_northern_lights.png": "0d4e6f408f0422402a82ce989cc8616d",
"assets/assets/img/backgrounds/mg05_fireplace_room.png": "182da80ef20e734c80e99c293e07f454",
"assets/assets/img/backgrounds/mg01_forest_clearing.png": "59851730367bead49ffce19f47e514af",
"assets/assets/img/backgrounds/mg12_sticker_album_background.png": "7001ac5ac5c7e35073e67776ffc5fa36",
"assets/assets/img/backgrounds/mg11_sticker_album_background.png": "e0ebafca8c62027426b94d66ac5d77a7",
"assets/assets/img/backgrounds/mg04_gingerbread_house.png": "2f64d53fd8c6709f8b0c64163ac99fdc",
"assets/assets/img/backgrounds/mg03_holiday_entrance.png": "6a520bf99c6722971a824749f85b4002",
"assets/assets/img/backgrounds/scene_background_vibrant_blue.png": "54300323bc56f3c16b675a98b4132533",
"assets/assets/img/backgrounds/room_window_composite.png": "db2d896017619d9748369c327be124ee",
"assets/assets/img/backgrounds/scene_background_evening.png": "5fd8cc245087943282dfedee5c40b86e",
"assets/assets/img/backgrounds/scene_background_winter_flat.png": "204c4a57c17b892b3b788e5cd2d2bad4",
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
"assets/assets/img/ornaments/ornament_pinecone_a.png": "df7240e9e76357023e91985781e05d7a",
"assets/assets/img/ornaments/ornament_heart_velvet.png": "52eaea6d5878f14e15fadcaaa1b70ced",
"assets/assets/img/ornaments/ornament_bow_red.png": "a8b5709f8ea4dbb76cb9f6162ba7e966",
"assets/assets/img/ornaments/ornament_toy_car.png": "ff09a2fb206eec91d60990ddae86a7e8",
"assets/assets/img/ornaments/ornament_pinecone_b.png": "da52b5b0b069bcddf58978ca3652abca",
"assets/assets/img/ornaments/ornament_gingerbread_man.png": "5bbd9fce39136b6c0c434e166cdc645a",
"assets/assets/img/ornaments/ornament_bauble_green.png": "260ea27c7f828c092581312296a6a230",
"assets/assets/img/ornaments/ornament_snowman.png": "87540c451eda74d5b6f1029d123ca2cb",
"assets/assets/img/ornaments/ornament_bird_cardinal.png": "e81f21a2767792a6584472ea4d79048d",
"assets/assets/img/ornaments/stocking_green.png": "642d62c1f657999ccaa366492297df34",
"assets/assets/img/ornaments/stocking_red.png": "4c5555e04b685cec944ce6b1d2d26774",
"assets/assets/img/ornaments/ornament_blue_snowflake_pattern.png": "3e7eaedd7480226c4dd3af8f9b7d9ca6",
"assets/assets/img/ornaments/ornament_bell_gold.png": "cf4056f27c3f176b85ee73b8465e106e",
"assets/assets/img/ornaments/hse_candy_dragee_lilac.png": "c1ae8ccc90411b0394ca5f0c2cbd1382",
"assets/assets/img/ornaments/ornament_bow_red_large.png": "cb89cc187c6f61af8c9608789d76f272",
"assets/assets/img/ornaments/stocking_blue.png": "46cb58607d46d87b3d98429c59e99f14",
"assets/assets/img/ornaments/ornament_snowflake_white.png": "f035d80849ed95f1d08bdb3bf3ccba99",
"assets/assets/img/ornaments/ornament_reindeer.png": "62ad219ccf25c9b52d552ea44203a8d0",
"assets/assets/img/ornaments/ornament_pink_diagonal_stripe.png": "4323dedc574bc1bab91c11f0e79736f1",
"assets/assets/img/ornaments/ornament_bauble_yellow.png": "d5c191eb9f933552f4f5bfd008017916",
"assets/assets/img/ornaments/ornament_bauble_red.png": "1d2c231daccfc7d4ca5794929beb97cc",
"assets/assets/img/ornaments/hse_bauble_red_stripe.png": "4789bc413f074efaca91c899ae15b537",
"assets/assets/img/ornaments/ornament_berries_holly_b.png": "db439dbaf8a601934a9b89638f9800a0",
"assets/assets/img/ornaments/hse_candy_dragee_blue.png": "cb2b634f138197819fd31372d3689d48",
"assets/assets/img/ornaments/hse_candy_dragee_pink.png": "337867de4012a4acaaa7f2d4ef19de8d",
"assets/assets/img/ornaments/stocking_white.png": "78cacd943a344588c641bd15332dd6f9",
"assets/assets/img/ornaments/ornament_berries_holly_a.png": "31c4347ee297e463f0abcc666fb48114",
"assets/assets/img/ornaments/ornament_star_topper.png": "08870fc5692006de869d0ef70446d68b",
"assets/assets/img/ornaments/ornament_bell_gold_large.png": "c1f6c5387edd8d1d64135e07695ba371",
"assets/assets/img/ornaments/ornament_angel.png": "95cc78f4736a66c6bbc1a27f321c9a1d",
"assets/assets/img/ornaments/hse_bell_wreath_center.png": "ced7210670c8f1c9ebe4082bf33e8428",
"assets/assets/img/ornaments/hse_snowflake_left.png": "d458a176cc670ef5b65dc5a2c5bc4430",
"assets/assets/img/ornaments/ornament_candy_cane.png": "878b056e14ab2f2ede12bf259514fbb8",
"assets/assets/img/ornaments/ornament_bauble_pink.png": "bb1d9581227d90753d393075e1f1dad7",
"assets/assets/img/ornaments/ornament_house.png": "58eab260693af141bd983b5a75209671",
"assets/assets/img/ornaments/ornament_bauble_blue.png": "0e7bfa614262432e33e6dedea257e393",
"assets/assets/img/ornaments/hse_bauble_red_green.png": "7dc40918f4629dc50387c2bf4dd42779",
"assets/assets/img/ornaments/stocking_striped.png": "3ecab199e61ad28ca61728f669f054a0",
"assets/assets/img/ornaments/ornament_candy_cane_b.png": "11e290c97fffe84eda5d8f0affe6dae0",
"assets/assets/img/ornaments/ornament_candy_cane_a.png": "b862874d0df187471c819ca2f7b42707",
"assets/assets/img/ornaments/ornament_star_gold_small.png": "dfd41cceef5811ee4e4ac69e3ff90244",
"assets/assets/img/ornaments/hse_snowflake_right.png": "87e7f6e3b63465820150e826aaf1eb0c",
"assets/assets/img/ornaments/hse_candy_dragee_yellow.png": "c9649e08dd0506198a0c1508347d8c64",
"assets/assets/img/ornaments/hse_lollipop_spiral.png": "fa9bdfa5c2c1f1562dc0e390ab489e6e",
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
