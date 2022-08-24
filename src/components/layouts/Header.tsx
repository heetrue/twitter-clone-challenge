import Logo from 'assets/logo.svg';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="flex-col w-68 h-full px-3">
      <h1 className="w-13 h-13 rounded-full hover:bg-black">
        <a href="/" className="flex justify-center content-center">
          <Logo width="50" height="30" />
        </a>
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
