"use client";

import Image from "next/image";
import { useState } from "react";

const DisplayLink = ({data, setArticle}:DisplayLinkProps) => {
  const [copied, setCopied] = useState <string>("");

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div onClick={() => setArticle(data)} className="link_card">
      <div className="copy_btn" onClick={() => handleCopy(data.url)}>
        <Image
          src={copied === data.url ? "/assets/tick.svg" : "/assets/copy.svg"}
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