import React, { useEffect } from "react";
import "./ChatBubble.css";

const ChatBubble: React.FC = () => {
  useEffect(() => {
    // Append the Voiceflow script to the document
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.onload = () => {
      (window as any).voiceflow.chat.load({
        verify: { projectID: "669247f1ef5a6818a4ea085d" },
        url: "https://general-runtime.voiceflow.com/",
        versionID: "production",
      });
    };
    const s = document.getElementsByTagName("script")[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(script, s);
    }

    // Cleanup script on component unmount
    // return () => {
    //   document.body.removeChild(script);
    // };
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
