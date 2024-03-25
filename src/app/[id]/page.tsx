import Image from "next/image";
import searchIcon from "../../assets/icons/search.svg";

async function getData<T>(url: string, query: string): Promise<T> {
  const res = await fetch(
    `${process.env.BASE_URL}/${url}?api-key=${process.env.API_KEY}&q=${query}`
  );

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const articles = await getData<{ response: { docs: any[] } }>(
    "search/v2/articlesearch.json",
    params.id
  );

  const article = articles?.response?.docs?.[0];
  console.log({ article });

  return (
    <div className="container flex flex-col items-center w-1/2 max-sm:w-full max-lg:w-full mx-auto mt-6 max-sm:px-4 max-lg:px-24">
      {article ? (
        <>
          <div className="relative w-full h-[500px] max-sm:h-96 overflow-hidden">
            <Image
              alt="Cover"
              src={`https://static01.nyt.com/${article.multimedia?.[0]?.url}`}
              fill
              className="group-hover:scale-125 transition-transform object-cover"
            />
          </div>
          <div className="py-4">
            <span className="section text-sm">{article?.section_name}</span>
            <h6 className="text-4xl font-bold ">{article?.headline?.main}</h6>
            <p className="mt-2 ">{article?.lead_paragraph}</p>
          </div>
        </>
      ) : (
        <p className="text-4xl text-black/40">Article Not Found</p>
      )}
    </div>
  );
}
