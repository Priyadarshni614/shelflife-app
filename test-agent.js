// test-agent.js
import { generateCulinaryQuest } from './src/utils/creativeAgent.js';

async function runTest() {
    const mockIngredients = ["Leftover Rice", "Onions", "Soy Sauce", "Egg"];
    
    console.log("\n--- RUNNING LOCAL WORK IQ EVALUATION ---");
    const result = await generateCulinaryQuest("MOCK-USER-01", mockIngredients);
    
    console.log("\n📬 [AGENT OUTPUT PAYLOAD]:");
    console.log(JSON.stringify(result, null, 2));
}

runTest();