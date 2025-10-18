"use client";

import type React from "react";
import { useState } from "react";
import { Star } from "lucide-react";

interface ReviewFormProps {
  bookId: number;
}

export function ReviewForm({ bookId }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      alert("Please write a review");
      return;
    }

    const newReview = {
      id: Date.now(),
      bookId,
      rating,
      title: title || "Untitled Review",
      content,
      author: reviewerName || "Anonymous",
      isLoggedIn: false,
      date: new Date().toISOString(),
    };

    // Reset form
    setRating(5);
    setTitle("");
    setContent("");
    setReviewerName("");
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Rating
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <Star
                  className={`h-6 w-6 transition-colors ${
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground hover:text-yellow-400"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Review Title (optional)
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your review a title"
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Reviewer Name (if not logged in) */}
        {/* {!user && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Your Name (optional)</label>
            <input
              type="text"
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="Leave blank to post as Anonymous"
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )} */}

        {/* Review Content */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Your Review
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts about this book..."
            rows={5}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        <button type="submit" className="w-full">
          Post Review
        </button>
      </form>
    </div>
  );
}
