import Logo from 'assets/logo.svg';
import HomeIcon from 'assets/icons/icon-home.svg';
import HashIcon from 'assets/icons/icon-hash.svg';
import BellIcon from 'assets/icons/icon-bell.svg';
import MessageIcon from 'assets/icons/icon-message.svg';
import BookmarkIcon from 'assets/icons/icon-bookmark.svg';
import FileIcon from 'assets/icons/icon-file.svg';
import UserIcon from 'assets/icons/icon-user.svg';
import MoreCircleIcon from 'assets/icons/icon-more-circle.svg';
import Button from './common/Button';

const Header = () => {
  return (
    <header className="w-68 px-3">
      <h1>
        <a href="/">
          <Logo width="50" height="30" />
        </a>
      </h1>

      <nav>
        <h1 className="sr-only">Global Navigation Menu</h1>
        <ul>
          <li>
            <a href="/home">
              <span className="sr-only">Current page</span>
              <HomeIcon width="26" height="26" fill="#0f1419" />
              Home
            </a>
          </li>
          <li>
            <a href="/explore">
              <HashIcon width="26" height="26" fill="#0f1419" />
              Explore
            </a>
          </li>
          <li>
            <a href="/notifications">
              <strong aria-label="5 Unread notifications">5</strong>
              <BellIcon width="26" height="26" fill="#0f1419" />
              Notifications
            </a>
          </li>
          <li>
            <a href="/messages">
              <MessageIcon width="26" height="26" fill="#0f1419" />
              Messages
            </a>
          </li>
          <li>
            <a href="/bookmarks">
              <BookmarkIcon width="26" height="26" fill="#0f1419" />
              Bookmarks
            </a>
          </li>
          <li>
            <a href="/lists">
              <FileIcon width="26" height="26" fill="#0f1419" />
              Lists
            </a>
          </li>
          <li>
            <a href="/profile">
              <UserIcon width="26" height="26" fill="#0f1419" />
              Profile
            </a>
          </li>
          <li>
            <button type="button">
              <MoreCircleIcon width="26" height="26" fill="#0f1419" />
              More
            </button>
            {/* DROPDOWN MENU */}
          </li>
        </ul>

        <Button name="Tweet" />
      </nav>
    </header>
  );
};

export default Header;
