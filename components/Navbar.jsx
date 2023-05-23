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
    <nav className="shadow-md bg-base-100 ">
      <div className="navbar bg-base-100 items-center justify-between flex w-[90%] mx-auto">
        <div className="navbar-start">
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
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 relative right-0"
          >
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
        <div className="navbar-center hidden lg:flex">
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
