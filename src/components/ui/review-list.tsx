import { Star } from "lucide-react";

interface Review {
  id: number;
  rating: number;
  title: string;
  content: string;
  author: string;
  isLoggedIn: boolean;
  date: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-foreground">{review.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                by {review.author} {review.isLoggedIn && "(Verified User)"}
              </p>
            </div>
            <span className="text-xs text-muted-foreground">
              {formatDate(review.date)}
            </span>
          </div>

          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>

          <p className="text-foreground text-sm leading-relaxed">
            {review.content}
          </p>
        </div>
      ))}
    </div>
  );
}
