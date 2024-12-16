import { Rocket } from "lucide-react";
import BannerCarousel from "../fragments/banner-carousel";
import Voucher from "../fragments/voucher";
import { Skeleton } from "../ui/skeleton";

const HeroDealTemplate = ({ banners }) => {
  return (
    <div>
      {banners?.data?.length ? (
        <BannerCarousel banners={banners.data} />
      ) : (
        <Skeleton className="lg:h-[25rem] md:h-[18rem] h-[15rem] bg-slate-400 w-full max-w-7xl max-h-[26rem]" />
      )}
      <Voucher
        icon={<Rocket className="w-9 h-9" />}
        text="Dapatkan voucher eksklusif dan kursus terbaik sesuai minatmu. Daftar sekarang!"
        buttonText="Daftar"
      />
    </div>
  );
};

export default HeroDealTemplate;
