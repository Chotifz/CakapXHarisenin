"use client";

import FaqList from "../fragments/faq-list";
import SectionTemplate from "./section-template";

import { useState, useEffect } from "react";

export default function FaqTemplate({ title, description, data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <SectionTemplate title={title} description={description}>
      <div className="w-full border p-4 mt-10 mb-5">
        {isLoading && <p className="text-primary">Loading...</p>}
        <FaqList faq={data} />
      </div>
    </SectionTemplate>
  );
}
