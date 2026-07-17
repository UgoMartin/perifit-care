export type HelpCenterArticleContent = {
  title: string;
  description: string;
  body: string;
  author_id: number;
  state: string;
  created_at: number;
  updated_at: number;
  url: string;
  type: string;
};

export type HelpCenterArticleTag = {
  type: string;
  id: string;
  name: string;
  applied_at: number;
  applied_by: {
    type: string;
    id: string;
  };
};

export type HelpCenterArticle = {
  id: string;
  type: string;
  workspace_id: string;
  parent_id: number | null;
  parent_type: string | null;
  parent_ids: number[];
  default_locale: string;
  translated_content: {
    type: string;
    [locale: string]: HelpCenterArticleContent | string | undefined;
  };
  tags: {
    type: string;
    tags: HelpCenterArticleTag[];
  };
  title: string;
  description: string;
  body: string;
  author_id: number;
  state: string;
  created_at: number;
  updated_at: number;
  url: string;
};

export type HelpCenterArticles = {
  articles: HelpCenterArticle[];
  highlights: unknown[];
};

export type HelpCenterArticlesResponse = {
  data: HelpCenterArticles;
  pages: {
    page: number;
    per_page: number;
    total_pages: number;
    type: string;
  };
  total_count: number;
  type: string;
};

export type HelpCenterArticlesQueryParams = {
  perPage?: number;
  page?: number;
};

export type HelpCenterCollectionContent = {
  type: string;
  name: string;
  description: string;
};

export type HelpCenterCollection = {
  id: string;
  workspace_id: string;
  name: string;
  default_locale: string;
  url: string;
  order: number;
  created_at: number;
  updated_at: number;
  translated_content: {
    type: string;
    [locale: string]: HelpCenterCollectionContent | string | undefined;
  };
  description: string;
  icon: string;
  parent_id: string | null;
  help_center_id: number;
};

export type HelpCenterCollectionNode = HelpCenterCollection & {
  children: HelpCenterCollectionNode[];
};

export type HelpCenterCollectionsPages = {
  type: string;
  page: number;
  per_page: number;
  total_pages: number;
};

export type HelpCenterCollectionsResponse = {
  type: string;
  data: HelpCenterCollection[];
  total_count: number;
  pages: HelpCenterCollectionsPages;
};
