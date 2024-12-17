"use client";

import SectionTemplate from "./section-template";
import Voucher from "../fragments/voucher";
import Navigation from "../fragments/navigation";
import { useEffect, useState } from "react";
import CardLogo from "../fragments/card-logo";

export default function CategoryListHomeTemplate({
  categoriesData,
  title,
  description,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(8);

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categoriesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categoriesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(7);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(6);
      } else {
        setCardsPerView(4);
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
          coursesLength={categoriesData?.length}
          currentIndex={currentIndex}
          hiddenLink={true}
          cardsPerView={cardsPerView}
        />

        <div
          className="w-full flex gap-4 transition-transform duration-500 pb-12"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
          }}
        >
          {categoriesData.map((item, index) => (
            <div
              key={`${item.courseId}-${index}`}
              className="w-[calc(100%/4-1rem)] md:w-[calc(100%/6-1rem)] lg:w-[calc(100%/7-1rem)] flex-shrink-0"
            >
              <div key={item.categoriesId}>
                <CardLogo
                  imgName={item.categoryName}
                  imgUrl={item.icon}
                  classname={"rounded-full md:w-16 md:h-16 w-12 h-12 text-sm"}
                  category={true}
                  id={item.categoriesId}
                  hrefName={item.categoryName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Voucher
        icon=""
        text="Punya kode belajar? Tukar kode belajarmu di sini"
        buttonText="Tukar Code"
      />
    </SectionTemplate>
  );
}
