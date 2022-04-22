import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import links from '../../constants/links';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-purple text-skyBlue ">
      <section className="mx-auto flex h-14 w-11/12  max-w-5xl items-center justify-between">
        <Link to="/" className="cursor-pointer text-3xl font-semibold">
          E-COM
        </Link>
        <div className="sm:hidden">
          <button type="button">
            <FaBars className="text-3xl transition-all duration-300 hover:text-sky-200" />
          </button>
        </div>
        <ul className="hidden gap-4 sm:flex sm:items-center">
          {links.map((x) => (
            <li>
              <Link to={x.routes}>{x.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden gap-4 sm:flex sm:items-center">
          <div>one</div>
          <div>two</div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
