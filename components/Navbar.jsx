import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  let hidden_class = 'hidden w-full md:block md:w-auto';
  let normal_class = ' w-full md:block md:w-auto';
  const router = useRouter();
  let [hidden, setHidden] = useState(true);

  const active_class =
    'block py-2 pr-4 pl-3 text-white bg-black/80 md:bg-transparent md:text-black/80 md:p-0 border-b-2 border-black/80';
  const not_active_class =
    'block py-2 pr-4 pl-3 text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black/80 md:p-0';

  return (
    <nav className="shadow-md rounded-2xl relative top-2  mx-10 ">
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src={
                'https://res.cloudinary.com/dbmw0xoar/image/upload/v1684682725/ecell/ACM-W/ACM-w_iith_transparent_logo_1_pd1hrt.png'
              }
              width="700"
              height="700"
              alt="ACM-W Logo"
              className="w-[5rem]"
            />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/"
                // className={
                //   router.pathname == '/' ? active_class : not_active_class
                // }
                aria-current="page"
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                // className={
                //   router.pathname == '/team' ? active_class : not_active_class
                // }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Team
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                // className={
                //   router.pathname == '/events' ? active_class : not_active_class
                // }
                onClick={() => {
                  setHidden((prev) => !prev);
                }}
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
