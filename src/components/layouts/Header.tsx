import { Link } from 'react-router-dom';

import Logo from 'assets/logo.svg';
import HomeIcon from 'assets/icons/icon-home.svg';
import HashIcon from 'assets/icons/icon-hash.svg';
import BellIcon from 'assets/icons/icon-bell.svg';
import MessageIcon from 'assets/icons/icon-message.svg';
import BookmarkIcon from 'assets/icons/icon-bookmark.svg';
import FileIcon from 'assets/icons/icon-file.svg';
import UserIcon from 'assets/icons/icon-user.svg';
import MoreCircleIcon from 'assets/icons/icon-more-circle.svg';

const MenuList = [
  {
    title: 'Home',
    link: '/',
    icon: HomeIcon,
  },
  {
    title: 'Explore',
    link: '/explore',
    icon: HashIcon,
  },
  {
    title: 'Notifications',
    link: '/notifications',
    icon: BellIcon,
  },
  {
    title: 'Messages',
    link: '/messages',
    icon: MessageIcon,
  },
  {
    title: 'Bookmarks',
    link: '/bookmarks',
    icon: BookmarkIcon,
  },
  {
    title: 'Lists',
    link: '/lists',
    icon: FileIcon,
  },
  {
    title: 'Profile',
    link: '/profile',
    icon: UserIcon,
  },
  {
    title: 'More',
    icon: MoreCircleIcon,
  },
];

const Header = () => {
  return (
    <header className="flex-col w-68 h-full px-3">
      <h1 className="w-13 h-13 rounded-full hover:bg-black">
        <a href="/" className="flex justify-center content-center">
          <Logo width="50" height="30" />
        </a>
      </h1>

      <nav>
        <h1 className="sr-only">Global Navigation Menu</h1>
        <ul>
          {MenuList.map(menu => (
            <li key={menu.title} className="py-1">
              {menu.link ? (
                <Link to={menu.link} className="w-full">
                  <div className="w-fit p-3 rounded-full hover:bg-[#E7E7E7] transition duration-100 hover:ease-in">
                    <div>{menu.icon}</div>
                    <h2 className="text-xl">{menu.title}</h2>
                  </div>
                </Link>
              ) : (
                <button type="button" className="w-full">
                  <div className="w-fit p-3 rounded-full hover:bg-[#E7E7E7] transition duration-100 hover:ease-in">
                    <div>{menu.icon}</div>
                    <h2 className="text-xl">{menu.title}</h2>
                  </div>
                </button>
                /* DROPDOWN MENU */
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="w-11/12 h-13 px-8 my-4 bg-blue hover:bg-dark-blue rounded-full text-base font-bold text-white transition duration-150 hover:ease-out"
        >
          Tweet
        </button>
      </nav>

      {/* <li>
            <a href="/home" className="text-xl">
              <span className="sr-only">Current page</span>
              <HomeIcon width="26" height="26" fill="#0f1419" />
              Home
            </a>
          </li>
          <li>
            <a href="/explore" className="text-xl">
              <HashIcon width="26" height="26" fill="#0f1419" />
              Explore
            </a>
          </li>
          <li>
            <a href="/notifications" className="text-xl">
              <strong aria-label="5 Unread notifications" className="">
                5
              </strong>
              <BellIcon width="26" height="26" fill="#0f1419" />
              Notifications
            </a>
          </li>
          <li>
            <a href="/messages" className="text-xl">
              <MessageIcon width="26" height="26" fill="#0f1419" />
              Messages
            </a>
          </li>
          <li>
            <a href="/bookmarks" className="text-xl">
              <BookmarkIcon width="26" height="26" fill="#0f1419" />
              Bookmarks
            </a>
          </li>
          <li>
            <a href="/lists" className="text-xl">
              <FileIcon width="26" height="26" fill="#0f1419" />
              Lists
            </a>
          </li>
          <li>
            <a href="/profile" className="text-xl">
              <UserIcon width="26" height="26" fill="#0f1419" />
              Profile
            </a>
          </li> */}
    </header>
  );
};

export default Header;
