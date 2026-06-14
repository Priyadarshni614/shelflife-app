# ShelfLife Engine 🍳 — Dynamic Context-Aware Agent Control Plane

An interactive, AI-driven application sandbox built for the **Agents League Hackathon 2026** (Creative Apps Track). **ShelfLife** transforms miscellaneous, leftover pantry ingredients into engaging, gamified culinary quests, dynamically adapted by an employee's organizational stress and workload signals.

---

## 🧠 Dual-IQ Layer Architecture & Multi-Agent Logic

To fulfill the core hackathon requirements of grounding agent workflows in real organizational context safely, ShelfLife relies on a robust dual-layer evaluation structure:

### 1. Work IQ Layer (Dynamic Context Tracking)
The engine evaluates live organizational signals (simulating user parameters such as `weekly_meeting_hours`, calendar density, and burnout probability) to map the current cognitive fatigue index of the user.

### 2. Foundry IQ Layer (Policy Compliance & Rules Grounding)
Acts as a strict regulatory gatekeeper. It locks instructions down against active cooking guidelines—enforcing a `<10-minute prep time` constraint on single-vessel setups for high-stress users, while unlocking uncapped, advanced composition rules for users with open focus blocks.

---

## 🕹️ Interactive Control Plane Sandbox Features

The workspace interface (`index.html`) acts as a real-time reactive dashboard designed to give hackathon judges an immediate, highly visual proof of concept:

*   **Five-Second Adaptiveness Demo:** Evaluators can click the **🔥 Simulate Busy Week** or **🧠 Simulate Focus Week** buttons to watch the entire engine cascade live—shifting color palettes (Rose vs. Cyan), updating scores, swapping personas, and completely rewriting recipes in real time.
*   **Multi-Agent Orchestration Telemetry:** Uses simulated async timing chains to visually track the execution phases of four distinct sub-agents (*Work IQ Profile Analyzer*, *Pantry Impact Optimizer*, *Foundry Safety Validator*, and *Recipe Quest Generator*) directly in front of the viewer.
*   **Live Production Telemetry Logs:** Features embedded output terminals showing real-time text-trace telemetry logs (`[WORK IQ]`, `[FOUNDRY IQ]`, `[ORCHESTRATOR]`) to maintain complete decision transparency.
*   **Gamified Quest Deck Cards:** Replaces plain text layouts with full immersion quest cards complete with custom difficulty stars, unique missions, and tailored feedback parameters (*+15 Sustainability XP*, *Focus Horizon Enrichment*).
*   **Sustainability Intelligence Panel:** Evaluates the array length of current ingredients live to dynamically calculate real-world metrics like *Ingredients Saved*, *Estimated Waste Prevented (g)*, and *Carbon Net Impact Reduction %*.

---

## 🔒 Enterprise-Ready Safety Patterns & Guardrails

To ensure total runtime stability and eliminate common multi-agent system failures, ShelfLife includes two critical safety validation gates:

1.  **Empty Pantry Boundary:** Intercepts blank stream inputs before execution, instantly rendering a soft structural validation warning container on-screen instead of throwing a system crash.
2.  **Toxic Material Vector Filtering Gate:** Screens string inputs against a strict array of non-food keywords (e.g., `bleach`, `motor oil`, `detergent`). If detected, the generation pipeline is instantly aborted, model context rendering is blocked, and a high-severity **🚨 SAFETY VALIDATION CRITICAL TRIGGER** panel is logged to guarantee compliance bounds.

---

## 🛠️ Built with AI-Assisted Workflows (GitHub Copilot)
This codebase was rapidly scaffolded, optimized, and debugged using **GitHub Copilot** across multiple workflow modes to maintain high execution velocity:
*   **Plan Mode:** Utilized to map data schemas and build semantic routing paths for our workload parameters before drafting logic.
*   **Agent Mode:** Used to structure the complex JavaScript string concatenations and template metrics inside the dashboard generator.
*   **Edit Mode:** Leveraged to implement our text input token sanitizers and embed our safety filter checks.

---

## 🔬 Local Project Architecture

The project directory is structured as a lightweight, lightning-fast web sandbox environment:

```text
shelflife-app/
├── index.html         <--- Ultimate Interactive Agent Control Center Panel Dashboard
├── test-agent.js      <--- Local Desktop Launcher Script (Triggers Browser Automation)
└── package.json       <--- Project Configuration & ES Modules Activation Layer