import Image from "next/image";
import Link from "next/link";

interface PopularArticleProps {
  id: string;
  title: string;
  cover: string;
  section: string;
  className?: string;
}

export default function PopularArticle({
  id,
  title,
  cover,
  section,
  className = "",
}: PopularArticleProps) {
  return (
    <Link
      href={`/${title}`}
      className={`w-full group flex items-center py-4 max-sm:px-0 max-lg:px-2 space-x-4 border-b border-black/20 ${className}`}
    >
      <div className="flex-1">
        <p className="font-medium mb-2">{title}</p>
        <span className="section text-sm">{section}</span>
      </div>
      <div className="relative w-24 h-24 overflow-hidden">
        <Image
          alt={title}
          src={cover}
          height={96}
          width={96}
          className="group-hover:scale-105 transition-transform object-cover object-top"
        />
      </div>
    </Link>
  );
}
