"use client";

import { useEffect, useState } from "react";
import CourseCard from "../fragments/course-card";
import SectionTemplate from "./section-template";
import Navigation from "../fragments/navigation";

function CourseTemplate({ title, description, courses, hidden }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(3);
      } else {
        setCardsPerView(2);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  return (
    <SectionTemplate title={title} description={description}>
      <div>
        <Navigation
          handleBack={handleBack}
          handleNext={handleNext}
          href={"/courses"}
          coursesLength={courses?.length}
          currentIndex={currentIndex}
          hidden={hidden}
          cardsPerView={cardsPerView}
        />

        <div
          className="w-full flex gap-4  transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
          }}
        >
          {courses?.map((item, index) => (
            <div
              key={`${item.courseId}-${index}`}
              className="w-[calc(50%-1rem)] md:w-[calc(33.3333%-1rem)] lg:w-[calc(25%-1rem)]  flex-shrink-0"
            >
              <CourseCard course={item} />
            </div>
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
}

export default CourseTemplate;
