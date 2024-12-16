import CategoriesList from "@/components/fragments/categories-list";
import SectionTemplate from "./section-template";
import Voucher from "../fragments/voucher";

export default function CategoryListHomeTemplate({
  categoriesData,
  title,
  description,
}) {
  return (
    <SectionTemplate title={title} description={description}>
      <CategoriesList items={categoriesData.data} />
      <Voucher
        icon=""
        text="Punya kode belajar? Tukar kode belajarmu di sini"
        buttonText="Tukar Code"
      />
    </SectionTemplate>
  );
}
