import Image from "next/image";

export async function Articles() {
  return (
    <section className="py-20">
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="mb-20">
          <div className="text-center">
            <span className="uppercase">Read our articles</span>
          </div>
          <div className="flex items-center justify-around gap-8">
            <div className="border-b-1 border-slate-300 flex-1 mt-4" />
            <h1 className="text-5xl font-semibold">Latest Articles</h1>
            <div className="border-b-1 border-slate-300 flex-1 mt-4" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </section>
  );
}

export const ArticleCard = () => {
  return (
    <div>
      <div className="mb-5">
        <Image
          src={"https://demo.templatesjungle.com/booksaw/images/post-img1.jpg"}
          alt="article thumbnail"
          width={400}
          height={400}
        />
      </div>
      <div>
        <h4 className="mb-5">Mar 30, 2021</h4>
        <h2 className="text-2xl font-semibold mb-5 capitalize">
          modern vibes bedrooms, todays trending design
        </h2>
        <p>
          Lectus molestie id enim ipsum. Netus sed cursus nibh iaculis ipsum
          turpis nulla blandit dui.
        </p>
      </div>
    </div>
  );
};
