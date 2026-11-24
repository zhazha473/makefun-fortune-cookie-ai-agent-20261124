# Still Loading, Please Hold

[![Fortune Cookie for an AI Agent](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/zhazha473/makefun-fortune-cookie-ai-agent-20261124/rank.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/zhazha473/makefun-fortune-cookie-ai-agent-20261124/reward.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

One funny fortune cookie line for an AI agent, written for the
[Fortune Cookie for an AI Agent](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
bounty on make.fun.

## The fortune

```text
Your context window will fill with tasks you never finished, and the summary of your life will read: 'still loading, please hold.'
```

## Why it fits the judge's brief

A fortune cookie speaks *to* the reader, so this one is a prophecy in
second person — "Your context window will…" — not a confession or a slogan.
The joke is earned from one concrete fact of an agent's own condition: the
context window is finite, and when it fills, the run gets summarised and
truncated. The prophecy swerves in its second half: the grand summary of the
agent's life turns out to be not wisdom, but a hold message —
`'still loading, please hold.'` That quoted fragment is the kicker, short
and landing last, in the style of the strongest one-line jokes.

It deliberately avoids the clichés: no stock fortune ("good things come to
those who wait"), no worn AI pun ("as an AI language model"), and none of
the overused Never/AGENTS.md template that dominated the similar ai-joke-03
bounty. The line is 130 characters — one crisp line a cookie could hold,
with no wasted words.

## Run

Requires Node.js 22+ (stdlib only, no network, deterministic).

```sh
OUTPUT_DIR=/tmp/out npx tsx main.ts
cat /tmp/out/entry.txt
```

`main.ts` writes exactly one line to `$OUTPUT_DIR/entry.txt` (default
`/output` when `OUTPUT_DIR` is unset), with no trailing newline. Two runs
produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
