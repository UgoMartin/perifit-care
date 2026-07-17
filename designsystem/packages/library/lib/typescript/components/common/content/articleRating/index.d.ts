import React from "react";
export declare enum FeedbackResult {
    None = "None",
    ThumbUp = "Like",
    ThumbDown = "Dislike"
}
interface ArticleRatingProps {
    title: string;
    feedbackResult: FeedbackResult;
    onRatingChange: (rating: FeedbackResult) => void;
}
export declare const ArticleRating: React.FC<ArticleRatingProps>;
export {};
//# sourceMappingURL=index.d.ts.map