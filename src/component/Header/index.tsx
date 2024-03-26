import { useState } from 'react';
import { menuItems } from '../../data';
import { MaterialSymbolsClose, MaterialSymbolsMenu } from '../pre-/Icons';
import logo from '../../assets/images/logo.svg';
import open from '../../assets/images/icon-menu.svg';
const Header = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    return setOpen(!open);
  };

  return (
    <nav className="flex justify-center">
      {/* Responsive  */}
      {/*------------------------------------------------------------------------ */}
      <div
        className={
          open
            ? 'hidden'
            : 'fixed w-screen h-screen bg-dark opacity-60 overflow-hidden  z-10 md:hidden'
        }
      ></div>
      <div
        className={
          open
            ? 'hidden'
            : 'fixed right-0 h-screen flex items-start overflow-hidden text-xl bg-white w-8/12 z-10 p-4 pt-32  md:hidden '
        }
      >
        <ul className="gap-6 cursor-pointer flex flex-col font-semibold text-[#00001a]">
          {menuItems.map((item: string, index: number) => {
            return (
              <li key={index} className=" transition-all hover:text-[#f15e50]">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------ */}
      {/* Responsive  */}
      {/* Desktop------------------------------------------------------------------------ */}
      <div className="container max-w-auto flex justify-between py-8 px-4 font-sans font-normal lg:p-8">
        <img src={logo} />
        <ul className="hidden gap-10 cursor-pointer md:flex">
          {menuItems.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className="transition-all hover:text-[#f15e50] text-[#00001a]"
              >
                {item}
              </li>
            );
          })}
        </ul>

        <button
          className="flex absolute right-4  z-1000 md:hidden"
          onClick={handleClick}
        >
          {open ? (
            <MaterialSymbolsMenu />
          ) : (
            <MaterialSymbolsClose className="z-50" />
          )}
        </button>
      </div>
      {/* Desktop------------------------------------------------------------------------ */}
    </nav>
  );
};

export default Header;
