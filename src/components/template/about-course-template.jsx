import AboutCourse from "../fragments/detail-course/about-course";
import PriceCourse from "../fragments/detail-course/price-course";

const AboutCourseTemplate = async ({ params }) => {
  const { id } = await params;
  if (!id) {
    return <p>ID course tidak ditemukan</p>;
  }

  return (
    <section className="flex">
      <AboutCourse params={params} />
      <PriceCourse params={params} />
    </section>
  );
};

export default AboutCourseTemplate;
