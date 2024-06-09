"use client";

import Image from "next/image";

const DisplayLink = ({data, setArticle}:DisplayLinkProps) => {
  return (
    <div
      onClick={() => setArticle(data)}
      className="link_card"
    >
      <div className="copy_btn">
        <Image src='assets/copy.svg' alt="copy_icon" width={12} height={12} />
      </div>
      <p className="flex-1 font-satoshi-medium text-blue-700 text-sm truncate">
        {data.url}
      </p>
    </div>
  );
}

export default DisplayLink