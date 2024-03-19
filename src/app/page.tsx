import MainArticle from "@/components/MainArticle";
import Article from "@/components/Article";
import PopularArticle from "@/components/PopularArticle";
import { Article as TArticle } from "@/types/article.type";
import { getData } from "@/services/api";

export default async function Home() {
  const topStories = await getData<{ results: TArticle[] }>(
    "/topstories/v2/home.json"
  );
  const mostPopular = await getData<{ results: TArticle[] }>(
    "/mostpopular/v2/viewed/1.json"
  );

  return (
    <>
      <section className="container mx-auto mt-6 px-24 w-full flex space-x-6">
        <MainArticle
          id={
            topStories?.results?.[0]?.uri?.split("/")[
              topStories?.results?.[0]?.uri?.split("/").length - 1
            ]
          }
          title={topStories?.results?.[0].title}
          description={topStories?.results?.[0].abstract}
          section={topStories?.results?.[0].section}
          cover={topStories?.results?.[0].multimedia?.[0].url}
        />
        <div className="top-stories w-5/12">
          {topStories?.results?.slice(1, 5).map((article) => (
            <PopularArticle
              id={article?.uri?.split("/")[article.uri?.split("/").length - 1]}
              key={article.uri}
              title={article.title}
              section={article.section}
              cover={article.multimedia?.[0].url}
            />
          ))}
        </div>
      </section>
      <section className="container mt-6 px-24 mx-auto flex flex-wrap w-full justify-between">
        {mostPopular?.results?.map((article) => (
          <Article
            id={article?.uri?.split("/")[article.uri?.split("/").length - 1]}
            key={article.uri}
            title={article.title}
            description={article.abstract}
            section={article.section}
            cover={article.media?.[0]?.["media-metadata"]?.[0]?.url}
          />
        ))}
      </section>
    </>
  );
}
