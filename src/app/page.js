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
  fetchJobList,
} from "@/lib/api";
import PartnerListHomeTemplate from "@/components/template/partner-list-home-template";
import LiveBahasa from "@/components/template/live-bahasa";
import PrakerjaTitle from "@/components/ui/prakerja-title";
import CategoryListHomeTemplate from "@/components/template/category-list-home-template";
import PrakerjaVoucher from "@/components/ui/prakerja-voucher";
import JobTemplate from "@/components/template/job";
async function HomePage() {
  const banners = await fetchBanners();
  const courseHighlight = await fetchHighlightedCourses();
  const bestSellerCourses = await fetchCourses({
    page: 1,
    limit: 15,
    filters: {
      courseOrderBy: "BEST_SELLER",
    },
  });
  const prakerjaCourses = await fetchCourses({
    page: 1,
    limit: 15,
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

  const jobs = await fetchJobList();

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
        categoriesData={categoriesData?.data}
      />

      <CourseTemplate
        title={"Kursus Terlaris"}
        description={""}
        courses={bestSellerCourses?.data?.course}
        filterType={"BEST_SELLER"}
      />
      <LiveBahasa />
      <JobTemplate jobs={jobs} />
      <div className="bg-gradient-to-t from-teal-600 to-gray-100">
        <CourseTemplate
          title={<PrakerjaTitle />}
          description={"Ikut pelatihan Prakerja terbaik di Cakap"}
          courses={prakerjaCourses?.data?.course}
          filterType={"PRAKERJA"}
        />
        <PrakerjaVoucher />
      </div>

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
