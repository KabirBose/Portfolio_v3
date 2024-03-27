"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const navActions = (): void => {
    setOpened(!opened);
  };

  return (
    <div className="bg-zinc-950 p-7 text-lg md:text-xl">
      <div className="hidden justify-center items-center gap-8 md:flex">
        <Link className="hover:text-blue-500" href={"/"}>
          About
        </Link>
        <Link className="hover:text-blue-500" href={"/"}>
          Skills
        </Link>
        <Link className="hover:text-blue-500" href={"/"}>
          Certifications
        </Link>
        <Link className="hover:text-blue-500" href={"/"}>
          Contact
        </Link>
      </div>

      <div className="md:hidden">
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            style={{ color: "#ffffff" }}
            onClick={() => navActions()}
          />
        </div>
        <div className={`${opened ? "mt-5 flex flex-col gap-5" : "hidden"}`}>
          <Link className="hover:text-blue-500 hover:underline" href={"/"}>
            About
          </Link>
          <Link className="hover:text-blue-500 hover:underline" href={"/"}>
            Skills
          </Link>
          <Link className="hover:text-blue-500 hover:underline" href={"/"}>
            Certifications
          </Link>
          <Link className="hover:text-blue-500 hover:underline" href={"/"}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
