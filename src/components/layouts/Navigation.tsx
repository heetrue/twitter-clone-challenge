import { useState } from 'react';
import { Link } from 'react-router-dom';

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

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMoreClick = () => {
    return setOpen(prev => !prev);
  };

  return (
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
              <button
                type="button"
                onClick={handleMoreClick}
                className="w-full"
              >
                <div className="w-fit p-3 rounded-full hover:bg-[#E7E7E7] transition duration-100 hover:ease-in">
                  <div>{menu.icon}</div>
                  <h2 className="text-xl">{menu.title}</h2>
                </div>
                {/* DROPDOWN MENU */}
                {isOpen && <div>DROPDOWN OPENED</div>}
              </button>
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
  );
};

export default Navigation;
