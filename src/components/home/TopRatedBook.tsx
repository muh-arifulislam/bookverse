import Image from "next/image";

export function TopRatedBook() {
  return (
    <section className="bg-slate-300/60 py-30">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className=" max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <Image
              src="https://demo.templatesjungle.com/booksaw/images/product-item1.jpg"
              alt="book"
              width={300}
              height={500}
              className="w-full"
            />
          </div>
          <div>
            <div className="mb-8">
              <h1 className="text-5xl font-semibold mb-2">
                Top Rated <br /> Book
              </h1>
              <span className="inline-block w-14 h-1 bg-amber-700"></span>
            </div>
            <div>
              <h4 className="text-lg mb-6">By Timbur Hood</h4>
              <h2 className="text-3xl font-semibold mb-6">
                Birds gonna be happy
              </h2>
              <p className="leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
