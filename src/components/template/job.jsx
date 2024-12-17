"use client";

import { useState } from "react";
import Navigation from "../fragments/navigation";
import SectionTemplate from "./section-template";
import CardFragment from "../fragments/card-fragment";
import { Button } from "../ui/button";
import { Briefcase, MapPin } from "lucide-react";

const JobTemplate = ({ jobs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView] = useState(4);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === jobs.length - cardsPerView ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jobs.length - cardsPerView : prevIndex - 1
    );
  };

  return (
    <SectionTemplate
      title="Lowongan Pekerjaan Terbaru di Cakap Karier"
      description="Temukan peluang kerja terbaik sesuai keahlian dan lokasi Anda."
    >
      <Navigation
        handleBack={handleBack}
        handleNext={handleNext}
        coursesLength={jobs.length}
        currentIndex={currentIndex}
        cardsPerView={cardsPerView}
      />

      <div
        className="w-full flex gap-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
        }}
      >
        {jobs.map((job, index) => (
          <div key={job.id} className="w-[calc(25%-1rem)] flex-shrink-0">
            <CardFragment
              minHeight="min-h-[300px]"
              header={
                <div className="min-h-[70px] flex justify-center flex-col">
                  <h1
                    className="text-md font-semibold text-primary"
                    dangerouslySetInnerHTML={{
                      __html: job.title || "No Title",
                    }}
                  />
                  <h2
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: job.company || "No Company",
                    }}
                  />
                </div>
              }
              content={
                <div className="text-gray-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-blue-500" />
                    <span className="text-sm">{job.jobtype || "N/A"}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-blue-500" />
                    <span className="text-sm">
                      {job.city ? `${job.city},` : ""} {job.country || "N/A"}
                    </span>
                  </div>
                </div>
              }
              footer={
                <Button variant="secondary" className="w-full">
                  Lihat Detail
                </Button>
              }
            />
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
};

export default JobTemplate;
