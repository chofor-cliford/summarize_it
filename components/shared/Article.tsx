"use client";

import Image from "next/image";
import { CornerDownLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSummary } from "@/lib/actions/article.actions";
import { isValidUrl } from "@/lib/utils";
import DisplayLink from "./DisplayLink";
import DisplaySummary from "./DisplaySummary";

const Article = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState<ArticleProps[]>([]);

  const dispatch = useDispatch<any>();
  const data = useSelector((state: InitialStateProps) => state.data);

  const isFetching = useSelector(
    (state: InitialStateProps) => state.isFetching
  );
  const error = useSelector((state: InitialStateProps) => state.error);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, [article.summary]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidUrl(article.url)) {
      dispatch(getSummary(article.url));
    }

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
      console.log("article", allArticles);
      setArticle({...article, url: ""})
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <div className="flex flex-col w-full gap-2">
      <form
        className="relative flex justify-center items-center"
        onSubmit={handleSubmit}
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
          value={article.url}
          onChange={(e) => setArticle({ ...article, url: e.target.value })}
          onKeyDown={handleKeyDown}
          required
          className="url_input peer"
        />

        <button
          type="submit"
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
        >
          <CornerDownLeft size={10} />
        </button>
      </form>

      <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
        {allArticles.map((article, index) => (
          <DisplayLink
            key={`link-${index}`}
            data={article}
            setArticle={setArticle}
          />
        ))}
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <Image
            src="/assets/loader.svg"
            alt="loader"
            width={80}
            height={80}
            className="object-contain cursor-pointer"
          />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Well, that wasn&apos;t supposed to happen. Please try again.
            <span className="font-satoshi-regular text-gray-700">{error}</span>
          </p>
        ) : (
          allArticles[0]?.summary && (
            <DisplaySummary summary={allArticles[0]?.summary} />
          )
        )}
      </div>
    </div>
  );
};

export default Article;
