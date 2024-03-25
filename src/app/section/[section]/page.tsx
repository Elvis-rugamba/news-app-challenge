import Article from "@/components/Article";
import { Article as TArticle } from "@/types/article.type";

async function getData<T>(url: string, filter: string): Promise<T> {
  const res = await fetch(
    `${process.env.BASE_URL}/${url}?api-key=${process.env.API_KEY}&fq=${filter}`
  );

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { section: string };
}) {
  const articles = await getData<{ response: { docs: any[] } }>(
    "search/v2/articlesearch.json",
    `section_name:${params.section}`
  );

  return (
    <section className="container mt-6 px-24 max-sm:px-4 mx-auto flex flex-wrap justify-between">
      {articles?.response?.docs?.map((article) => (
        <Article
          id={article?.uri?.split("/")[article.uri?.split("/").length - 1]}
          key={article.uri}
          title={article?.headline?.main}
          description={article?.lead_paragraph}
          section={params.section}
          cover={`https://static01.nyt.com/${article.multimedia?.[0]?.url}`}
          className="max-sm:w-full max-lg:w-6/12"
        />
      ))}
    </section>
  );
}
