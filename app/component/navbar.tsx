import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import React from "react";
import ButtonBlack from "./buttons/button-black";

export default function MobileNavbar() {
  return (
    <Navbar className="sticky top-0 z-50 dark:bg-white" fluid rounded>
      <NavbarBrand href="/">
        <Image
          src="/logo/logo-black.svg"
          className="mr-3 h-6 sm:h-9"
          alt="DaFit Logo"
          width={50}
          height={50}
        />
      </NavbarBrand>
      <div className="flex md:order-2">
        <ButtonBlack text={"Login"} route={"/"} />
        <NavbarToggle className="ml-2 focus:bg-transparent focus:ring-gray-700" />
      </div>
      <NavbarCollapse>
        <NavbarLink className="md:hover:text-primary" href="/">
          Home
        </NavbarLink>
        <NavbarLink className="md:hover:text-primary" href="/">
          About
        </NavbarLink>
        <NavbarLink className="md:hover:text-primary" href="/">
          Services
        </NavbarLink>
        <NavbarLink className="md:hover:text-primary" href="/">
          Pricing
        </NavbarLink>
        <NavbarLink className="md:hover:text-primary" href="/">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
