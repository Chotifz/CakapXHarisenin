import { fetchHighlightedCourses } from "@/utils/api";

export default function withHighlightedCourses(Component) {
  return async function WrappedComponent(props) {
    const courses = await fetchHighlightedCourses();

    return (
      <Component
        title={"Kursus Apa Yang Ingin Kamu Pelajari?"}
        description={"Belajar tanpa batas waktu & bersertifikat!"}
        courses={courses}
      />
    );
  };
}
