/* eslint-disable no-unused-vars */

declare type ParamsProps = {
  articleUrl: string;
};

declare type SummaryData = {
  summary: string | undefined;
};

declare type InitialStateProps = {
  data: SummaryData;
  error: any;
  isFetching: boolean;
}

declare type ArticleProps = {
  summary: string;
  url: string;
};

declare type DisplayLinkProps = {
  data: ArticleProps;
  setArticle: React.Dispatch<React.SetStateAction<ArticleProps>>;
}

declare type DisplaySummaryProps = {
  summary: string;
}