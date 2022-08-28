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
    icon: <HomeIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Explore',
    link: '/explore',
    icon: <HashIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Notifications',
    link: '/notifications',
    icon: <BellIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Messages',
    link: '/messages',
    icon: <MessageIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Bookmarks',
    link: '/bookmarks',
    icon: <BookmarkIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Lists',
    link: '/lists',
    icon: <FileIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Profile',
    link: '/profile',
    icon: <UserIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'More',
    icon: <MoreCircleIcon width="26" height="26" fill="#0f1419" />,
    dropdown: [
      {
        title: 'Topics',
        link: '/topics',
      },
      {
        title: 'Moments',
        link: '/i/moment_maker',
      },
      {
        title: 'Newsletters',
        link: '/i/newsletters',
      },
      {
        title: 'Twitter for Professionals',
        link: '/i/flow/convert_to_professional',
      },
      {
        title: 'Twitter Ads',
        link: '/',
      },
      {
        title: 'Analytics',
        link: '/',
      },
      {
        title: 'Settings and privacy',
        link: '/settings/account',
      },
      {
        title: 'Help Center',
        link: '/',
      },
      {
        title: 'Display',
        link: '/i/display',
      },
      {
        title: 'Keyboard shortcuts',
        link: '/i/keyboard_shortcuts',
      },
    ],
  },
];

const Navigation = () => {
  // Dropdown
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
                <div className="flex content-center gap-5 w-fit p-3 rounded-full hover:bg-[#E7E7E7] transition duration-100 hover:ease-in">
                  <div>{menu.icon}</div>
                  <h2 className="text-xl mr-4">{menu.title}</h2>
                </div>
              </Link>
            ) : (
              <button
                type="button"
                onClick={handleMoreClick}
                className="w-full relative"
              >
                <div className="flex content-center gap-5 w-fit p-3 rounded-full hover:bg-[#E7E7E7] transition duration-100 hover:ease-in">
                  <div>{menu.icon}</div>
                  <h2 className="text-xl mr-4">{menu.title}</h2>
                </div>
                {/* Dropdown Menu */}
                <div className="flex-col absolute bottom-0 bg-white rounded drop-shadow-md">
                  {menu.dropdown &&
                    isOpen &&
                    menu.dropdown.map(item => (
                      <Link to={item.link}>
                        <h3 className="p-4 text-15 text-left hover:bg-slate-100 transition duration-100 hover:ease-in">
                          {item.title}
                        </h3>
                      </Link>
                    ))}
                </div>
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
