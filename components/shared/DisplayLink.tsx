"use client";

import Image from "next/image";
import { useState } from "react";
import copy from '@/assets/copy.svg'
import tick from '@/assets/tick.svg'

const DisplayLink = ({data, setArticle}:DisplayLinkProps) => {
  const [copied, setCopied] = useState <string | Boolean>("");

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div onClick={() => setArticle(data)} className="link_card">
      <div className="copy_btn">
        <Image
          src={copied === data.url ? tick : copy}
          alt={copied === data.url ? "tick_icon" : "copy_icon"}
          width={12}
          height={12}
        />
      </div>
      <p className="flex-1 font-satoshi-medium text-blue-700 text-sm truncate">
        {data.url}
      </p>
    </div>
  );
}

export default DisplayLink