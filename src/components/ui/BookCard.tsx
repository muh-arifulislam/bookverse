import Image from "next/image";

export default function BookCard() {
  return (
    <div className="">
      <figure className="relative group overflow-hidden">
        <Image
          src={"https://demo.templatesjungle.com/booksaw/images/tab-item1.jpg"}
          alt="book"
          width={400}
          height={400}
          className="w-full p-[15%] bg-[#EFEEE8] border border-[#EAE8DF]"
        />
        <button className="bg-black text-white w-full p-3 font-bold text-lg uppercase absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-300">
          Submit Review
        </button>
      </figure>
      <div className="text-center my-4">
        <h3 className="text-2xl">Portrait photography</h3>
        <h4 className="text-md">Adam Silber</h4>
      </div>
    </div>
  );
}
