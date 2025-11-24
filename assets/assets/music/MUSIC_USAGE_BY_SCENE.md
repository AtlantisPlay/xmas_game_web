# Использование музыки по сценам - Christmas MG

## Геймплейные сцены (Minigames)

| Сцена | Название игры | Основная музыка (Gameplay) | Celebration музыка | Примечание |
|-------|---------------|---------------------------|-------------------|------------|
| MG_XM01 | Decorate Tree — Little White Bear | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM02 | Decorate Tree — Northern Lights Penguins | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM03 | Decorate Wreath on the Door | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM04 | Decorate Gingerbread House | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM05 | Decorate Fireplace Mantle | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM06 | Gingerbread Numbers 0-1-2-3 — Match Pair | `MUS_LOOP_CHRISTMAS_AMB` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM07 | Gingerbread Numbers 4-5-6-7 — Match Pair | `MUS_LOOP_CHRISTMAS_AMB` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM08 | Gingerbread Numbers 8-9-10 — Match Pair | `MUS_LOOP_CHRISTMAS_AMB` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM09 | Christmas Stockings — Match Pair | `MUS_LOOP_CHRISTMAS_AMB` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM10 | Snowflakes — Match Pair | `MUS_LOOP_XM_GENTLE` | `MUS_LOOP_CELEBR` | ⭐ Специальная нежная музыка! |
| MG_XM11 | Christmas Toy Stickers — Match Pair | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` | Переключается при победе |
| MG_XM12 | Christmas Stickers — Match Pair | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` | Переключается при победе |

## Flow сцены (Экраны интерфейса)

| Сцена | Название | Музыка | Примечание |
|-------|----------|--------|------------|
| Flow_Splash_XM | Splash Screen (Заставка) | `MUS_SPLASH_STING_CHRISTMAS_3S` | 3-секундный стинг; PLACEHOLDER |
| Flow_Intro_XM | Global Intro | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Embedded Santa VO + Christmas music; fallback только если видео без audio |
| Flow_HomeScreen_XM | Home Screen (Главный экран) | `MUS_LOOP_CHRISTMAS_HOME` | Уютная домашняя тема; ~40s loop |
| Flow_Settings_XM | Settings (Настройки) | `MUS_AMB_PARENT` | Ambient piano/harp; parent zone; ~60s loop |

## CINEMATIC сцены (Награды + Outro)

| Сцена | Музыка | Примечание |
|-------|--------|------------|
| MG_XM01_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM02_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM03_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM04_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM05_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM06_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM07_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM08_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM09_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM10_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM11_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| MG_XM12_CINEMATIC | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |
| OUTRO_XM | Embedded в видео + `MUS_LOOP_CHRISTMAS` (fallback) | Fallback если видео без embedded audio |

---

## Итоговая статистика:

### Основная музыка геймплея:
- **`MUS_LOOP_CHRISTMAS`** - 7 игр (MG_XM01-05, MG_XM11-12: PLACE_ON_TARGET механика + 2 последние Match Pair)
- **`MUS_LOOP_CHRISTMAS_AMB`** - 4 игры (MG_XM06-09: Match Pair с цифрами и носками)
- **`MUS_LOOP_XM_GENTLE`** - 1 игра (только MG_XM10 Snowflakes — специальная нежная музыка)

### Celebration музыка при победе:
- **`MUS_LOOP_CELEBR`** - все 12 игр переключаются при победе (crossfade или boost)

### Специальные сцены:
- **`MUS_LOOP_CHRISTMAS_HOME`** - Home Screen (уютная домашняя тема; ~40s loop)
- **`MUS_AMB_PARENT`** - Settings (ambient piano/harp для parent zone; ~60s loop)
- **`MUS_SPLASH_STING_CHRISTMAS_3S`** - Splash (3-секундный Christmas bells/chimes стинг; PLACEHOLDER)
- **Embedded audio** - Intro Cinematic + все 13 CINEMATIC сцен (видео содержит embedded audio; `MUS_LOOP_CHRISTMAS` только как fallback)

### Музыкальная структура по механике:
| Механика | Количество | Основная музыка | Celebration |
|----------|-----------|----------------|-------------|
| PLACE_ON_TARGET (Drag & Drop) | 5 игр (MG_XM01-05) | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` |
| MATCH_PAIR (Numbers) | 3 игры (MG_XM06-08) | `MUS_LOOP_CHRISTMAS_AMB` | `MUS_LOOP_CELEBR` |
| MATCH_PAIR (Stockings) | 1 игра (MG_XM09) | `MUS_LOOP_CHRISTMAS_AMB` | `MUS_LOOP_CELEBR` |
| MATCH_PAIR (Snowflakes) | 1 игра (MG_XM10) | `MUS_LOOP_XM_GENTLE` ⭐ | `MUS_LOOP_CELEBR` |
| MATCH_PAIR (Stickers) | 2 игры (MG_XM11-12) | `MUS_LOOP_CHRISTMAS` | `MUS_LOOP_CELEBR` |

### Всего используется: **7 музыкальных треков**
1. `MUS_LOOP_CHRISTMAS` — основной рождественский трек (7 игр + cinematic fallback)
2. `MUS_LOOP_CHRISTMAS_AMB` — ambient версия для спокойных Match Pair игр (4 игры)
3. `MUS_LOOP_XM_GENTLE` — специальная нежная музыка для Snowflakes (1 игра)
4. `MUS_LOOP_CELEBR` — celebration при победе (все 12 игр)
5. `MUS_LOOP_CHRISTMAS_HOME` — Home Screen (уютная домашняя тема)
6. `MUS_AMB_PARENT` — Settings (ambient для parent zone)
7. `MUS_SPLASH_STING_CHRISTMAS_3S` — Splash (3s стинг; PLACEHOLDER)
