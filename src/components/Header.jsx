import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet } from "./ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background ">
      <div className="flex h-16 items-center justify-between px-4 md:px-4 max-w-7xl mx-auto">
        <Link href="/">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/resources.squline.com/upskill/assets/svg/cakap-logo.svg"
            alt="Cakap Logo"
          />
        </Link>
        <Sheet>
          <Button></Button>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
