import Article from "@/components/Article";

async function getData<T>(url: string, query: string): Promise<T> {
  const res = await fetch(
    `${process.env.BASE_URL}/${url}?api-key=${process.env.API_KEY}&q=${query}`
  );

  return res.json();
}

export default async function Page({ params }: { params: { query: string } }) {
  const articles = await getData<{ response: { docs: any[] } }>(
    "search/v2/articlesearch.json",
    params.query
  );

  return (
    <section className="container mt-6 px-24 mx-auto flex flex-wrap w-full">
      {articles?.response?.docs?.map((article) => (
        <Article
          id={article?.uri?.split("/")[article.uri?.split("/").length - 1]}
          key={article?.uri}
          title={article?.headline?.main}
          description={article?.lead_paragraph}
          section={article?.section_name}
          cover={`https://static01.nyt.com/${article.multimedia?.[0]?.url}`}
        />
      ))}
    </section>
  );
}
