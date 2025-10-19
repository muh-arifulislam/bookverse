import { ReviewForm } from "@/components/ui/review-form";
import { ReviewList } from "@/components/ui/review-list";
import { Star } from "lucide-react";
import Image from "next/image";

const MOCK_REVIEWS: Record<number, any[]> = {
  1: [
    {
      id: 1,
      bookId: 1,
      author: "Sarah M.",
      rating: 5,
      title: "A Timeless Masterpiece",
      content:
        "The Great Gatsby is an absolute masterpiece. Fitzgerald's prose is beautiful and the characters are unforgettable. A must-read for anyone who loves classic literature.",
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 2,
      bookId: 1,
      author: "John D.",
      rating: 4,
      title: "Great but Dense",
      content:
        "While the story is compelling, some parts felt a bit slow. Still, it's a classic for a reason and worth the read.",
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 3,
      bookId: 1,
      author: "Anonymous",
      rating: 5,
      title: "Loved Every Page",
      content:
        "Couldn't put it down! The Jazz Age setting is so vivid and the romance is captivating.",
      date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: true,
    },
  ],
  2: [
    {
      id: 4,
      bookId: 2,
      author: "Emma L.",
      rating: 5,
      title: "Powerful and Important",
      content:
        "This book tackles racism and injustice in such a powerful way. Scout's perspective as a child makes it even more impactful. Everyone should read this.",
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 5,
      bookId: 2,
      author: "Michael R.",
      rating: 5,
      title: "A Classic That Still Resonates",
      content:
        "Harper Lee's writing is exceptional. The moral lessons in this book are just as relevant today as they were in 1960.",
      date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 6,
      bookId: 2,
      author: "Anonymous",
      rating: 4,
      title: "Great but Challenging",
      content:
        "The themes are heavy but necessary. Some parts were difficult to read, but that's the point. Highly recommended.",
      date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: true,
    },
  ],
  3: [
    {
      id: 7,
      bookId: 3,
      author: "Alex K.",
      rating: 5,
      title: "Eerily Relevant",
      content:
        "1984 is terrifyingly relevant to today's world. Orwell's vision of surveillance and control is more prescient than ever.",
      date: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 8,
      bookId: 3,
      author: "Jordan T.",
      rating: 4,
      title: "Thought-Provoking",
      content:
        "A bit depressing at times, but it really makes you think about freedom and government control. Definitely worth reading.",
      date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 9,
      bookId: 3,
      author: "Anonymous",
      rating: 5,
      title: "Mind-Bending",
      content:
        "This book will stay with you long after you finish it. Absolutely brilliant.",
      date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: true,
    },
  ],
  4: [
    {
      id: 10,
      bookId: 4,
      author: "Lisa H.",
      rating: 5,
      title: "Romance and Wit",
      content:
        "Jane Austen's wit is unmatched. Elizabeth Bennet is one of the best female characters in literature. A delightful read.",
      date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 11,
      bookId: 4,
      author: "Christopher B.",
      rating: 5,
      title: "Timeless Romance",
      content:
        "Even though it was written over 200 years ago, the romance and social commentary feel fresh and relevant.",
      date: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 12,
      bookId: 4,
      author: "Anonymous",
      rating: 4,
      title: "Charming but Slow",
      content:
        "Beautiful writing and great characters, though the pacing is a bit slow by modern standards.",
      date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: true,
    },
  ],
  5: [
    {
      id: 13,
      bookId: 5,
      author: "David P.",
      rating: 4,
      title: "Authentic Teen Voice",
      content:
        "Holden Caulfield is such a unique character. His voice is authentic and the story captures teenage angst perfectly.",
      date: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 14,
      bookId: 5,
      author: "Rachel G.",
      rating: 4,
      title: "Coming of Age Classic",
      content:
        "A great exploration of alienation and growing up. Some parts are dated, but the core themes are timeless.",
      date: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 15,
      bookId: 5,
      author: "Anonymous",
      rating: 4,
      title: "Quirky and Engaging",
      content:
        "Holden's narrative style is quirky and keeps you engaged throughout. Definitely worth reading.",
      date: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: true,
    },
  ],
  6: [
    {
      id: 16,
      bookId: 6,
      author: "Nina S.",
      rating: 5,
      title: "Fascinating Dystopia",
      content:
        "Huxley's vision of a pleasure-based dystopia is fascinating and thought-provoking. Different from 1984 but equally impactful.",
      date: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 17,
      bookId: 6,
      author: "Marcus W.",
      rating: 4,
      title: "Prophetic Vision",
      content:
        "Aldous Huxley predicted so much about modern society. This book is a warning wrapped in a compelling narrative.",
      date: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: false,
    },
    {
      id: 18,
      bookId: 6,
      author: "Anonymous",
      rating: 4,
      title: "Thought-Provoking",
      content:
        "A unique take on dystopia. Makes you question society and technology in interesting ways.",
      date: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
      isAnonymous: true,
    },
  ],
};

export default function Page() {
  console.log("first");
  return (
    <main className="max-w-screen-lg mx-auto px-4 md:px-0">
      <div className="my-10 grid grid-cols-3 gap-5">
        <div className="">
          <Image
            src={
              "https://demo.templatesjungle.com/booksaw/images/product-item1.jpg"
            }
            width={600}
            height={1200}
            alt="book"
          />
        </div>
        <div className="col-span-2">
          {/* Rest of the content remains the same */}
          <div className="px-6">
            <div className="flex flex-col justify-start space-y-6">
              {/* Title */}
              <div>
                <h1 className="text-4xl font-bold text-foreground">
                  The Great Gatsby
                </h1>
              </div>

              {/* Author */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Author</p>
                <p className="text-lg font-semibold text-foreground">
                  F. Scott Fitzgerald
                </p>
              </div>

              {/* Publication Year */}
              <div>
                <p className="text-sm text-muted-foreground mb-1">Published</p>
                <p className="text-lg font-semibold text-foreground">1925</p>
              </div>

              {/* Rating */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Rating</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(4.35)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-foreground">
                    {4.35}
                  </span>
                  <span className="text-muted-foreground">
                    ({MOCK_REVIEWS[1].length}{" "}
                    {MOCK_REVIEWS[1].length === 1 ? "review" : "reviews"})
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Description
                </p>
                <p className="text-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus voluptate quasi soluta consequuntur nesciunt laborum
                  qui dicta vero id quia minus, culpa ea velit cumque expedita
                  debitis provident earum. Quasi voluptate labore perferendis.
                  Ab voluptatem iste nisi quibusdam aspernatur molestiae, fugiat
                  animi laboriosam a! Necessitatibus eaque unde voluptatem
                  blanditiis fuga?
                </p>
              </div>
            </div>
          </div>
          <div>{/* <ReviewForm bookId={5205} /> */}</div>
        </div>
      </div>

      <div>
        <ReviewForm bookId={5002} />
      </div>

      {/* Reviews List */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Reviews ({MOCK_REVIEWS[1].length})
        </h2>
        {MOCK_REVIEWS[1].length > 0 ? (
          <ReviewList reviews={MOCK_REVIEWS[1]} />
        ) : (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">
              No reviews yet. Be the first to review!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
