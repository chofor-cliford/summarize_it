"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { CornerDownLeft } from "lucide-react";


const CustomForm = () => {
  return (
    <form
      className="relative flex justify-center items-center"
      onSubmit={() => {
        ("");
      }}
    >
      <Image
        src="/assets/link.svg"
        alt="link_icon"
        width={10}
        height={10}
        className="absolute left-0 my-2 ml-3 w-5"
      />
      <input
        type="url"
        placeholder="Enter a URL"
        onChange={() => {}}
        required
        className="url_input peer"
      />

      <button
        type="submit"
        className="submit_btn peer-focus:border-green-700 peer-focus:text-green-700"
      >
        <CornerDownLeft
        color="gray"
        className="peer-focus:text-green-700 peer-focus:border-green-700 !important"
          size={10}
        />
      </button>
    </form>
  );
}

export default CustomForm