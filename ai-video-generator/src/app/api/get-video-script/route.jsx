import { NextResponse } from "next/server";
import {chatSession} from "../../config/aiModel.js"; 

export async function POST(req) {
    try {
        const { prompt } = await req.json();
        console.log("Prompt received:", prompt);

        const result = await chatSession.sendMessage(prompt);
        console.log("Result received:", result);

        if (result && result.response) {
            return NextResponse.json({ 'result': JSON.parse(result.response.text()) });
        } else {
            throw new Error("Invalid response structure");
        }
    } catch (e) {
        console.error("Error occurred:", e);
        return NextResponse.json({ 'error': e.message });
    }
}