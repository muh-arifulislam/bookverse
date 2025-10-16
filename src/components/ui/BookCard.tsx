import { Star, StarHalf, StarIcon } from "lucide-react";
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
        <button className="bg-black text-white w-full py-3 leading-8 font-bold text-lg uppercase absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-300">
          Add Review
        </button>
      </figure>
      <div className="text-center my-4">
        <h3 className="text-2xl text-[#74642F]">Portrait photography</h3>
        <h4 className="text-md text-slate-600/80">Adam Silber</h4>
        <div className="">
          <h5 className="text-2xl font-bold">4.5</h5>
          <div className="flex items-center justify-center gap-1">
            <Star width={16} fill="#e2b522" stroke="#e2b522" />
            <Star width={16} fill="#e2b522" stroke="#e2b522" />
            <Star width={16} fill="#e2b522" stroke="#e2b522" />
            <Star width={16} fill="#e2b522" stroke="#e2b522" />
            <Star width={16} stroke="#e2b522" />
          </div>
          <span className="text-sm text-slate-600/60">5k Ratings</span>
        </div>
      </div>
    </div>
  );
}
