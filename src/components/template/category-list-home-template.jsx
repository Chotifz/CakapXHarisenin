import CategoriesList from "@/components/fragments/categories-list";
import SectionTemplate from "./section-template";

export default function CategoryListHomeTemplate({
  categoriesData,
  title,
  description,
}) {
  return (
    <SectionTemplate title={title} description={description}>
      <CategoriesList items={categoriesData.data} />
    </SectionTemplate>
  );
}
