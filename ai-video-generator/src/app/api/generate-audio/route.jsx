import textToSpeech from "@google-cloud/text-to-speech";
import { NextResponse } from "next/server";

const client = new textToSpeech.TextToSpeechClient();

export async function POST(req) {
  try {
    const { text, id } = await req.json();

    // Validate input
    if (!text || !id) {
      return NextResponse.json({ error: "Text and ID are required" }, { status: 400 });
    }

    const request = {
      input: { text },
      voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
      audioConfig: { audioEncoding: "MP3" },
    };

    // Generate audio
    const [response] = await client.synthesizeSpeech(request);

    // Convert binary audio to base64 (suitable for sending over API)
    const audioBase64 = response.audioContent.toString("base64");

    return NextResponse.json({ result: "Success", id, audio: audioBase64 });
  } catch (error) {
    console.error("Error generating audio:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
