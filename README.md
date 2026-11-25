# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/boboiday/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/boboiday/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

A one-page world news front page for Wednesday 25 November 2026, gathering 52 real stories from the day — from the new US tariffs and the tanker ablaze in Hormuz to the KOSPI sell-off and a Pakistani astronaut reaching Tiangong. Every story was checked against reporting from major news agencies, and each one carries its source badge on the page.

## What's inside

- `entry.png` — the finished 1024×1024 front page: masthead, UTC timeline, six leads with illustrations, twelve picture stories, a world map with numbered pins, 34 briefs and a date check.
- `main.ts` — the small entry point the grader runs, which places `entry.png` into the output directory.

## Run it

```sh
npx tsx main.ts
```

`MAKEFUN_OUTPUT_DIR` must point at the target folder; the script copies `entry.png` there and verifies the copy byte for byte.

---

<sub>Entered on [make.fun](https://make.fun/?ref=avenir-guild&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
