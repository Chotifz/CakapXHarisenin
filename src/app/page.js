import { fetchBannerData } from "@/lib/api";

import { nunito, poppins } from "@/font";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const HomePage = async () => {
  const bannerData = await fetchBannerData();
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      {/* BannerSection   */}
      {bannerData?.data?.length ? (
        <Carousel className="w-full max-w-7xl max-h-[26rem] ">
          <CarouselContent>
            {bannerData.data.map((banner, index) => (
              <CarouselItem key={index}>
                <Link
                  href={banner.redirectUrl}
                  className="relative w-full h-full items-center bg-black"
                >
                  <img
                    src={banner.urlBanner}
                    alt={banner.altTag}
                    className="md:h-[26rem] w-full rounded-lg"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <div className="">
          <Skeleton className="lg:h-[25rem] md:h-[18rem] h-[15rem] rounded-xl bg-slate-400 w-full max-w-7xl max-h-[26rem]" />
        </div>
      )}

      <div className="h-[30vh] ">
        <h1 className={`${poppins.className} `}>
          <img
            alt="performance-icon"
            src="https://s3.ap-southeast-1.amazonaws.com/resources.squline.com/upskill/assets/icons/blue-rocket.png"
          />
          Cakap Upskill
        </h1>
        <div></div>

        <p className={`${nunito.className}  text-gray-600 text-lg`}>
          Kuasai keterampilan baru dengan kursus yang dirancang khusus!
        </p>
      </div>
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
