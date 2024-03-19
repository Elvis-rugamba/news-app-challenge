export interface Article {
  section: ArticleSection;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  multimedia: ArticleMultimedia[];
  media: any;
  short_url: string;
}

export enum ArticleSection {
  ARTS = "arts",
  AUTOMOBILES = "automobiles",
  BOOKS_REVIEWS = "books/review",
  BUSINESS = "business",
  FASHION = "fashion",
  FOOD = "food",
  HEALTH = "health",
  HOME = "home",
  INSIDER = "insider",
  MAGAZINE = "magazine",
  MOVIES = "movies",
  NY_REGION = "nyregion",
  OBITUARIES = "obituaries",
  OPINION = "opinion",
  POLITICS = "politics",
  REAL_ESTATE = "realestate",
  SCIENCE = "science",
  SPORTS = "sports",
  SUNDAY_REVIEW = "sundayreview",
  TECHNOLOGY = "technology",
  THEATER = "theater",
  T_MAGAZINE = "t-magazine",
  TRAVEL = "travel",
  UPSHOT = "upshot",
  US = "us",
  WORLD = "world",
}

export interface ArticleMultimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}
