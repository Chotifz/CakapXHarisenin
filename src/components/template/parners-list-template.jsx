"use client";

import { Button } from "../ui/button";
import BannerPage from "../fragments/banner-page";
import PartnerListItem from "../fragments/partnerlist-item";

import { useState } from "react";
// import CardLogoLoader from "../fragments/card-logo-loader";

export default function PartnersListTemplate({ courses, payments }) {
  const [selectedCategory, setSelectedCategory] = useState("COURSE");

  return (
    <div className="mb-20 max-w-7xl w-full mx-auto px-4">
      <div className="pt-4">
        <BannerPage>
          <div className="h-44 relative w-full">
            <h1 className="text-start font-bold text-3xl absolute bottom-4 w-full">
              Mitra Upskill
            </h1>
          </div>
        </BannerPage>
      </div>

      <div>
        <Button
          onClick={() => setSelectedCategory("COURSE")}
          variant="ghost"
          className={`${
            selectedCategory === "COURSE" ? "border-b-2 border-black" : ""
          }`}
        >
          Mitra Pendidikan
        </Button>
        <Button
          onClick={() => setSelectedCategory("PAYMENT")}
          variant="ghost"
          className={`${
            selectedCategory === "PAYMENT" ? "border-b-2 border-black" : ""
          }`}
        >
          Mitra Pendukung
        </Button>
      </div>

      <div>
        {selectedCategory === "COURSE" && (
          <div className="pt-6 border-t">
            <h2 className="font-bold">Mitra Pendidikan</h2>
            <p>
              Mitra pendukung bekerja sama dengan Cakap untuk menyediakan
              berbagai benefit ketika kamu bertransaksi.
            </p>

            {/* {isLoading && <CardLogoLoader />} */}
            <PartnerListItem
              items={courses}
              classname="justify-center md:justify-normal"
            />
          </div>
        )}

        {selectedCategory === "PAYMENT" && (
          <div className="pt-6 border-t">
            <h2 className="font-bold">Mitra Pendukung</h2>
            <p>
              Mitra pendukung bekerja sama dengan Cakap untuk menyediakan
              berbagai benefit ketika kamu bertransaksi.
            </p>

            {/* {isLoading && <CardLogoLoader />} */}
            <PartnerListItem items={payments} />
          </div>
        )}
      </div>
    </div>
  );
}
