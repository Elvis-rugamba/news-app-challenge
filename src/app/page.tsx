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
      <section className="container mx-auto mt-6 px-24 max-sm:px-4 flex max-sm:flex-wrap max-lg:flex-wrap space-x-6 max-sm:space-x-0 max-lg:space-x-0">
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
        <div className="w-5/12 max-sm:w-full max-lg:w-full flex flex-wrap">
          {topStories?.results?.slice(1, 5).map((article) => (
            <PopularArticle
              id={article?.uri?.split("/")[article.uri?.split("/").length - 1]}
              key={article.uri}
              title={article.title}
              section={article.section}
              cover={article.multimedia?.[0].url}
              className="max-sm:w-full max-lg:w-6/12"
            />
          ))}
        </div>
      </section>
      <section className="container mt-6 px-24 max-sm:px-4 mx-auto flex flex-wrap justify-between">
        {mostPopular?.results?.map((article) => (
          <Article
            id={article?.uri?.split("/")[article.uri?.split("/").length - 1]}
            key={article.uri}
            title={article.title}
            description={article.abstract}
            section={article.section}
            cover={article.media?.[0]?.["media-metadata"]?.[0]?.url}
            className="max-sm:w-full max-lg:w-6/12"
          />
        ))}
      </section>
    </>
  );
}
