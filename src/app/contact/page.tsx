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
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2>Get in Touch</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div>
              <p>+1650-243-0000</p>
              <p>info@yourcompany.com</p>
              <p>North Melbourne VIC 3051, Australia</p>
            </div>
          </div>
          <div>
            <h2>Send A Message</h2>
            <div>
              <form action=""></form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
