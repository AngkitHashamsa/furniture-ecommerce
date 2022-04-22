import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu } from '../../features/Slices/ProductReducer';
import CartButtons from '../cartButtons';
import links from '../../constants/links';

function Sidebar() {
  const { isMenuOpen } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <aside
      className={`fixed top-0 right-0 z-40 h-[100vh] w-[100vw]  duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }  bg-skyBlue`}
    >
      <div className="flex h-14 items-center justify-between bg-purple px-2 text-skyBlue">
        <Link to="/" className="cursor-pointer text-3xl font-semibold">
          E-COM
        </Link>
        <button type="button" className="text-right" onClick={() => dispatch(closeMenu())}>
          <AiOutlineClose className=" text-2xl text-pink  transition-all duration-300 hover:text-red" />
        </button>
      </div>

      <ul className="mt-12">
        {links.map((link) => (
          <li
            key={link.routes}
            className="mb-3 block py-2 text-xl capitalize text-navyBlue transition-all duration-500 hover:bg-sky-100 hover:pl-3 "
          >
            <Link className="ml-8" to={link.routes} onClick={() => dispatch(closeMenu())}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex justify-center gap-12">
        <CartButtons />
      </div>
    </aside>
  );
}

export default Sidebar;
