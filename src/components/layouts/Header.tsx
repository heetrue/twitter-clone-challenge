import Logo from 'assets/logo.svg';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="flex-col w-68 h-full px-3">
      <h1 className="py-0.5">
        <a href="/" className="flex content-center w-fit h-13 rounded-full">
          <Logo width="50" height="30" />
        </a>
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
