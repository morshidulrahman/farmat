import React from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import Search from "../components/search";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { selectTotalCartItems } from "../redux/slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector(selectTotalCartItems);
  return (
    <header className="py-7 border-b bg-white">
      {/* header top area */}
      <div className="container flex justify-between items-center">
        {/* header logo */}
        <Link href="/" className="relative w-[160px] h-56 ">
          <a href="/">
            <Image src={logo} width="160" height="55" />
          </a>
        </Link>
        {/* header search */}
        <Search />
        {/* header contact */}
        <div className="lg:flex flex-col hidden">
          <span className="text-2xl font-bold">8 800 332 65-66</span>
          <p className="self-end text-color">Support 24/7</p>
        </div>
        {/* header icons */}
        <div className="cursor-pointer gap-3 flex l">
          <Link href="/my-account">
            <a href="/my-account">
              <AiOutlineUser className="text-3xl" />
            </a>
          </Link>

          <Link href="/cart" className="cursor-poiner">
            <a href="/cart" className="flex gap-3">
              <div className="relative">
                <AiOutlineShoppingCart className="text-3xl" />
                <span className="bg-primary px-[4px]  rounded-sm -top-1 right-0 absolute text-xs">
                  {cartItems || 0}
                </span>
              </div>
              <div className="flex-col text-xs text-color hidden lg:flex">
                your Cart
                <span className="font-bold text-lg text-title">$ 0.00</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
