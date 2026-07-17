import { FeedbackResult } from "../articleRating";

export type ContentArticleBodyProps = {
  title: string;
  htmlContent?: string;
  isScrollLocked: boolean;
  bottomPadding: number;
  feedbackResult: FeedbackResult;
  ratingTitle?: string;
  onRatingChange: (rating: FeedbackResult) => void;
  showPremiumIcon?: boolean;
};
