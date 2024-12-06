"use client";

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

export function InputContent() {
  return (
    <div className="flex h-9 w-full  justify-start items-center border border-secondary rounded-xl overflow-hidden relative">
      <Input
        type="text"
        placeholder="Cari Kursus"
        className="flex-grow px-3 py-2 rounded-l-xl focus:outline-none"
      />
      <Button
        variant="ghost"
        className="flex items-center justify-center   text-primary hover:cursor-pointer absolute right-0"
        aria-label="Search"
      >
        <Search className="w-5" />
      </Button>
    </div>
  );
}

export function MenuItems() {
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
