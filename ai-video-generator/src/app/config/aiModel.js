const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("API key is not defined. Please set NEXT_PUBLIC_GEMINI_API_KEY.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

    export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                {
                    text: "Write a script to generate a 30 seconds video on the topic: interesting historical story along with AI image prompt in realistic format for each scene and give me the result in JSON format with imagePrompt and content text as a field.",
                },
            ],
        },
        {
            role: "model",
            parts: [
                {
                    text: JSON.stringify([
                        {
                            "imagePrompt": "A bustling 17th-century Amsterdam street scene, cobblestone streets, canals, merchants in elaborate clothing, ships docked in the harbor, a sense of wealth and prosperity. Golden hour lighting. Realistic.",
                            "content": "**(0-3 seconds) Narration: In the heart of 17th-century Amsterdam, something extraordinary was happening. A craze that would grip the nation and rewrite the rules of finance: Tulip Mania.**"
                        },
                        {
                            "imagePrompt": "Close-up of a vibrant, exquisitely detailed Rembrandt tulip with feathery petals in multiple colors. Focus on the intricate patterns and unique imperfections of the flower. Soft, diffused lighting. Realistic macro photography.",
                            "content": "**(3-6 seconds) Narration: The object of this obsession? The tulip. Especially prized were the Rembrandt tulips, with their stunning, flamed patterns.**"
                        },
                        {
                            "imagePrompt": "A group of wealthy Dutch merchants intensely negotiating a tulip bulb trade in a dimly lit room. Tables laden with documents and tulip catalogs. Exaggerated expressions of excitement and greed. Dramatic chiaroscuro lighting. Realistic painting style.",
                            "content": "**(6-10 seconds) Narration: People began trading tulip bulbs for exorbitant prices. Fortunes were made and lost in a single day, as bulbs changed hands for sums equivalent to houses and estates.**"
                        },
                        {
                            "imagePrompt": "A graph showing a rapidly rising line representing the price of tulips, peaking dramatically, then crashing down equally fast. The graph should appear hand-drawn on old parchment. Dramatic red color indicating the crash. Realistic.",
                            "content": "**(10-14 seconds) Narration: The price of these flowers soared, reaching unimaginable heights. But this bubble, like all bubbles, was destined to burst.**"
                        },
                        {
                            "imagePrompt": "A chaotic scene of people panicking in a market square. Empty tulip bulb baskets overturned on the ground. Faces etched with despair and ruin. Dark and gloomy atmosphere. Realistic.",
                            "content": "**(14-18 seconds) Narration: In February 1637, the market crashed. The price of tulips plummeted, leaving countless investors bankrupt and devastated.**"
                        },
                        {
                            "imagePrompt": "A single, wilted tulip lying on the ground, surrounded by scattered coins and documents. A symbol of lost wealth and shattered dreams. Somber and melancholic atmosphere. Realistic.",
                            "content": "**(18-22 seconds) Narration: Overnight, fortunes vanished. What was once worth more than gold became worthless, a stark reminder of the perils of speculation.**"
                        },
                        {
                            "imagePrompt": "A middle-aged Dutch woman in simple clothing sadly tending a small tulip garden. Her face shows a mix of reflection and resilience. Soft, natural lighting. Realistic.",
                            "content": "**(22-26 seconds) Narration: The Tulip Mania left a lasting scar on Dutch society, a cautionary tale about the dangers of irrational exuberance.**"
                        },
                        {
                            "imagePrompt": "An open history book with an illustration of a tulip and text describing Tulip Mania. Faded parchment paper and old-fashioned font. Natural sunlight illuminating the page. Realistic.",
                            "content": "**(26-30 seconds) Narration: The story of Tulip Mania remains a fascinating chapter in economic history, a testament to the enduring power of human greed and the fragility of market bubbles.**"
                        }
                    ]),
                },
            ],
        },
    ],
});