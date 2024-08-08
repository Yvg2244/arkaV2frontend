import React, { useEffect } from "react";
import "./ChatBubble.css";

const ChatBubble: React.FC = () => {
  useEffect(() => {
    const initializeVoiceflow = () => {
      const voiceflow = (window as any).voiceflow;
      console.log("Voiceflow object:", voiceflow); // Log to check if Voiceflow is available

      if (voiceflow && voiceflow.chat) {
        voiceflow.chat
          .load({
            verify: { projectID: "669247f1ef5a6818a4ea085d" },
            url: "https://general-runtime.voiceflow.com/",
            versionID: "production",
          })
          .then(() => {
            // Ensure chat opens after loading
            // setTimeout(() => {
            //   if (voiceflow.chat) {
            //     voiceflow.chat.open(); // Show the chat
            //   }
            // }, 1000); // Adjust the delay if needed
          })
          .catch((error: Error) => {
            console.error("Error loading Voiceflow chat:", error);
          });
      } else {
        console.error("Voiceflow chat is not available.");
      }
    };

    // Check if the script already exists
    const existingScript = document.querySelector(
      'script[src="https://cdn.voiceflow.com/widget/bundle.mjs"]'
    );

    if (!existingScript) {
      // Append the Voiceflow script to the document
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.onload = initializeVoiceflow;
      script.onerror = () => {
        console.error("Error loading Voiceflow script.");
      };
      const s = document.getElementsByTagName("script")[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(script, s);
      }
    } else {
      // If the script already exists, initialize Voiceflow
      initializeVoiceflow();
    }
  }, []);

  return (
    <div>
      <div style={{ width: 0, height: 0 }} id="VG_OVERLAY_CONTAINER">
        {/* Voiceflow widget renders here */}
      </div>
      <div className="chat-bubble">
        <button className="close-button">X</button>
        <div className="vg-container">
          {/* Chat content will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
