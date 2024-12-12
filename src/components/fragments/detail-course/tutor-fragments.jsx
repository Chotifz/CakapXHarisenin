"use client";

import React, { useState } from "react";

const TutorFragment = ({ tutorPhoto, tutorName, tutorDesc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getShortText = (text) => {
    if (!text) return "";
    return text.split(" ").slice(0, 35).join(" ") + "...";
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4 border border-black rounded-lg mt-4 bg-slate-300">
      <div className="flex mb-6 gap-2 border-b-stone-950">
        <div>
          <img src={tutorPhoto} alt={tutorName} width="50px" />
        </div>
        <div>
          <h1>Pengajar</h1>
          <h2>{tutorName}</h2>
        </div>
      </div>
      <div>
        <p className="text-sm">
          {isExpanded ? tutorDesc : getShortText(tutorDesc)}
        </p>
      </div>
      <div className="flex justify-end mt-2">
        <button onClick={handleToggle} className="text-blue-500 text-sm">
          {isExpanded ? "Tutup" : "Baca Selengkapnya"}
        </button>
      </div>
    </div>
  );
};

export default TutorFragment;
