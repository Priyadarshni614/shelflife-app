import fs from 'fs';
import path from 'path';

// Load our synthetic Work IQ dataset safely
function getSyntheticWorkIQContext(userId) {
    try {
        const dataPath = path.resolve('data/synthetic_work_signals.json');
        const fileData = fs.readFileSync(dataPath, 'utf-8');
        const profiles = JSON.parse(fileData);
        return profiles.find(p => p.user_id === userId) || profiles[0];
    } catch (error) {
        return { weekly_meeting_hours: 25, current_burnout_risk: "High" };
    }
}

// Main Agent Execution Flow
export async function generateCulinaryQuest(userId, pantryIngredients) {
    const workIQContext = getSyntheticWorkIQContext(userId);
    
    let recipePacing = "";
    let agentPersona = "";

    // Dynamic prompt adaptation using the synthetic intelligence layer
    if (workIQContext.weekly_meeting_hours > 20 || workIQContext.current_burnout_risk === "High") {
        recipePacing = "A super fast, low-stress, 10-minute 'Comfort Food Hack'. Minimize complex cooking steps.";
        agentPersona = "A supportive, empathetic kitchen buddy who knows the user had an exhausting, meeting-heavy corporate day.";
    } else {
        recipePacing = "An elaborate, creative culinary challenge. Focus on unique flavor pairings and artistic plating aesthetics.";
        agentPersona = "An elite, energetic Michelin-star head chef pushing a talented developer to try bold kitchen experiments.";
    }

    const fineTunedPrompt = `
    System Persona: ${agentPersona}
    Work Context Signal: User logged ${workIQContext.weekly_meeting_hours} meeting hours.
    Required Pacing: ${recipePacing}
    Available Items: ${pantryIngredients.join(', ')}
    `;

    console.log("\n🚀 [ORCHESTRATION LAYER] Processing signals through Synthetic Work IQ Context...");
    
    // Simulating our structured JSON return for quick local demo compilation
    return {
        questTitle: workIQContext.weekly_meeting_hours > 20 ? "The Post-Meeting Emergency Stir-Fry" : "The Midnight Architect's Soufflé",
        pacingMode: workIQContext.weekly_meeting_hours > 20 ? "Fast Refuel" : "Gourmet Mastery",
        storyIntro: `Since you logged ${workIQContext.weekly_meeting_hours} hours of corporate synchronize meetings, let's execute an optimized recipe.`,
        requiredIngredients: pantryIngredients,
        questSteps: [
            "Initialize your skillet over high thermal heat.",
            "Toss in the chopped leftovers and flash fry for 4 minutes.",
            "Plate immediately, and close your laptop tabs."
        ]
    };
}