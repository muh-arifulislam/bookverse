import { Send } from "lucide-react";

export function NewsLetter() {
  return (
    <div className="bg-[#EDEBE4] px-4 py-30">
      <div className="w-full max-w-screen-md mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <h2 className="text-5xl font-medium capitalize text-neutral-800">
              Subscribe to our newsletter
            </h2>
            <span className="inline-block w-14 h-[3px] bg-amber-900/70"></span>
          </div>
          <div>
            <p className="mb-8">
              Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit
              amet, consectetur. Elit adipiscing enim pharetra hac.
            </p>
            <div className="py-6 px-1 border-b border-neutral-600 flex items-center">
              <input
                type="text"
                placeholder="Enter your email address"
                className="px-2 py-2 outline-none flex-1"
              />
              <button className="px-4 py-2 flex items-center justify-center transition-all ease-in-out duration-300 gap-2 group text-lg font-bold uppercase text-slate-900 hover:text-slate-500 cursor-pointer">
                Send{" "}
                <Send
                  size={20}
                  className="transition-all ease-in-out duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
