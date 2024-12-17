import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navigation = ({
  handleBack,
  handleNext,
  href,
  coursesLength,
  currentIndex,
  hiddenNav,
  hiddenLink,
  cardsPerView,
}) => {
  return (
    <div className="w-full flex gap-2 justify-end items-center mb-4">
      {hiddenLink ? (
        ""
      ) : (
        <Link
          className="text-primary font-bold px-2 cursor-pointer"
          href={href || "#"}
        >
          <span>Lihat Semua</span>
        </Link>
      )}

      {hiddenNav ? (
        ""
      ) : (
        <>
          <Button
            size="icon"
            variant="outline"
            onClick={handleBack}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 text-primary" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={handleNext}
            disabled={currentIndex + cardsPerView >= coursesLength}
          >
            <ChevronRight className="w-4 h-4 text-primary" />
          </Button>
        </>
      )}
    </div>
  );
};

export default Navigation;
