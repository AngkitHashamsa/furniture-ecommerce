import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openMenu } from '../../features/Slices/ProductReducer';
import CartButtons from '../cartButtons/CartButtons';
import links from '../../constants/links';

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="fixed top-0 left-0 w-full bg-purple text-skyBlue ">
      <section className="mx-auto flex h-14 w-11/12  max-w-5xl items-center justify-between">
        <Link to="/" className="cursor-pointer text-3xl font-semibold">
          E-COM
        </Link>
        <div className="sm:hidden">
          <button type="button" onClick={() => dispatch(openMenu())}>
            <FaBars className="text-3xl transition-all duration-300 hover:text-sky-200" />
          </button>
        </div>
        <ul className="hidden gap-4  sm:flex sm:items-center">
          {links.map((x) => (
            <li key={x.name}>
              <Link
                className="text-lg capitalize transition-all duration-300 hover:border-b-2 hover:text-sky-100"
                to={x.routes}
              >
                {x.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden gap-4 sm:flex sm:items-center">
          <CartButtons />
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
