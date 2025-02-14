"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "../../../components/ui/button";
import axios from "axios";
import CustomLoading from "../_components/CustomLoading";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState([]);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const generateAudioFile = async (videoScriptData) => {
    try {
      const scriptText = videoScriptData.map((item) => item.ContentText).join(" ");
  
      const response = await axios.post("/api/generate-audio", { text: scriptText, id: uuidv4() });
  
      if (response.data.audio) {
        // Convert base64 to an audio file URL
        const audioUrl = `data:audio/mp3;base64,${response.data.audio}`;
        console.log("Audio URL:", audioUrl);
  
        // Play the audio
        const audio = new Audio(audioUrl);
        audio.play();
      }
    } catch (err) {
      console.error("Audio Generation Error:", err);
    }
  };  

  const onClickHandler = async () => {
    setLoading(true);
    setError(null);
    setDebugInfo(null);

    try {
      // Validation
      if (!formData.duration || !formData.topic || !formData.imageStyle) {
        throw new Error("Please fill in all fields");
      }

      // Generate the script
      const scriptResponse = await axios.post("/api/get-video-script", {
        prompt: `Generate a detailed video script for a ${formData.duration} video about "${formData.topic}".
          Each scene should have:
          1. ContentText: The narration text for the scene.
          2. imagePrompt: A detailed image prompt in ${formData.imageStyle} style.
          Return the result as a JSON array with fields: ContentText and imagePrompt.`
      });

      if (!scriptResponse.data?.result) {
        throw new Error("Invalid script generation response");
      }

      const processedData = scriptResponse.data.result.map((item) => ({
        ContentText: item.ContentText || "Missing content",
        imagePrompt: item.imagePrompt || "Missing image prompt",
      }));

      setVideoScript(processedData);

      // Then generate the audio
      await generateAudioFile(processedData);

    } catch (err) {
      console.error('Operation failed:', err);
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <h2 className="mt-8 font-bold text-2xl md:text-4xl text-primary text-center">
        Create New Video
      </h2>

      <div className="my-8 shadow-lg rounded-lg p-6 md:p-8 bg-white">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            <p className="font-medium">Error:</p>
            <p>{error}</p>
          </div>
        )}

        
        <Button 
          className="mt-6 w-full" 
          disabled={loading} 
          onClick={onClickHandler}
        >
          {loading ? "Creating..." : "Create Short Video"}
        </Button>
      </div>

      <CustomLoading loading={loading} />
    </div>
  );
};

export default Page;