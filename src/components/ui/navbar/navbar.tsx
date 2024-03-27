"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  const navActions = (): void => {
    setOpened(!opened);
  };

  return (
    <div className="bg-zinc-900 p-7 text-xl sticky top-0 z-50">
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
            icon={faEllipsisVertical}
            size="lg"
            style={{ color: "#ffffff" }}
            onClick={() => navActions()}
          />
        </div>

        <div
          className={`${
            opened
              ? "pt-5 pb-5 absolute left-0 right-0 z-50 bg-zinc-900 min-h-[10rem]"
              : "hidden"
          }`}
        >
          <div className="flex flex-col gap-7 pl-7">
            <Link className="hover:text-blue-500 hover:underline" href={"/"}>
              About
            </Link>
            <Link className="hover:text-blue-500 hover:underline" href={"/"}>
              Skills
            </Link>
            <Link className="hover:text-blue-500 hover:underline" href={"/"}>
              Experience
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
    </div>
  );
};

export default Navbar;
