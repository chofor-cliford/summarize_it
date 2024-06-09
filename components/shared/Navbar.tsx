"use client";

import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={112}
        height={112}
        className="object-contain cursor-pointer w-auto h-auto"
      />

      <Button
        type="button"
        onClick={() => window.open("https://github.com/chofor-cliford/horizon")}
        className="black_btn"
      >
        GitHub
      </Button>
    </nav>
  );
};

export default Navbar;
