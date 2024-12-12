"use client";
import React, { useState } from "react";

const getShortText = (text) => {
  if (!text) return "";
  return text.split(" ").slice(0, 25).join(" ") + "...";
};

const ListDescription = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-4 border border-black rounded-lg mt-4 bg-slate-300">
      <div className="py-2 pr-2">
        <h1>{title}</h1>
      </div>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: isExpanded ? description : getShortText(description),
          }}
        />
      </div>
      <div className="flex justify-end mt-auto">
        <button onClick={handleClick} className="text-blue-500">
          {isExpanded ? "Tutup" : "Baca Selengkapnya"}
        </button>
      </div>
    </div>
  );
};

export default ListDescription;
