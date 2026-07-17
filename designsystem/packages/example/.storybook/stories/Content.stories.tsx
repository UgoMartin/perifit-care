import type { Meta, StoryObj } from "@storybook/react";
import React, { useMemo, useState } from "react";
import { ImageSourcePropType, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Button,
  CategoryTab,
  CategoryTabBar,
  CategoryThumbnail,
  ContentArticle,
  ContentArticleBody,
  FeedbackResult,
  gap,
  HeroBanner,
  Images,
  PopularArticleThumbnail,
  spacing,
  UIConstants,
  useTheme,
} from "@perifit/app-design-system";
import type {
  HelpCenterArticle,
  HelpCenterArticlesResponse,
  HelpCenterCollection,
  HelpCenterCollectionsResponse,
} from "../../src/types/helpCenterTypes";

type FlowStep = "home" | "category" | "article";

const NOW = 1730000000;

const CONTENT_TAB_IMAGES: Record<string, ImageSourcePropType> = {
  yogaBanner: require("../../assets/contentTab/yoga.webp"),
  paywallBanner: require("../../assets/contentTab/paywall_banner.webp"),
  contentCategory1: require("../../assets/contentTab/category_1.webp"),
  fakePopularArticle1: require("../../assets/contentTab/fake_popular_article_1.webp"),
  fakePopularArticle2: require("../../assets/contentTab/fake_popular_article_2.webp"),
  fakeArticleThumbnail1: require("../../assets/contentTab/fake_article_thumbnail_1.webp"),
  fakeArticleThumbnail2: require("../../assets/contentTab/fake_article_thumbnail_2.webp"),
};

const CATEGORY_TABS: CategoryTab[] = [
  { id: "all", name: "All" },
  { id: "movement", name: "Movement" },
  { id: "mindset", name: "Mindset" },
];

const MOCK_COLLECTIONS_RESPONSE: HelpCenterCollectionsResponse = {
  type: "list",
  total_count: 4,
  pages: {
    type: "pages",
    page: 1,
    per_page: 20,
    total_pages: 1,
  },
  data: [
    {
      id: "101",
      workspace_id: "workspace_1",
      name: "Pelvic Floor Basics",
      default_locale: "en",
      url: "https://help.perifit.co/articles/pelvic-floor-basics",
      order: 1,
      created_at: NOW,
      updated_at: NOW,
      translated_content: {
        type: "translated_content",
        en: {
          type: "help_center_collection_content",
          name: "Pelvic Floor Basics",
          description: "Free",
        },
      },
      description: "free",
      icon: "book",
      parent_id: null,
      help_center_id: 1,
    },
    {
      id: "102",
      workspace_id: "workspace_1",
      name: "Postpartum Recovery",
      default_locale: "en",
      url: "https://help.perifit.co/articles/postpartum",
      order: 2,
      created_at: NOW,
      updated_at: NOW,
      translated_content: {
        type: "translated_content",
        en: {
          type: "help_center_collection_content",
          name: "Postpartum Recovery",
          description: "Premium",
        },
      },
      description: "premium",
      icon: "heart",
      parent_id: null,
      help_center_id: 1,
    },
    {
      id: "103",
      workspace_id: "workspace_1",
      name: "Breathing and Relaxation",
      default_locale: "en",
      url: "https://help.perifit.co/articles/breathing",
      order: 3,
      created_at: NOW,
      updated_at: NOW,
      translated_content: {
        type: "translated_content",
        en: {
          type: "help_center_collection_content",
          name: "Breathing and Relaxation",
          description: "Free",
        },
      },
      description: "free",
      icon: "wind",
      parent_id: null,
      help_center_id: 1,
    },
    {
      id: "104",
      workspace_id: "workspace_1",
      name: "Daily Habits",
      default_locale: "en",
      url: "https://help.perifit.co/articles/daily-habits",
      order: 4,
      created_at: NOW,
      updated_at: NOW,
      translated_content: {
        type: "translated_content",
        en: {
          type: "help_center_collection_content",
          name: "Daily Habits",
          description: "Premium",
        },
      },
      description: "premium",
      icon: "clock",
      parent_id: null,
      help_center_id: 1,
    },
  ],
};

