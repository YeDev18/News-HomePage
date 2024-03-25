import { useState } from 'react';
import { menuItems } from '../../data';
import { MaterialSymbolsClose, MaterialSymbolsMenu } from '../pre-/Icons';

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
            : 'absolute w-screen h-screen bg-dark opacity-60 -z-10 md:hidden'
        }
      ></div>
      <div
        className={
          open
            ? 'hidden'
            : 'absolute right-0 h-screen flex items-start bg-white w-8/12 -z-10 p-4 pt-32  md:hidden'
        }
      >
        <ul className="gap-6 cursor-pointer flex flex-col font-semibold text-darkBlue">
          {menuItems.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------ */}
      {/* Responsive  */}
      {/* Desktop------------------------------------------------------------------------ */}
      <div className="container max-w-auto flex justify-between py-8 px-4 font-sans font-normal lg:p-8">
        <h1 className="font-bold">W.</h1>
        <ul className="hidden gap-10 cursor-pointer md:flex ">
          {menuItems.map((item: string, index: number) => {
            return (
              <li key={index} className="transition-all hover:text-[#f15e50]">
                {item}
              </li>
            );
          })}
        </ul>
        <button className="flex md:hidden" onClick={handleClick}>
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
