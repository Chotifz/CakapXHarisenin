"use client";

import { useEffect, useState } from "react";
import CourseCard from "../fragments/course-card";
import SectionTemplate from "./section-template";
import Navigation from "../fragments/navigation";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilter, setOrderBy } from "@/store/courses/coursesListSLice";

function CourseTemplate({
  title,
  description,
  courses,
  hiddenNav,
  filterType,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleViewAll = () => {
    if (filterType === "PRAKERJA") {
      dispatch(setFilter({ prakerjaFilter: true }));
    } else if (filterType === "BEST_SELLER") {
      dispatch(setOrderBy("BEST_SELLER"));
    }
    router.push("/courses");
  };

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1.5);
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
          hiddenNav={hiddenNav}
          cardsPerView={cardsPerView}
          handleViewAll={handleViewAll}
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
              className="w-[calc(100%/1.5-1rem)] sm:w-[calc(100%/2-1rem)] md:w-[calc(100%/3-1rem)] lg:w-[calc(100%/4-1rem)]  flex-shrink-0"
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
