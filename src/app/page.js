import { nunito, poppins } from "@/font";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import BannerCarousel from "@/components/BannerCarousel";
import { fetchBanners } from "./action";
import VoucherCard from "@/components/VoucherCard";

const HomePage = async () => {
  const banners = await fetchBanners();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 ">
      {banners.data?.length ? (
        <BannerCarousel banners={banners.data} />
      ) : (
        <Skeleton className="lg:h-[25rem] md:h-[18rem] h-[15rem] rounded-xl bg-slate-400 w-full max-w-7xl max-h-[26rem]" />
      )}
      <VoucherCard />

      {/* CourseSection  */}
      {/* CategorySection  */}
      {/* BestSellingCourseSection  */}
      {/* CakapClubSection */}
      {/* JobSection  */}
      {/* CakapXPrakerjaSection  */}
      {/* PartnersSection  */}
      {/* FaqSection  */}
    </div>
  );
};

export default HomePage;
