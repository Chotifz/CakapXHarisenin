"use client";

import SectionTemplate from "@/components/template/section-template";
import PartnerListItem from "@/components/fragments/partnerlist-item";
import CardLogoLoader from "../fragments/card-logo-loader";

import { useState, useEffect } from "react";

import Link from "next/link";

export default function PartnerListHomeTemplate({ data }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <SectionTemplate
      title={"Mitra Kursus"}
      description={
        "Mitra pendukung bekerja sama dengan Cakap untuk menyediakan berbagai benefit ketika kamu bertransaksi."
      }
    >
      <div className="w-full flex  justify-end mb-4">
        <Link href="/partners-list">
          <span className="text-primary font-bold px-2 cursor-pointer">
            Lihat Semua
          </span>
        </Link>
      </div>
      <div className="pb-10">
        {isLoading ? (
          <CardLogoLoader />
        ) : (
          <PartnerListItem items={data} classname="justify-center" />
        )}
      </div>
    </SectionTemplate>
  );
}
