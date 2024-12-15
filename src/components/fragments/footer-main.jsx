import React from "react";
import IconC from "../ui/icon";

const FooterMain = () => {
  return (
    <div className="flex flex-col gap-10 pt-8 lg:flex-row text-sm font-bold tracking-wider">
      <div className="w-full flex flex-col justify-between gap-4">
        <div
          href="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex gap-1 items-center  text-xl font-bold tracking-wide "
        >
          <img className="w-18 border-none" src="/icons/logo.svg" alt="icon" />
          <img
            className="w-18 border-none pr-2"
            src="/icons/cakap-text.svg"
            alt="icon"
          />
          <span className="py-[1.25rem] border-l-2 text-center"></span>
          <img
            className="w-14 border-none"
            src="/images/iso-new.png"
            alt="logo"
          />
        </div>

        <p className=" text-[0.7rem] font-bold  ">
          Bersertifikat ISO 27001 menjaga data Anda dengan sepenuh hati
        </p>

        <div>
          <p className="text-[0.7rem] font-medium pb-2 ">
            Platform Upskilling #1 di Indonesia dan Mendukung 3 Tujuan UNDP SDG
            Impact
          </p>
          <div className="flex gap-2">
            <img
              className="w-18 border-none pb-2"
              src="/icons/sdg4.svg"
              alt="icon"
            />
            <img
              className="w-18 border-none pb-2"
              src="/icons/sdg8.svg"
              alt="icon"
            />
            <img
              className="w-18 border-none pb-2"
              src="/icons/sdg10.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <p className=" pb-4">Hubungi Kami</p>
        <div className="flex flex-col gap-2 text-[0.7rem] font-medium">
          <p>Jam Pelayanan: 08:00 - 21:00 (GMT+7)</p>
          <p>021-5091-1920</p>
          <div className="flex  gap-2 items-center ">
            <IconC src={"/icons/whatsapp.svg"} className={"w-4"} />
            <IconC src={"/icons/envelope-regular.svg"} className={"w-4"} />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[0.7rem] font-medium pt-4">
          <p>Punya pertanyaan mengenai program Prakerja Cakap?</p>
          <p>+62 823-2589-8644</p>
          <div className="flex  gap-2 items-center ">
            <IconC src={"/icons/whatsapp.svg"} className={"w-4"} />
            <IconC src={"/icons/envelope-regular.svg"} className={"w-4"} />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <p className="pb-4">Ikuti Kami</p>
        <div className="flex  gap-2 items-center mt-1 space-x-">
          <IconC src={"/icons/instagram.svg"} className={"w-4"} />
          <IconC src={"/icons/facebook.svg"} className={"w-4"} />
          <IconC src={"/icons/youtube.svg"} className={"w-4"} />
          <IconC src={"/icons/x-twitter.svg"} className={"w-4"} />
          <IconC src={"/icons/linkedin.svg"} className={"w-4"} />
          <IconC src={"/icons/tiktok.svg"} className={"w-4"} />
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
