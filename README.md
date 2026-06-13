# ShelfLife 🍳 — The Smart Creative Pantry Remixer

An interactive, AI-driven "Pantry-to-Plate" application built for the **Microsoft Agents League Hackathon (2026)**. ShelfLife leverages AI-assisted development workflows to turn miscellaneous, leftover kitchen ingredients into engaging, gamified culinary quests, dynamically tailored by a user's corporate schedule metrics.

---

## 🧠 Microsoft IQ Integration (Work IQ Layer)
To fulfill the core requirement of grounding our application workflow in real organizational signals safely, ShelfLife integrates a **synthetic Work IQ context layer** located at `data/synthetic_work_signals.json`.

### How It Works:
* **Context Harvesting:** The application's core logic parses a fabricated employee dashboard tracking automated workload parameters (such as `weekly_meeting_hours` and `current_burnout_risk`).
* **Multi-Step Agent Adaptation:** * If the parsed Work IQ metrics reveal a highly saturated calendar (>20 meeting hours), the agent's orchestration routine automatically switches to a supportive, comforting system persona and restricts recipe generations to fast, low-effort 10-minute recipes.
  * If the corporate calendar is clear, the agent drops its defensive pacing and outputs intricate, multi-step gourmet challenges requiring advanced culinary steps.

---

## 🛠️ Built with GitHub Copilot
This codebase was rapidly scaffolded and optimized using **GitHub Copilot** inside VS Code. Copilot was utilized across multiple modes to accelerate development:
1. **Agent Mode:** Used to structure our core multi-step logical branching layers inside `src/utils/creativeAgent.js`.
2. **Edit Mode:** Leveraged to implement input string sanitization and write execution safeguards to protect API keys.
3. **Plan Mode:** Utilized to map our data model schemas before drafting the local JSON data layers.

---

## 🔬 Local Architecture & Test Run
The project uses a modular Node.js setup with ES modules to execute core agent evaluations.

### File Structure:
```text
shelflife-app/
├── data/
│   └── synthetic_work_signals.json   <-- Synthetic Work IQ Dataset
├── src/
│   └── utils/
│       └── creativeAgent.js          <-- Core Context-Aware Agent Engine
├── .gitignore                        <-- Environment Boundaries & Secret Protection
├── package.json                      <-- Module Configurations
├── README.md                         <-- Submission Documentation
└── test-agent.js                     <-- Local Telemetry Tester