import CourseTemplate from "@/components/template/course-template";
import FaqTemplate from "@/components/template/faq-template";
import HeroDealTemplate from "@/components/template/hero-deal-template";
import {
  fetchBanners,
  fetchCourses,
  fetchHighlightedCourses,
  fetchCategories,
  fetchPartnersList,
  fetchFaqList,
} from "@/lib/api";
import PartnerListHomeTemplate from "@/components/template/partner-list-home-template";
import LiveBahasa from "@/components/template/live-bahasa";
import PrakerjaTitle from "@/components/ui/prakerja-title";
import CategoryListHomeTemplate from "@/components/template/category-list-home-template";

async function HomePage() {
  const banners = await fetchBanners();
  const courseHighlight = await fetchHighlightedCourses();
  const bestSellerCourses = await fetchCourses({
    page: 1,
    limit: 20,
    filters: {
      courseOrderBy: "BEST_SELLER",
    },
  });
  const prakerjaCourses = await fetchCourses({
    page: 1,
    limit: 5,
    filters: {
      courseOrderBy: "HIGHLIGHT_PRAKERJA",
      isSupportPrakerja: true,
    },
  });
  const categoriesData = await fetchCategories();

  const partnerListData = await fetchPartnersList({
    partnerType: "",
    showAll: false,
    limit: 6,
  });

  const faqListData = await fetchFaqList({ tenant: "cakap" });

  return (
    <>
      <HeroDealTemplate banners={banners} />
      <CourseTemplate
        title={"Kursus Apa Yang Ingin Kamu Pelajari?"}
        description={"Belajar tanpa batas waktu & bersertifikat!"}
        courses={courseHighlight.data}
      />
      <CategoryListHomeTemplate
        title={"Kategori Kursus"}
        description={"Pilih kategori kursus yang kamu inginkan"}
        categoriesData={categoriesData}
      />

      <CourseTemplate
        title={"Kursus Terlaris"}
        description={""}
        courses={bestSellerCourses?.data?.course}
      />
      <LiveBahasa />

      <CourseTemplate
        title={<PrakerjaTitle />}
        description={"Ikut pelatihan Prakerja terbaik di Cakap"}
        hidden={true}
        courses={prakerjaCourses?.data?.course}
      />
      <PartnerListHomeTemplate data={partnerListData?.data?.partner} />
      <FaqTemplate
        title={"Yang Sering Ditanyakan"}
        description={"Ada kendala atau pertanyaan? Kami siap membantu!"}
        data={faqListData.data.home}
      />

    </>
  );
}

export default HomePage;
