import { formatCurrency } from "@/config";
import StarRating from "../ui/star-rating";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

function CourseCard({ course }) {
  const router = useRouter();

  const handleCourseClick = (id) => {
    router.push(`/courses/${id}`);
  };

  return (
    <Card
      className="flex flex-col justify-between w-full max-w-md cursor-pointer"
      onClick={() => handleCourseClick(course.courseId)}
    >
      <div className="relative h-44">
        <img
          src={course?.icon?.thumbnail}
          alt={`Thumbnail for ${course.courseName}`}
          className="w-full h-44 rounded-t-xl"
        />
        <div className="flex gap-2 absolute top-2 left-2">
          {course?.isSupportPrakerja && <Badge>Prakerja</Badge>}
          {course?.isBnspSupport && <Badge variant={"secondary"}>BNSP</Badge>}
        </div>
      </div>
      <CardContent className="md:h-32 h-28">
        <CardTitle className="text-base font-semibold mt-1 line-clamp-2 overflow-hidden text-ellipsis">
          {course.courseName}
        </CardTitle>
        <div className="flex gap-1 w-full pt-1 items-center">
          <img
            className="rounded-full object-cover w-5"
            src={course?.partner?.partnerLogo?.thumbnail}
            alt={`${course.partner.partnerName} logo`}
          />
          <span className="text-slate-600 text-sm">
            {course.partner.partnerName}
          </span>
        </div>
        {course?.reviews?.rating && (
          <StarRating
            rating={course.reviews.rating}
            total={course.reviews.total}
          />
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        {course.basicPrice > 0 && (
          <div className="flex gap-2 text-sm font-semibold">
            <span className="line-through text-slate-500">
              {formatCurrency(course.basicPrice)}
            </span>
            {course.label && (
              <span className="text-red-500 bg-red-100 px-1">
                {course.label}
              </span>
            )}
          </div>
        )}
        <div className="text-base font-bold text-primary">
          {course.finalPrice > 0 ? formatCurrency(course.finalPrice) : "Gratis"}
        </div>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
