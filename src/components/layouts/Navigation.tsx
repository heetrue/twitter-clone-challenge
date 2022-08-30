import { useCallback, useEffect, useRef, useState } from 'react';
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
    route: '/',
    icon: <HomeIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Explore',
    route: '/explore',
    icon: <HashIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Notifications',
    route: '/notifications',
    icon: <BellIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Messages',
    route: '/messages',
    icon: <MessageIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Bookmarks',
    route: '/bookmarks',
    icon: <BookmarkIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Lists',
    route: '/lists',
    icon: <FileIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'Profile',
    route: '/profile',
    icon: <UserIcon width="26" height="26" fill="#0f1419" />,
  },
  {
    title: 'More',
    icon: <MoreCircleIcon width="26" height="26" fill="#0f1419" />,
    dropdown: [
      {
        title: 'Topics',
        route: '/topics',
      },
      {
        title: 'Moments',
        route: '/i/moment_maker',
      },
      {
        title: 'Newsletters',
        route: '/i/newsletters',
      },
      {
        title: 'Twitter for Professionals',
        route: '/i/flow/convert_to_professional',
      },
      {
        title: 'Twitter Ads',
        route: '/',
      },
      {
        title: 'Analytics',
        route: '/',
      },
      {
        title: 'Settings and privacy',
        route: '/settings/account',
      },
      {
        title: 'Help Center',
        route: '/',
      },
      {
        title: 'Display',
        route: '/i/display',
      },
      {
        title: 'Keyboard shortcuts',
        route: '/i/keyboard_shortcuts',
      },
    ],
  },
];

const Navigation = () => {
  // Dropdown
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMoreClick = () => {
    return setOpen(prev => !prev);
  };

  const handleClickOutside = useCallback(({ target }: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <h1 className="sr-only">Global Navigation Menu</h1>
      <ul>
        {MenuList.map(menu => (
          <li key={menu.title} className="py-1">
            {menu.route ? (
              <Link to={menu.route} className="w-full">
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
                <div
                  ref={dropdownRef}
                  className="flex-col absolute bottom-0 bg-white rounded drop-shadow-md"
                >
                  {menu.dropdown &&
                    isOpen &&
                    menu.dropdown.map(item => (
                      <Link key={item.title} to={item.route}>
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
