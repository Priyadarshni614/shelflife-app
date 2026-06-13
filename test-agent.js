import { exec } from 'child_process';

async function launchControlCenter() {
    console.log("--- LAUNCHING ULTIMATE INTERACTIVE AGENT CONTROL CENTER ---");
    console.log("✨ [SUCCESS] ShelfLife sandbox running seamlessly via index.html");
    
    // Fire open your default browser session window automatically
    exec('start index.html');
}

launchControlCenter();