const MOCK_ARTICLES_RESPONSE: HelpCenterArticlesResponse = {
  type: "list",
  total_count: 3,
  pages: {
    type: "pages",
    page: 1,
    per_page: 20,
    total_pages: 1,
  },
  data: {
    highlights: [],
    articles: [
      {
        id: "201",
        type: "article",
        workspace_id: "workspace_1",
        parent_id: 101,
        parent_type: "collection",
        parent_ids: [101],
        default_locale: "en",
        translated_content: {
          type: "translated_content",
          en: {
            type: "help_center_article_content",
            title: "How to engage your pelvic floor correctly",
            description: "Foundational movement guidance",
            body: "<h3>Start with awareness</h3><p>Lie down comfortably and place one hand on your belly.</p><p>Exhale gently and lift the pelvic floor muscles as if stopping the flow of urine.</p><p>Inhale and fully release the contraction before your next repetition.</p>",
            author_id: 12,
            state: "published",
            created_at: NOW,
            updated_at: NOW,
            url: "https://help.perifit.co/articles/201",
          },
        },
        tags: {
          type: "list",
          tags: [
            {
              type: "tag",
              id: "movement",
              name: "Movement",
              applied_at: NOW,
              applied_by: { type: "admin", id: "1" },
            },
          ],
        },
        title: "How to engage your pelvic floor correctly",
        description: "Foundational movement guidance",
        body: "<h3>Start with awareness</h3><p>Lie down comfortably and place one hand on your belly.</p><p>Exhale gently and lift the pelvic floor muscles as if stopping the flow of urine.</p><p>Inhale and fully release the contraction before your next repetition.</p>",
        author_id: 12,
        state: "published",
        created_at: NOW,
        updated_at: NOW,
        url: "https://help.perifit.co/articles/201",
      },
      {
        id: "202",
        type: "article",
        workspace_id: "workspace_1",
        parent_id: 101,
        parent_type: "collection",
        parent_ids: [101],
        default_locale: "en",
        translated_content: {
          type: "translated_content",
          en: {
            type: "help_center_article_content",
            title: "Why consistency matters more than intensity",
            description: "Mindset and adherence tips",
            body: "<h3>Small sessions, big results</h3><p>Consistency builds neuromuscular control over time.</p><p>A short practice every day is often more effective than one hard session each week.</p>",
            author_id: 14,
            state: "published",
            created_at: NOW,
            updated_at: NOW,
            url: "https://help.perifit.co/articles/202",
          },
        },
        tags: {
          type: "list",
          tags: [
            {
              type: "tag",
              id: "mindset",
              name: "Mindset",
              applied_at: NOW,
              applied_by: { type: "admin", id: "1" },
            },
          ],
        },
        title: "Why consistency matters more than intensity",
        description: "Mindset and adherence tips",
        body: "<h3>Small sessions, big results</h3><p>Consistency builds neuromuscular control over time.</p><p>A short practice every day is often more effective than one hard session each week.</p>",
        author_id: 14,
        state: "published",
        created_at: NOW,
        updated_at: NOW,
        url: "https://help.perifit.co/articles/202",
      },
      {
        id: "203",
        type: "article",
        workspace_id: "workspace_1",
        parent_id: 101,
        parent_type: "collection",
        parent_ids: [101],
        default_locale: "en",
        translated_content: {
          type: "translated_content",
          en: {
            type: "help_center_article_content",
            title: "Advanced coordination drills",
            description: "Premium progression program",
            body: "<h3>Level up your control</h3><p>This premium article covers progressive coordination drills for endurance and precision.</p><p>Use this plan when basic contractions feel easy and controlled.</p>",
            author_id: 20,
            state: "published",
            created_at: NOW,
            updated_at: NOW,
            url: "https://help.perifit.co/articles/203",
          },
        },
        tags: {
          type: "list",
          tags: [
            {
              type: "tag",
              id: "movement",
              name: "Movement",
              applied_at: NOW,
              applied_by: { type: "admin", id: "1" },
            },
            {
              type: "tag",
              id: "premium",
              name: "Premium",
              applied_at: NOW,
              applied_by: { type: "admin", id: "1" },
            },
          ],
        },
        title: "Advanced coordination drills",
        description: "Premium progression program",
        body: "<h3>Level up your control</h3><p>This premium article covers progressive coordination drills for endurance and precision.</p><p>Use this plan when basic contractions feel easy and controlled.</p>",
        author_id: 20,
        state: "published",
        created_at: NOW,
        updated_at: NOW,
        url: "https://help.perifit.co/articles/203",
      },
    ],
  },
};

