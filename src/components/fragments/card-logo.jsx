import Link from "next/link";
import Tooltip from "../ui/tooltip";

export default function CardLogo({
  imgUrl,
  imgName,
  tooltip,
  category,
  classname,
  id,
  hrefName,
}) {
  let linkHref = "#";

  if (tooltip === true) {
    linkHref = `/partner/${hrefName}?id=${id}`;
  } else if (category === true) {
    linkHref = `/daftar-kursus/${hrefName}?id=${id}`;
  }

  return (
    <Link href={linkHref}>
      <div className="flex justify-center items-center flex-col">
        <div
          className={`relative flex justify-center group border ${classname} cursor-pointer`}
        >
          <img
            src={imgUrl}
            alt={imgName}
            className={`md:p-4 p-3  h-full rounded-full w-full`}
          />
          {tooltip && <Tooltip>{imgName}</Tooltip>}
        </div>
        {category && (
          <p className=" text-xs md:text-sm text-center mt-2">{imgName}</p>
        )}
      </div>
    </Link>
  );
}
