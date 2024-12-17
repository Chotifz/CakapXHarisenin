"use client"; // Menandakan ini adalah komponen klien

import { useState } from "react";
import Navigation from "../fragments/navigation";
import SectionTemplate from "./section-template";
import CardFragment from "../fragments/card-fragment";
import { Button } from "../ui/button";

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

      {/* Wrapper Carousel */}
      <div
        className="w-full flex gap-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
        }}
      >
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className="w-[calc(25%-1rem)] flex-shrink-0" // 4 card per slide
          >
            <CardFragment
              minHeight="min-h-[300px]"
              header={
                <h2 className="text-lg font-semibold text-primary">
                  {job.title || "No title available"}
                </h2>
              }
              content={
                <div className="text-gray-700">
                  <p>
                    <strong>Type:</strong> {job.jobtype || "N/A"}
                  </p>
                  <p>
                    <strong>City:</strong> {job.city || "N/A"}
                  </p>
                  <p>
                    <strong>Country:</strong> {job.country || "N/A"}
                  </p>
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