const DEFAULT_CATEGORY_THUMBNAIL = CONTENT_TAB_IMAGES.contentCategory1;

const HARDCODED_CATEGORY_THUMBNAILS: Record<string, ImageSourcePropType> = {
  "101": CONTENT_TAB_IMAGES.contentCategory1,
  "102": CONTENT_TAB_IMAGES.fakePopularArticle1,
  "103": CONTENT_TAB_IMAGES.fakePopularArticle2,
  "104": CONTENT_TAB_IMAGES.contentCategory1,
};

const HARDCODED_ARTICLE_THUMBNAILS: Record<string, ImageSourcePropType> = {
  "201": CONTENT_TAB_IMAGES.fakePopularArticle1,
  "202": CONTENT_TAB_IMAGES.fakePopularArticle2,
  "203": CONTENT_TAB_IMAGES.fakeArticleThumbnail1,
};

const isPremiumCollection = (collection: HelpCenterCollection): boolean => {
  return collection.description.trim().toLowerCase() === "premium";
};

const isPremiumArticle = (article: HelpCenterArticle): boolean => {
  return article.tags.tags.some((tag) => tag.name.trim().toLowerCase() === "premium");
};

const hasTab = (article: HelpCenterArticle, tabId: string): boolean => {
  return article.tags.tags.some((tag) => tag.id === tabId);
};

const getPrimaryTagLabel = (article: HelpCenterArticle): string => {
  return article.tags.tags.find((tag) => tag.id !== "premium")?.name ?? article.tags.tags[0]?.name ?? "Article";
};

const extractImageFromBody = (body: string): string | null => {
  const imageMatch = body.match(/<img[^>]+src=["']([^"']+)["']/i);
  return imageMatch ? imageMatch[1] : null;
};

const getCollectionThumbnail = (collection: HelpCenterCollection): ImageSourcePropType => {
  return HARDCODED_CATEGORY_THUMBNAILS[collection.id] ?? DEFAULT_CATEGORY_THUMBNAIL;
};

const getArticleThumbnail = (article: HelpCenterArticle): ImageSourcePropType => {
  const imageUrlFromBody = extractImageFromBody(article.body);

  if (imageUrlFromBody) {
    return { uri: imageUrlFromBody };
  }

  return HARDCODED_ARTICLE_THUMBNAILS[article.id] ?? DEFAULT_CATEGORY_THUMBNAIL;
};

const meta = {
  title: "Content",
  component: HeroBanner,
} satisfies Meta<typeof HeroBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

