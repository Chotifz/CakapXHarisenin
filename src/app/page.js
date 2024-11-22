import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchBannerData, fetchCoursesData } from "@/lib/api";
import Link from "next/link";

const HomePage = async () => {
  const bannerData = await fetchBannerData();
  const courseData = await fetchCoursesData();
  console.log(courseData.data);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
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

      {/* Courses Section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {courseData.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
            <p className="text-sm text-gray-500">{course.description}</p>
          </div> */}
      {/* ))}
      </div> */}
    </div>
  );
};

export default HomePage;
