import React from "react";

export default function Contacts() {
  return (
    <main className="px-4 py-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="">
          <h1 className="text-7xl font-semibold mb-8">Contact us</h1>
          <div>
            <ul className="flex items-center gap-1">
              <li>Home</li>
              <li>/</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 my-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="mt-6">
              <p>+1650-243-0000</p>
              <p>info@yourcompany.com</p>
              <p>North Melbourne VIC 3051, Australia</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send A Message</h2>
            <div className="">
              <form action="">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-full max-w-xs">
                    <input
                      className="border-[1px] px-2 py-1 rounded border-slate-400/30 outline-none w-full bg-white"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full max-w-xs">
                    <input
                      className="border-[1px] px-2 py-1 rounded border-slate-400/30 outline-none w-full bg-white"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="w-full max-w-lg">
                  <textarea
                    className="border-[1px] px-2 py-1 rounded border-slate-400/30 outline-none w-full bg-white"
                    placeholder="Message"
                    rows={6}
                  />
                </div>
                <div className="my-6">
                  <button className="py-4 bg-red-500 w-full font-bold uppercase text-lg rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
