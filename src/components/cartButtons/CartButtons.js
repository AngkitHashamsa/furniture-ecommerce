import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { closeMenu } from '../../features/Slices/ProductReducer';

function CartButtons() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.product);
  const handleCloseMenu = () => dispatch(closeMenu());
  return (
    <>
      <Link onClick={handleCloseMenu} to="cart" className="relative flex items-center">
        <BsFillCartCheckFill className="text-3xl" />
        <span
          className={`text-gray absolute -top-3 -right-4 z-10  grid h-6 w-6 place-items-center rounded-full ${
            isMenuOpen ? 'bg-purple text-white' : 'bg-white text-purple'
          }  `}
        >
          7
        </span>
      </Link>
      <button onClick={handleCloseMenu} type="button" className="text-lg">
        Login
      </button>
    </>
  );
}

export default CartButtons;
