"use client";
import Image from "next/image";
import searchIcon from "../../assets/icons/search.svg";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface ExpandableSearchProps {}

export default function ExpandableSearch({}: ExpandableSearchProps) {
  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleExpand();
    }
  };

  const handleExpand = () => {
    if (isExpanded && query) {
      router.push(`/search/${query}`);
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        className={`h-6 border-b border-black/20 focus:outline-none transition-all duration-300 ${
          isExpanded
            ? "w-52 opacity-100 translate-x-0"
            : "w-0 opacity-0 translate-x-full"
        }`}
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus={isExpanded}
      />
      <button className="relative h-6 w-6" onClick={handleExpand}>
        <Image alt="Search" src={searchIcon} fill />
      </button>
    </div>
  );
}
