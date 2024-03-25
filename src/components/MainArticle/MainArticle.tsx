import Image from "next/image";
import Link from "next/link";
import searchIcon from "../../assets/icons/search.svg";

interface MainArticleProps {
  id: string;
  title: string;
  description: string;
  cover: string;
  section: string;
  className?: string;
}

export default function MainArticle({
  id,
  title,
  description,
  cover,
  section,
  className,
}: MainArticleProps) {
  return (
    <Link href={`/${title}`} className={`group w-full ${className}`}>
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          alt={title}
          src={cover}
          fill
          className="group-hover:scale-105 transition-transform object-cover object-top"
        />
      </div>
      <div className="py-4">
        <span className="section text-sm">{section}</span>
        <h6 className="text-2xl font-bold truncate line-clamp-2 overflow-hidden text-wrap">
          {title}
        </h6>
        <p className="mt-2 truncate line-clamp-2 overflow-hidden text-wrap">
          {description}
        </p>
      </div>
    </Link>
  );
}
