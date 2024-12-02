import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  BriefcaseBusiness,
  CircleUserRound,
  LibraryBig,
  LogOut,
  Menu,
  Search,
  Store,
  UserCog,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

function MenuItems() {
  return (
    <div className="flex h-9 w-full  justify-start items-center">
      <Input
        type="text"
        placeholder="Cari Kursus"
        className="rounded-l-xl w-full border-secondary"
      />
      <div className="rounded-r-xl h-full px-2 content-center border border-secondary">
        {" "}
        <Search className="w-5 text-primary " />
      </div>
    </div>
  );
}

function HeaderLeftContent() {
  return (
    <div className="flex md:items-center md:flex-row flex-col gap-4">
      <Sheet>
        <Button className="bg-primary rounded-xl">
          <Store />
          <span>Beli</span>
        </Button>
        <Button variant="ghost">
          <LibraryBig />
          <span>Kursus Saya</span>
        </Button>
        <Button size="icon" variant="ghost">
          <BriefcaseBusiness />
          <span>Karier</span>
        </Button>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <CircleUserRound />
            <span>Profil</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>Logged in as Rifz</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
          // onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background ">
      <div className="flex  gap-4 h-16 items-center justify-between px-4 md:px-4 max-w-7xl mx-auto">
        <Link href="/">
          <img
            className=" max-w-28 w-28"
            src="https://s3-ap-southeast-1.amazonaws.com/resources.squline.com/upskill/assets/svg/cakap-logo.svg"
            alt="Cakap Logo"
          />
        </Link>
        <div className="flex h-9 w-full  justify-start items-center md:hidden">
          <Input
            type="text"
            placeholder="Cari Kursus"
            className="rounded-l-xl w-full border-secondary"
          />
          <div className="rounded-r-xl h-full px-2 content-center border border-secondary">
            {" "}
            <Search className="w-5 text-primary " />
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden w-14" variant="outline" size="icon">
              <Menu />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs md:hidden">
            {/* <MenuItems /> */}
            <HeaderLeftContent />
          </SheetContent>
        </Sheet>

        <div className="hidden w-full max-w-xl md:block">{<MenuItems />}</div>

        <div className="hidden md:block">
          <HeaderLeftContent />
        </div>
      </div>
    </header>
  );
};
export default Header;
