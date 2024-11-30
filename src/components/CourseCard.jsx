"use client";

export default function CourseCard({ course, thumbnails, onClickChange }) {
  return (
    <div
      onClick={() => onClickChange(course.courseId)}
      className="border  p-4 rounded-lg shadow-sm h-96 cursor-pointer"
    >
      {course.thumbnails?.[0]?.url && (
        <img
          src={course.thumbnails[0].url}
          alt={`Thumbnail for ${course.courseName}`}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h3 className="text-lg font-bold">{course.courseName}</h3>
      <p className="text-sm text-gray-600">{course.priceCrossedOut} IDR</p>
    </div>
  );
}
