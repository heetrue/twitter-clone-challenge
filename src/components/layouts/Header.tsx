import Navigation from './Navigation';

import Logo from 'assets/logo.svg';
import MoreIcon from 'assets/icons/icon-more.svg';

const Header = () => {
  return (
    <header className="flex flex-col justify-between justify-self-end fixed top-0 z-[3] min-w-[275px] h-screen px-3 overflow-x-hidden overflow-y-auto">
      <div>
        <h1 className="py-0.5">
          <a href="/" className="flex content-center w-fit h-13 rounded-full">
            <Logo width="50" height="30" />
          </a>
        </h1>
        <Navigation />
      </div>
      <button
        type="button"
        className="flex items-center w-full p-3 my-3 rounded-full text-base hover:bg-[#E7E7E7] transition duration-100 hover:ease-in"
      >
        <div className="w-10 h-10 rounded-full bg-slate-100">
          {/* <img src="#" alt="" /> */}
        </div>
        <div className="flex flex-col mx-3 leading-snug text-left">
          <strong className="font-bold">희진</strong>
          <p className="text-[#536471]">@heejinna</p>
        </div>
        <div className="flex justify-end items-center flex-grow">
          <MoreIcon width="19" height="19" fill="#0f1419" />
        </div>
      </button>
    </header>
  );
};

export default Header;
