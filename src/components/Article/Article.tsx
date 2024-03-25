import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  id: string;
  title: string;
  description: string;
  cover: string;
  section: string;
  className?: string;
}

export default function Article({
  id,
  title,
  description,
  cover,
  section,
  className,
}: ArticleProps) {
  return (
    <Link href={`/${title}`} className={`group w-3/12 p-2 ${className}`}>
      <div className="relative w-full h-36 overflow-hidden">
        <Image
          alt="cover"
          src={cover}
          fill
          className="group-hover:scale-105 transition-transform object-cover object-top"
        />
      </div>
      <div className="py-4">
        <span className="section text-sm capitalize">{section}</span>
        <h6 className="text-lg font-bold truncate line-clamp-2 overflow-hidden text-wrap">
          {title}
        </h6>
        <p className="mt-2 truncate line-clamp-2 overflow-hidden text-wrap">
          {description}
        </p>
      </div>
    </Link>
  );
}
