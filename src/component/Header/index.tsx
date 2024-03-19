import { menuItems } from '../../data';

const Header = () => {
  return (
    <nav className="flex">
      <div>
        <h1>W</h1>
        <ul>
          {menuItems.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
