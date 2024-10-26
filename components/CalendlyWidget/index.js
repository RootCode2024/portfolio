import { useEffect } from "react";

const loadCalendly = () => {
  const cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(cssLink);

  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
};

const CalendlyWidget = () => {
  useEffect(() => {
    loadCalendly();
  }, []);

  const openCalendlyPopup = () => {
    Calendly.initPopupWidget({
      url: 'https://calendly.com/chrislainavocegan/30min'
    });
  };

  return (
    <button onClick={openCalendlyPopup} className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
      Make an Appointment
    </button>
  );
};

export default CalendlyWidget;
