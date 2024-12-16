import CardLogo from "./card-logo";
export default function CategoriesList({ items, classname }) {
  return (
    <div className={`flex flex-wrap gap-6 pt-6 ${classname}`}>
      {items.map((item) => (
        <div key={item.categoriesId}>
          <CardLogo
            imgName={item.categoryName}
            imgUrl={item.icon}
            classname={"rounded-full w-16 h-16"}
            category={true}
            id={item.categoriesId}
            hrefName={item.categoryName}
          />
        </div>
      ))}
    </div>
  );
}
