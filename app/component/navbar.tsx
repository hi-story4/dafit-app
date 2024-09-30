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
        <li>
          <a
            href=""
            className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-accent "
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-accent "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-accent "
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-accent "
          >
            Contact
          </a>
        </li>
      </NavbarCollapse>
    </Navbar>
  );
}
