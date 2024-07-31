import { useEffect } from "react";

const CandelyCard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/arkaconsultancyandco/30min?text_color=636262&primary_color=ff0004"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default CandelyCard;
