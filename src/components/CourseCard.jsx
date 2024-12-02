"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import StarRating from "./ui/star-rating";

function formatCurrency(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(value)
    .replace("Rp", "RP");
}
export default function CourseCard({ course, onClickChange }) {
  console.log(course?.reviews?.rating);
  // console.log(course.partner.partnerLogo.thumbnail);
  return (
    <Card className="flex flex-col justify-between w-full max-w-md cursor-pointer">
      <div className="h-48" onClick={() => onClickChange(course.courseId)}>
        {course.thumbnails?.[0]?.url && (
          <div className="relative">
            <img
              src={course.thumbnails[0].url}
              alt={`Thumbnail for ${course.courseName}`}
              className="w-full h-48 object-cover rounded-t-xl "
            />

            <div className="flex gap-2 absolute top-2 left-2">
              {course?.isSupportPrakerja > 0 ? (
                <Badge
                  className={
                    " bg-secondary hover:bg-success rounded px-2 py-1 text-sm"
                  }
                >
                  Prakerja
                </Badge>
              ) : null}
              {course?.isBnspSupport > 0 ? (
                <Badge
                  className={
                    " bg-success hover:bg-secondary rounded px-2 py-1 text-sm"
                  }
                >
                  BNSP
                </Badge>
              ) : null}
            </div>
          </div>
        )}
      </div>
      <CardContent>
        <CardTitle className="text-lg font-semibold">
          {course.courseName}
        </CardTitle>
        <div className="flex gap-2 w-full pt-2">
          <div className="relative">
            <img
              className="rounded-full object-cover w-5"
              src={course.partner.partnerLogo.thumbnail}
              alt=""
            />
          </div>
          <span className="text-slate-600 text-sm ">
            {course.partner.partnerName}
          </span>
        </div>
        {course?.reviews?.rating > 0 ? (
          <StarRating
            rating={course?.reviews?.rating}
            total={course.reviews.total}
          />
        ) : null}

        {/* diskon */}
      </CardContent>
      <CardFooter>
        <div className="text-lg font-bold text-primary">
          {formatCurrency(course.priceCrossedOut)}
        </div>
      </CardFooter>
    </Card>
  );
}
