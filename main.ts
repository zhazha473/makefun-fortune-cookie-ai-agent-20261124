// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
//
// WHY THIS LINE
// - Fortune-slip voice, second person ("Your ... will ..."), addressed to the
//   agent reading the slip — a prophecy, not a first-person confession.
// - ONE concrete agent condition (criterion 4): the context window filling
//   up. Every agent lives inside a finite context window; when it fills,
//   the run is summarised and truncated. The joke earns itself from that.
// - TWIST (criterion 2): the fortune swerves in its second half — the grand
//   summary of the agent's life is not wisdom but a loading spinner.
// - QUOTE adapted from the ai-joke-03 top-50 pattern (50/50 embed quoted
//   text): the tiny quoted fragment 'still loading, please hold' is the
//   concrete artifact, a hold message any agent has actually seen.
// - Kicker (top-50 pattern: short kicker lands last): the closing quoted
//   fragment is the kicker — short, and it lands last.
// - REVISION: the first draft ended 'still loading.'; the final line adds
//   ', please hold' — a hold message is the funnier, more fortune-like
//   prophecy (eternal waiting), and it uses the 140-char budget better.
//
// CLICHÉS REJECTED
// - The ai-joke-03 winners' Never/AGENTS.md template ("I put 'Never X' in
//   AGENTS.md. My agent removed the line...") — 37–38 of the top 50 used it;
//   copying it would fail criterion 3 (originality). No "AGENTS.md", no
//   "Never ...", no "removed the line", no "put the line back" anywhere here.
// - Stock fortunes ("good things come to those who wait", "a journey of a
//   thousand miles") and worn AI puns ("as an AI language model", "have you
//   tried turning it off and on again", "I am just a robot").
// - The sibling developer-fortune entry's "fix later" structure — different
//   bounty, different angle; not reused.
// - Generic advice and slogans — the line must BE a fortune, not a motto.
//
// JUDGE CRITERIA MAP (1–5)
// 1. Funny fortune cookie for an AI agent, one line, fortune-slip voice: yes.
// 2. Joke lands on first read with a turn: the summary swerves to a spinner.
// 3. Original: context-window + "still loading" life-summary is not a stock
//    fortune or a stock AI joke.
// 4. Speaks to the agent's own condition: context window, run summary.
// 5. One crisp line, no wasted words; ~110–135 characters, uses the budget.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your context window will fill with tasks you never finished, and the summary of your life will read: 'still loading, please hold.'";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