const ContentFlowView = () => {
  const { typography } = useTheme();

  const collections = MOCK_COLLECTIONS_RESPONSE.data;
  const articles = MOCK_ARTICLES_RESPONSE.data.articles;

  const [flowStep, setFlowStep] = useState<FlowStep>("home");
  const [selectedCategoryId, setSelectedCategoryId] = useState(collections[0].id);
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState<HelpCenterArticle>(articles[0]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [paywallVisible, setPaywallVisible] = useState(false);
  const [feedbackResult, setFeedbackResult] = useState<FeedbackResult>(FeedbackResult.None);

  const cardWidth = (UIConstants.SCREEN_WIDTH - UIConstants.PADDING_HORIZONTAL_CONTAINER * 2 - spacing.s) / 2;
  const cardHeight = (cardWidth * 220) / 171;

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const belongsToSelectedCollection = article.parent_id?.toString() === selectedCategoryId;
      const inSelectedTab = selectedTab === "all" || hasTab(article, selectedTab);
      return belongsToSelectedCollection && inSelectedTab;
    });
  }, [articles, selectedCategoryId, selectedTab]);

  const popularArticles = useMemo(() => filteredArticles.slice(0, 2), [filteredArticles]);

  const selectedCategory = useMemo(
    () => collections.find((collection) => collection.id === selectedCategoryId) ?? collections[0],
    [collections, selectedCategoryId],
  );

  const handleOpenCategory = (collection: HelpCenterCollection): void => {
    setSelectedCategoryId(collection.id);
    setSelectedTab("all");
    setFlowStep("category");
  };

  const handleOpenArticle = (article: HelpCenterArticle): void => {
    setSelectedArticle(article);
    setFlowStep("article");
    setPaywallVisible(isPremiumArticle(article) && !isSubscribed);
  };

  const shouldShowPremiumPaywall = isPremiumArticle(selectedArticle) && !isSubscribed;

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, width: "100%" }}>
        {flowStep !== "article" && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: UIConstants.PADDING_HORIZONTAL_CONTAINER,
              paddingBottom: spacing.lg,
              gap: gap.xmd,
            }}>
            <Text style={typography.h1}>Content</Text>
            <HeroBanner
              sectionTitle="Build stronger daily habits"
              text="Get practical pelvic floor advice with quick reads and guided tips."
              buttonText="Read now"
              backgroundImage={CONTENT_TAB_IMAGES.yogaBanner}
              badgeIcon={Images.contentTab.premiumIcon}
              onButtonPress={() => setFlowStep("category")}
            />

            {flowStep === "home" && (
              <View style={{ gap: gap.xmd }}>
                <Text style={typography.h4}>Articles by category</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                  {collections.map((collection) => (
                    <CategoryThumbnail
                      key={collection.id}
                      title={collection.name}
                      image={getCollectionThumbnail(collection)}
                      badgeIcon={isPremiumCollection(collection) ? Images.contentTab.premiumIcon : undefined}
                      width={cardWidth}
                      height={cardHeight}
                      onPress={() => handleOpenCategory(collection)}
                    />
                  ))}
                </View>
              </View>
            )}

            {flowStep === "category" && (
              <View style={{ gap: gap.xmd }}>
                <Button
                  title="Back to categories"
                  variant="secondary"
                  onPress={() => setFlowStep("home")}
                />
                <Text style={typography.h4}>{selectedCategory.name}</Text>
                <CategoryTabBar
                  categoryTabs={CATEGORY_TABS}
                  selectedTab={selectedTab}
                  onSelectTab={setSelectedTab}
                />

                <Text style={typography.h5}>Popular in this category</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: spacing.s }}>
                  {popularArticles.map((article) => (
                    <PopularArticleThumbnail
                      key={article.id}
                      tag={getPrimaryTagLabel(article)}
                      title={article.title}
                      image={getArticleThumbnail(article)}
                      showPremiumIcon={isPremiumArticle(article)}
                      onPress={() => handleOpenArticle(article)}
                    />
                  ))}
                </ScrollView>

                <View style={{ gap: spacing.s }}>
                  <Text style={typography.h5}>All articles</Text>
                  {filteredArticles.map((article) => (
                    <ContentArticle
                      key={article.id}
                      title={article.title}
                      image={getArticleThumbnail(article)}
                      showPremiumIcon={isPremiumArticle(article)}
                      onPress={() => handleOpenArticle(article)}
                    />
                  ))}
                </View>
              </View>
            )}
          </ScrollView>
        )}

        {flowStep === "article" && (
          <View style={{ flex: 1 }}>
            <View
              style={{
                paddingHorizontal: UIConstants.PADDING_HORIZONTAL_CONTAINER,
                paddingTop: spacing.s,
                paddingBottom: spacing.xs2,
                gap: spacing.xs2,
              }}>
              <Button
                title="Back to category"
                variant="secondary"
                onPress={() => setFlowStep("category")}
              />
              {!isSubscribed && shouldShowPremiumPaywall && (
                <Text style={typography.caption}>Premium article preview. Join Club Perifit in modal to unlock full access.</Text>
              )}
            </View>

            <ContentArticleBody
              title={selectedArticle.title}
              htmlContent={selectedArticle.body}
              isScrollLocked={shouldShowPremiumPaywall}
              bottomPadding={spacing.lg}
              feedbackResult={feedbackResult}
              ratingTitle="Was this article helpful?"
              onRatingChange={setFeedbackResult}
            />
          </View>
        )}
      </View>
    </SafeAreaProvider>
  );
};

export const FullFlow: Story = {
  args: {
    sectionTitle: "Build stronger daily habits",
    text: "Get practical pelvic floor advice with quick reads and guided tips.",
    buttonText: "Read now",
    backgroundImage: CONTENT_TAB_IMAGES.yogaBanner,
  },
  render: () => <ContentFlowView />,
};
