'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3ba5140bcc34f3db589757ae121f2871",
"version.json": "ba131469c21c9e373408038c2d15581d",
"index.html": "9ffb06a99732c7557b9e55e2a33e3830",
"/": "9ffb06a99732c7557b9e55e2a33e3830",
"main.dart.js": "7f072c3d89bac120a26be1495c7a7a43",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "1fb1b94e91c1ecf4db522bc4e8ce01b4",
"icons/Icon-192.png": "ca64f73fdc3a3e18d6a9d5ca570677e9",
"icons/Icon-maskable-192.png": "ca64f73fdc3a3e18d6a9d5ca570677e9",
"icons/Icon-maskable-512.png": "29c536a8042465f0ac5655ebae9ae8d2",
"icons/Icon-512.png": "29c536a8042465f0ac5655ebae9ae8d2",
"manifest.json": "f7a2c08a2c850411eb1e2bbbaeca0310",
"assets/NOTICES": "2610337ac4e12f1cb2074a1f9bc612f3",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "9412f1df1bb0eb448c972251e04c0ed6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "494b81e1057c0a0d5ae953325fa60300",
"assets/fonts/MaterialIcons-Regular.otf": "ed4f9cc63a86e74ae47d1453af7d8c16",
"assets/assets/music/MUS_LOOP_CHRISTMAS.mp3": "14b27f853715c962833dae61572e820f",
"assets/assets/music/MUS_LOOP_CHRISTMAS_HOME.mp3": "ee5d827c462a499038014c379fdc1db9",
"assets/assets/music/MUS_LOOP_CELEBR.mp3": "a023dea1e4fe1fe23eb59b20925251b6",
"assets/assets/music/MUS_CELEBR_XMASS.mp3": "949f2a9b12306828d83c6514afb75b5e",
"assets/assets/music/MUS_AMB_PARENT.mp3": "e8d2abc400f89b0843ce92a723ff1c95",
"assets/assets/music/MUS_LOOP_CHRISTMAS_AMB.mp3": "e8d2abc400f89b0843ce92a723ff1c95",
"assets/assets/music/MUS_LOOP_CHRISTMAS_01.mp3": "0c3af9d1f7339381811c3ef6d8da26d0",
"assets/assets/music/MUS_SPLASH_STING_CHRISTMAS_3S.mp3": "148e8da0356649b78ba689e783743420",
"assets/assets/music/MUS_LOOP_XM_GENTLE.mp3": "82eed431d7496b003c1e9953eec2625b",
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
"assets/assets/img/cinematics/INTRO_XM_CINEMATIC_video.mp4": "abfbefb9b88304cfab8643e191924ef2",
"assets/assets/img/cinematics/MG_XM10_CINEMATIC_video.mp4": "47b38427323463d655079edc9de9a086",
"assets/assets/img/cinematics/MG_XM09_CINEMATIC_video.mp4": "0e07174d542226b60f7ccf2c95dc9059",
"assets/assets/img/cinematics/MG_XM11_CINEMATIC_video.mp4": "4ef8ce968ff54618895f618c8c89e663",
"assets/assets/img/cinematics/MG_XM08_CINEMATIC_video.mp4": "d835b17eb6140e7f16a96fb9e8b15b05",
"assets/assets/img/cinematics/MG_XM12_CINEMATIC_video.mp4": "c838bc89a091f30018ef187bc98d7491",
"assets/assets/img/cinematics/MG_XM07_CINEMATIC_video.mp4": "7e407aa6a76ec9cbbeb745ba3993c76d",
"assets/assets/img/cinematics/MG_XM06_CINEMATIC_video.mp4": "92e4f49dfdf7b536d65e941580c99cac",
"assets/assets/img/cinematics/MG_XM05_CINEMATIC_video.mp4": "5a9d19e9a586ef393baae5960cd504b5",
"assets/assets/img/cinematics/MG_XM04_CINEMATIC_video.mp4": "502c0bb60163f14ef2f7a54a0b342cb6",
"assets/assets/img/cinematics/MG_XM02_CINEMATIC_video.mp4": "bbf90bc3b491269e9b47e10363b60df4",
"assets/assets/img/cinematics/MG_XM03_CINEMATIC_video.mp4": "ee27901f58fd518ba6835a3df562fea9",
"assets/assets/img/cinematics/MG_XM01_CINEMATIC_video.mp4": "ff1648b71ed41e3c7ceebed76aae5ade",
"assets/assets/img/baby_bear/baby_bear2.png": "2104185892c2b129c3f7fb5b9aedccf7",
"assets/assets/img/baby_bear/baby_bear3.png": "fb495512fabc843744564fd3593f396b",
"assets/assets/img/baby_bear/baby_bear1.png": "6a0e0aedcf485d34a66b9e0a6b0563ea",
"assets/assets/img/baby_bear/baby_bear4.png": "1949519e32e9a03cb76fab191661b920",
"assets/assets/img/ui/navigation/hud_home.png": "df6ecf85d24318c4d7bbad573c8bf28b",
"assets/assets/img/ui/navigation/hud_setting.png": "1bcc0b0afbe28db069488fadc20fb6cb",
"assets/assets/img/ui/navigation/hud_back.png": "729da6eda933bd29637ebf1b896a2c30",
"assets/assets/img/ui/navigation/hud_play.png": "8eeb6c8b9c1410174d60106467ba3c33",
"assets/assets/img/ui/navigation/hud_next.png": "9ffad441ed3080612010b3b573544e63",
"assets/assets/img/game_title/subtitle.png": "ab775c38c845fa6985ec856a7635c1e7",
"assets/assets/img/game_title/christmas.png": "bbcb89f2eb5eea2c7f53f7ceea76002f",
"assets/assets/img/stickers/sticker_penguin.png": "2879344d0fcbfb257b76f98a4b51fff8",
"assets/assets/img/stickers/sticker_reindeer.png": "977f62bf0f30c5f3a063020b304e6703",
"assets/assets/img/stickers/sticker_sleigh.png": "16ca151b5254c493b006a42f48c022d0",
"assets/assets/img/stickers/reward_sticker_scene_mg12.png": "280569c9d2bf4513dc504615986ca85f",
"assets/assets/img/stickers/sticker_bell.png": "4419a61b15812995aac8f32ded7be566",
"assets/assets/img/toy_stickers/sticker_bear.png": "0b61a2787e7d90ac601b10e712871121",
"assets/assets/img/toy_stickers/sticker_snowglobe.png": "5bf1b814b8b9cf1c925caba46ed62610",
"assets/assets/img/toy_stickers/sticker_train.png": "e383ac68bcf8eec1fde01b0bedbb0e5c",
"assets/assets/img/toy_stickers/reward_sticker_scene.png": "3c8f2304a79c005bba0a1668c3da82e8",
"assets/assets/img/toy_stickers/sticker_car.png": "0f3e0bf2fff6003dce15aceb387e7c54",
"assets/assets/img/gingerbread_numbers/gingerbread_num_4.png": "c26469db1df0e6ebcb294fd082f07a0e",
"assets/assets/img/gingerbread_numbers/gingerbread_num_5.png": "6f684ac117054982756822f3e6103f33",
"assets/assets/img/gingerbread_numbers/gingerbread_num_7.png": "5e63d1af47f73bdc70afde9e7ea4774e",
"assets/assets/img/gingerbread_numbers/gingerbread_num_6.png": "043cef0f08a734f14384884a84a04b22",
"assets/assets/img/gingerbread_numbers/gingerbread_num_2.png": "642d862d9c8f102f9650378acbc2f6ba",
"assets/assets/img/gingerbread_numbers/gingerbread_num_3.png": "ce192a6856f0e04465df3155f2cc5dd1",
"assets/assets/img/gingerbread_numbers/gingerbread_num_1.png": "fc66b038de1528ed293510c757ad0911",
"assets/assets/img/gingerbread_numbers/gingerbread_num_0.png": "bc1a863ec3775362b1a957d3be0cdf83",
"assets/assets/img/gingerbread_numbers/gingerbread_num_8.png": "0af7a836afc173aeac9227b558501707",
"assets/assets/img/gingerbread_numbers/gingerbread_num_9.png": "f866be680de8f51d7362a2f1fbe028a1",
"assets/assets/img/gingerbread_numbers/gingerbread_num_10.png": "b09ceba9f3e4544ebff3fb9bbb3cf052",
"assets/assets/img/window_items/snowflake.png": "1b63e6b2c927dc67b7d00c2cb98bac20",
"assets/assets/img/window_items/candy.png": "cead5ba209e20437781c9fe6464a802f",
"assets/assets/img/window_items/bunny.png": "e69b745e8bde3fd624960baedbb2f26d",
"assets/assets/img/window_items/tree.png": "e7bf7b3ab076a89658adb18349ee9db2",
"assets/assets/img/window_items/snowman.png": "c998645aaca8c2d2d8b502f428c8d255",
"assets/assets/img/window_items/bauble.png": "3e3ce8cae5a7869b75feadb2b3b42c3a",
"assets/assets/img/stockings/stocking_bear_green.png": "72691ed801bc254c82c93930266c7ae3",
"assets/assets/img/stockings/stocking_fox_lilac.png": "d34a6bdec82ea197a5915c7e201a94e3",
"assets/assets/img/stockings/stocking_owl_orange.png": "ec4d1071b42f33a20dbd1ebfd4767723",
"assets/assets/img/stockings/stocking_reindeer_red.png": "9b4e5c23739678b0442379c10b7d3b11",
"assets/assets/img/decorations/garland_on_northern.png": "c0e1c607bf41ce2e33738abfe06c700d",
"assets/assets/img/decorations/garland_on.png": "ba3a6f7ba347564d69ed7b07c061c8b0",
"assets/assets/img/decorations/garland_mantle_on.png": "5715b1c4148a7f9811f29236cfa4e705",
"assets/assets/img/decorations/wreath_garland.png": "dcde1275a2ba88431c3439cdea32a898",
"assets/assets/img/vfx/snowflakes/snowflakepart_03.png": "88a121b82bab355ef1631901a317110c",
"assets/assets/img/vfx/snowflakes/snowflakepart_02.png": "225d828146184d68b935ad95fc8bf7ec",
"assets/assets/img/vfx/snowflakes/snowflakepart_01.png": "cf51094072f5bfe4517bbdd565b7d9dc",
"assets/assets/img/vfx/snowflakes/README.md": "ad41ca50fe4fea545a76b0faba58766c",
"assets/assets/img/vfx/confetti/README.md": "ad41ca50fe4fea545a76b0faba58766c",
"assets/assets/img/vfx/confetti/Confetti_01.png": "2b65ececa7d231502fe525391fb1efcb",
"assets/assets/img/vfx/confetti/Confetti_02.png": "598044cbfc029c365cf69fcbf6933cdb",
"assets/assets/img/vfx/confetti/Confetti_03.png": "93c5c8e02fcf6856213a75e625baa76a",
"assets/assets/img/vfx/confetti/Confetti_06.png": "ac755082ca08d12d026becc290f60b5c",
"assets/assets/img/vfx/confetti/Confetti_04.png": "d534ec337900efc876020843e488e04b",
"assets/assets/img/vfx/confetti/Confetti_05.png": "dc91f5be8594b39b49a53dd4f37de50a",
"assets/assets/img/vfx/3_sparks.png": "ce8f938bba882f8703df71e2b6d0d8c2",
"assets/assets/img/vfx/rays/rays_soft_hero_rainbow.png": "76c839075eadcb7f4e0def86a9d71bac",
"assets/assets/img/vfx/rays/rays_soft_hero_gold_2.png": "f3391072eaca8ffd5e4c0f702d92aec8",
"assets/assets/img/vfx/rays/glimmer_hero_soft.png": "f5d427938d7ff8192452a4d66fc80b36",
"assets/assets/img/vfx/rays/rays_soft_hero_gold.png": "063724a69b7018bda31456c8ea072dbe",
"assets/assets/img/backgrounds/scene_background_night_sky.png": "e43c9b267487aef5e7200cac5c3ae7f8",
"assets/assets/img/backgrounds/mg02_aurora_northern_lights.png": "053460343795a8b563ad2dbfa6ca6a51",
"assets/assets/img/backgrounds/mg05_fireplace_room.png": "431bfa3d2d2460b72ba552471843a3d6",
"assets/assets/img/backgrounds/mg01_forest_clearing.png": "e7d1003cd7aa4712f3e431d328f3d384",
"assets/assets/img/backgrounds/mg12_sticker_album_background.png": "debef93dc1dca95a969c58bbd70b14f2",
"assets/assets/img/backgrounds/mg11_sticker_album_background.png": "4b1915aa149d706f5d6908487a9b1fda",
"assets/assets/img/backgrounds/splash_background.png": "08cb10658fa2e24cf2c88fb074b5b0f7",
"assets/assets/img/backgrounds/mg04_gingerbread_house.png": "6dd1d7781079dac2155faddc47d2d775",
"assets/assets/img/backgrounds/mg03_holiday_entrance.png": "48084c9325905ce70252f23692ace835",
"assets/assets/img/backgrounds/home_screen_background.png": "5e80511a20140399fdc63c5a16bf983c",
"assets/assets/img/backgrounds/scene_background_vibrant_blue.png": "718567ab4fe078a65b5d3b7eb3748bc6",
"assets/assets/img/backgrounds/room_window_composite.png": "4b19bf126800ddcbfb4dc8d94dc22111",
"assets/assets/img/backgrounds/scene_background_evening.png": "a7e8b6f732650f5fdb085907f5d77335",
"assets/assets/img/backgrounds/scene_background_winter_flat.png": "91eb88acbc0f1b609931e956483acc43",
"assets/assets/img/santa_reindeer/window.png": "ff45872a41b9b0f6fbbc3d0b285addd4",
"assets/assets/img/santa_reindeer/santa_reindeer1.png": "f2ba3d2f552a3871d3dbaafbd3fbfff7",
"assets/assets/img/santa_reindeer/santa_reindeer3.png": "3c5a83b9db068f302ad779ce06b70853",
"assets/assets/img/santa_reindeer/santa_reindeer2.png": "970e4897955bddb5910413a2b9998266",
"assets/assets/img/gestures/drag_drop.webp": "9e5ef1aad27e26a0a5db64950a3316ac",
"assets/assets/img/gestures/drag.webp": "7d4c123f05778ca2b295beb2ab3e70f5",
"assets/assets/img/gestures/drag_drop.gif": "9cf32605466d76b482d74d1991fb905b",
"assets/assets/img/gestures/tap.webp": "e8cc8f0dffa3b3bd0ffc943e3d6d2f6c",
"assets/assets/img/gestures/tap.gif": "61569b431a7e0ef8cd8bea3ab2e9a18a",
"assets/assets/img/baby_reindeer/baby_reindeer4.png": "4b1e9770a8519abd70917b9d5bac349d",
"assets/assets/img/baby_reindeer/baby_reindeer3.png": "5b0853422049f6f6d3eb1722474e71ad",
"assets/assets/img/baby_reindeer/baby_reindeer2.png": "a7dddcd41dcb0b8d59c8a82a24d5411d",
"assets/assets/img/baby_reindeer/baby_reindeer1.png": "7b3dd5aa122d7fac592929e7faeb4d53",
"assets/assets/img/happy_santa/happy_santa4.png": "912c438458dca5be52cd584250dd3ad8",
"assets/assets/img/happy_santa/happy_santa3.png": "c129f3c0cb374432500f3ac14b4731de",
"assets/assets/img/happy_santa/happy_santa2.png": "e77e6c5acced1f5fc719aa5bbe7e70ad",
"assets/assets/img/happy_santa/happy_santa1.png": "7d9bd8771937b6f0207604200971fd27",
"assets/assets/img/characters/gingerbread_man_celebrate.webp": "1b2b7c9dc0c90a1ecefc7b886e272dff",
"assets/assets/img/characters/gingerbread_man_idle.webp": "3af39c6c4ad6d4e25f6bd0a490591de5",
"assets/assets/img/characters/baby_reindeer_celebrate.webp": "a6f7ba8531bbe9013d42379de5fd692f",
"assets/assets/img/characters/baby_reindeer.png": "c68117d2e555c64f65bc0e1fac16fa94",
"assets/assets/img/characters/snowman_orange_pink_hat_celebrate.webp": "4bdb2ada3a48692f4afffff255898d82",
"assets/assets/img/characters/polar_bear_cub.png": "72e6d9fe48422eb21b9d3404dd961b1a",
"assets/assets/img/characters/polar_bear_cub_hooray.webp": "a110949a09f1c86ae14217f2ef17210a",
"assets/assets/img/characters/snowman_orange_pink_hat_idle.webp": "155be5744b341d510f9f1a13a670e168",
"assets/assets/img/characters/polar_bear_cub_idle.webp": "42334a5360efa95eb2d45d8da53dcdf9",
"assets/assets/img/characters/gingerbread_man.png": "96fd34498e1b4015e10ec51dd1aa6316",
"assets/assets/img/characters/duo_penguins_idle.webp": "3c0cdd7a3aacdcf248046a2cc683441d",
"assets/assets/img/characters/duo_penguins_celebrate.webp": "d85c0eb380ee87515c66498a5171e3bd",
"assets/assets/img/characters/duo_penguins.png": "c08e6541dc761b7c7d26c80f3d53510d",
"assets/assets/img/characters/snowman_orange_pink_hat.png": "632761714d7cc2953bebe5ce8d1e18b2",
"assets/assets/img/characters/baby_reindeer_idle.webp": "8fe6bb575bd1b566f81dc1ea016a39f7",
"assets/assets/img/ornaments/ornament_pinecone_a.png": "83ef3ab4cfae3ea085f6707c47fd7937",
"assets/assets/img/ornaments/ornament_heart_velvet.png": "869c6acf5d0c022c701a1ef834b23e5c",
"assets/assets/img/ornaments/ornament_bow_red.png": "58eada798b8b4f288b0d882f8a75c90a",
"assets/assets/img/ornaments/ornament_toy_car.png": "f44ceb042e264ec0b65fddb0b1cadf81",
"assets/assets/img/ornaments/ornament_pinecone_b.png": "fbc08803e11116a2af835a7783251f49",
"assets/assets/img/ornaments/ornament_gingerbread_man.png": "51e2b358118bc6bfb5057db260e3c7b8",
"assets/assets/img/ornaments/ornament_snowman.png": "2c34d83ec46cd9f54d8e1f9500f0b9c7",
"assets/assets/img/ornaments/ornament_bird_cardinal.png": "56bad7903b15940909a9b493f50f2d56",
"assets/assets/img/ornaments/ornament_bell_gold.png": "7f8812011ba00255755555e36e007c60",
"assets/assets/img/ornaments/ornament_bow_red_large.png": "9b6bc1fe4de515843d6031f2609e16f4",
"assets/assets/img/ornaments/ornament_snowflake_white.png": "bdaa8628fcbbd3f3749cc871d1f75de9",
"assets/assets/img/ornaments/ornament_reindeer.png": "6590c3b64c161a9b66401cc9841162c9",
"assets/assets/img/ornaments/ornament_berries_holly_b.png": "a96cbb3810900d906ac6097a79fa8bc2",
"assets/assets/img/ornaments/ornament_berries_holly_a.png": "a9132294125a4d7f5c49b47ebbfc1352",
"assets/assets/img/ornaments/ornament_star_topper.png": "c0d335d14efcd7745e24522ab2667fa6",
"assets/assets/img/ornaments/ornament_bell_gold_large.png": "b07c21914a1254e49fe2d76faa333ad8",
"assets/assets/img/ornaments/ornament_angel.png": "1b674d906dd7dbc0a91a78ddbaca83db",
"assets/assets/img/ornaments/ornament_candy_cane.png": "8660e53b52a56fb8624c313d4fc5cf35",
"assets/assets/img/ornaments/ornament_house.png": "686914eb4cbe5c75f88fa38e66764063",
"assets/assets/img/ornaments/ornament_nutcracker.png": "64f8f57ee825ff709a229fa2bc95502a",
"assets/assets/img/ornaments/ornament_candy_cane_a.png": "7ff7249004dae61fb5025d979aade128",
"assets/assets/img/ornaments/ornament_star_gold_small.png": "50242029e5e02ee4a9c86234292cdaeb",
"assets/assets/img/fireplace_stockings/stocking_green.png": "84e3526ea832d59eccac76c1a0f2aabf",
"assets/assets/img/fireplace_stockings/stocking_red.png": "24b077dd6b84370c36fcfd08973b3567",
"assets/assets/img/fireplace_stockings/stocking_blue.png": "e4eaa6bcd6c5ac98c5ca1b3d8a96617e",
"assets/assets/img/fireplace_stockings/stocking_white.png": "068fd541245fe5f61d8a84c0555913a3",
"assets/assets/img/fireplace_stockings/stocking_striped.png": "a7dbd2732c3c5411d7b3ef51556d5193",
"assets/assets/img/gingerbread_house_ornaments/hse_bell_wreath_center.png": "004b57ccac0394e7607a2a59b5c0dfa9",
"assets/assets/img/gingerbread_house_ornaments/hse_snowflake_left.png": "71f27e95a43bed7af5d172557d4ef9d4",
"assets/assets/img/gingerbread_house_ornaments/gingerbread_heart.png": "1e7df16d65d2dbd26eafd6cc5e76f767",
"assets/assets/img/gingerbread_house_ornaments/gingerbread_decoration.png": "ee3a533e7bd1412865a82c61e4f3fb45",
"assets/assets/img/gingerbread_house_ornaments/hse_snowflake_right.png": "a6e3dc657e4751a80ef1af2c25edaf54",
"assets/assets/img/gingerbread_house_ornaments/hse_lollipop_spiral.png": "21ba3b7ec93bbbffe775392e9559b04f",
"assets/assets/img/baubles/ornament_bauble_green.png": "b332ff1f09613caff8b2a04c6aabd315",
"assets/assets/img/baubles/ornament_blue_snowflake_pattern.png": "4441803b392946f3c322da1b622a45f8",
"assets/assets/img/baubles/ornament_pink_diagonal_stripe.png": "d0039d43a4cf13bd4f850d498d8901bf",
"assets/assets/img/baubles/ornament_bauble_yellow.png": "caf35dd867878cef78494abbd70e2a39",
"assets/assets/img/baubles/ornament_bauble_red.png": "ee54124bbf43a8c5b6c971c8f7a598fd",
"assets/assets/img/baubles/hse_bauble_red_stripe.png": "058aa8d43b94e097c74d18b134411393",
"assets/assets/img/baubles/ornament_bauble_pink.png": "e74e9d690f358968ada353b4563cb2b3",
"assets/assets/img/baubles/ornament_bauble_blue.png": "effd841caea450ff4c8584adb73aac34",
"assets/assets/img/baubles/hse_bauble_red_green.png": "f1f727ace5acbe67323d5803a25018e3",
"assets/assets/img/dragees/hse_candy_dragee_lilac.png": "c61d71144603638e9054d72a79389518",
"assets/assets/img/dragees/hse_candy_dragee_blue.png": "5d0d701cfc7e2d516c10d4b8a5439629",
"assets/assets/img/dragees/hse_candy_dragee_pink.png": "258fda33ba38288666c04edf593a4e78",
"assets/assets/img/dragees/hse_candy_dragee_yellow.png": "7de5ce98fcf3ba6ea77ab6432222b615",
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
