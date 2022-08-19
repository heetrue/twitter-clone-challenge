import Logo from 'assets/logo.svg';

const Main = () => {
  return (
    <>
      <header>
        <h1>
          <a href='/'>
            <Logo width='50' height='30' />
          </a>
        </h1>

        <nav>
          <h1>Global Navigation Menu</h1>
          <ul>
            <li>
              <a href='/home'>
                <span>Current page</span>
                <img src='assets/icons/icon-home.svg' alt='' />
                Home
              </a>
            </li>
            <li>
              <a href='/explore'>
                <img src='./assets/icons/icon-hash.svg' alt='' />
                Explore
              </a>
            </li>
            <li>
              <a href='/notifications'>
                <strong aria-label='5 Unread notifications'>5</strong>
                <img src='./assets/icons/icon-bell.svg' alt='' />
                Notifications
              </a>
            </li>
            <li>
              <a href='/messages'>
                <img src='./assets/icons/icon-message.svg' alt='' />
                Messages
              </a>
            </li>
            <li>
              <a href='/bookmarks'>
                <img src='./assets/icons/icon-bookmark.svg' alt='' />
                Bookmarks
              </a>
            </li>
            <li>
              <a href='/lists'>
                <img src='./assets/icons/icon-file.svg' alt='' />
                Lists
              </a>
            </li>
            <li>
              <a href='/profile'>
                <img src='./assets/icons/icon-user.svg' alt='' />
                Profile
              </a>
            </li>
            <li>
              <button type='button'>
                <img src='./assets/icons/icon-more-circle.svg' alt='' />
                More
              </button>
              {/* DROPDOWN MENU */}
            </li>
          </ul>

          <button type='button'>Tweet</button>
        </nav>
      </header>

      <main>
        <header>
          <h1>Home</h1>
          <button type='button' aria-label='Timeline options'>
            <img src='./assets/icons/icon-twinkle.svg' alt='Top Tweets' />
          </button>
          <div>
            <h2>Home shows you top Tweets first</h2>
            <button type='button'>
              <img src='./assets/icons/icon-swap.svg' alt='' />
              <strong>See latest Tweets instead</strong>
              <span>You'll see Tweets show up as they happen.</span>
            </button>
            <a href='/settings/content_preferences'>
              <img src='./assets/icons/icon-gear.svg' alt='' />
              <strong>View content preferences</strong>
            </a>
          </div>
        </header>

        <section>
          <h1>What's happening?</h1>
          <img src='#' alt='@kimbugx' />
          <form action='#' method='POST'>
            <textarea
              placeholder="What's happening?"
              maxLength={280}
            ></textarea>
            <button type='button' aria-label='Add photos or video'>
              <img src='./assets/icons/icon-image.svg' alt='' />
            </button>
            <input type='file' accept='image/*, video/*' multiple />
            <button type='button' aria-label='Search GIFs...'>
              <img src='./assets/icons/icon-gif.svg' alt='' />
            </button>
            <button type='button' aria-label='Create a poll'>
              <img src='./assets/icons/icon-poll.svg' alt='' />
            </button>
            <button type='button' aria-label='Add emoji'>
              <img src='./assets/icons/icon-emoji.svg' alt='' />
            </button>
            <button type='button' aria-label='Schedule Tweet'>
              <img src='./assets/icons/icon-calendar.svg' alt='' />
            </button>

            <strong aria-label='0 out of 280 characters'></strong>
            <button type='button' aria-label='Add another tweet'>
              <img src='./assets/icons/icon-plus.svg' alt='' />
            </button>
            <button type='submit'>Tweet</button>
          </form>
        </section>

        <section>
          <h1>Your Timeline</h1>
          <ol>
            <li>
              <article>
                <h1>A Tweet from 김익명</h1>
                <header>
                  <a href='#'>
                    <img src='#' alt='김익명' />
                  </a>
                  <h2>
                    <a href='#'>김익명</a>
                  </h2>
                  <dl>
                    <div>
                      <dt>Username</dt>
                      <dd>
                        <a href='#'> @anonymouskim</a>
                      </dd>
                    </div>
                    <div>
                      <dt>Posted</dt>
                      <dd>
                        <a href='#'>Dec 25</a>
                      </dd>
                    </div>
                  </dl>

                  <button type='button' aria-label='More'>
                    <img src='./assets/icons/icon-more.svg' alt='' />
                    <span>More</span>
                  </button>
                  <div>
                    <button type='button'>
                      <img src='./assets/icons/icon-dislike.svg' alt='' />
                      Not interested in this Tweet
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-unfollow.svg' alt='' />
                      Unfollow @anonymouskim
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-add-list.svg' alt='' />
                      Add/remove @anonymouskim from Lists
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-mute.svg' alt='' />
                      Mute @anonymouskim
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-block.svg' alt='' />
                      Block @anonymouskim
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-embed.svg' alt='' />
                      Embed Tweet
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-flag.svg' alt='' />
                      Report Tweet
                    </button>
                  </div>
                </header>
                <p>
                  영어를 더 잘 하고싶다. 그러나 공부를 하고 싶지는 않다. 내 삶의
                  모든 것이 이런 식으로 망해왔다 Retweet Retweet with comment
                  Send via Direct Message Add Tweet to Bookmarks Copy link to
                  Tweet
                </p>

                <footer>
                  <button type='button'>
                    <span>Tweet your reply</span>
                    <strong aria-label='3 replied'>3</strong>
                    <img src='./assets/icons/icon-comment.svg' alt='' />
                  </button>
                  <button type='button'>
                    <span>Retweet</span>
                    <strong aria-label='3 retweeted'>3</strong>
                    <img src='./assets/icons/icon-retweet.svg' alt='' />
                  </button>
                  <div>
                    <button type='button'>
                      <img src='./assets/icons/icon-retweet.svg' alt='' />
                      Retweet
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-pencil.svg' alt='' />
                      Quote Tweet
                    </button>
                  </div>
                  <button type='button'>
                    <span>Like this tweet</span>
                    <strong aria-label='100 liked'>100</strong>
                    <img src='./assets/icons/icon-heart.svg' alt='' />
                  </button>
                  <div>
                    <button type='button'>
                      <img src='./assets/icons/icon-link.svg' alt='' />
                      Copy link to Tweet
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-message.svg' alt='' />
                      Send via Direct Message
                    </button>
                    <button type='button'>
                      <img src='./assets/icons/icon-bookmark-add.svg' alt='' />
                      Bookmark
                    </button>
                  </div>
                </footer>
              </article>
            </li>
            <li>{/* Tweet */}</li>
            <li>{/* Tweet */}</li>
            <li>{/* Tweet */}</li>
            <li>{/* Tweet */}</li>
          </ol>
        </section>
      </main>

      <aside>
        <header>
          <h1>Trends for you</h1>
          <button type='button' aria-label='Options'>
            <img src='./assets/icons/icon-gear.svg' alt='' />
          </button>
        </header>

        <ol>
          <li>
            <button type='button' aria-label='Options'>
              <img src='./assets/icons/icon-more.svg' alt='' />
            </button>
            <div>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                Not interested in this
              </button>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                This trend is harmful or spammy
              </button>
            </div>

            <a href='#'>
              <span>Trending in South Korea</span>
              <strong lang='ko'>#김버그</strong>
              <span>100K Tweets</span>
            </a>
          </li>
          <li>
            <button type='button' aria-label='Options'>
              <img src='./assets/icons/icon-more.svg' alt='' />
            </button>
            <div>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                Not interested in this
              </button>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                This trend is harmful or spammy
              </button>
            </div>

            <a href='#'>
              <span>Trending in South Korea</span>
              <strong lang='ko'>#프론트엔드</strong>
              <span>33K Tweets</span>
            </a>
          </li>
          <li>
            <button type='button' aria-label='Options'>
              <img src='./assets/icons/icon-more.svg' alt='' />
            </button>
            <div>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                Not interested in this
              </button>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                This trend is harmful or spammy
              </button>
            </div>

            <a href='#'>
              <span>Trending in South Korea</span>
              <strong lang='ko'>#김버그</strong>
              <span>100K Tweets</span>
            </a>
          </li>
          <li>
            <button type='button' aria-label='Options'>
              <img src='./assets/icons/icon-more.svg' alt='' />
            </button>
            <div>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                Not interested in this
              </button>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                This trend is harmful or spammy
              </button>
            </div>

            <a href='#'>
              <span>Trending in South Korea</span>
              <strong lang='ko'>#김버그</strong>
              <span>100K Tweets</span>
            </a>
          </li>
          <li>
            <button type='button' aria-label='Options'>
              <img src='./assets/icons/icon-more.svg' alt='' />
            </button>
            <div>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                Not interested in this
              </button>
              <button type='button'>
                <img src='./assets/icons/icon-dislike.svg' alt='' />
                This trend is harmful or spammy
              </button>
            </div>

            <a href='#'>
              <span>Trending worldwide</span>
              <strong lang='ko'>#javascript_meme</strong>
              <span>88.6M Tweets</span>
            </a>
          </li>
        </ol>

        <button type='button'>Show more</button>
      </aside>

      <footer>
        <a href='#' target='_blank'>
          Terms of Service
        </a>
        <a href='#' target='_blank'>
          Privacy Policy
        </a>
        <a href='#' target='_blank'>
          Cookie Policy
        </a>
        <a href='#' target='_blank'>
          Accessibility
        </a>
        <a href='#' target='_blank'>
          Ads info
        </a>
        <button type='button'>
          More
          <img src='./assets/icons/icon-more.svg' alt='' />
        </button>
        <div>
          <a href='#' target='_blank'>
            About
          </a>
          <a href='#' target='_blank'>
            Status
          </a>
          <a href='#' target='_blank'>
            Twitter for Business
          </a>
          <a href='#' target='_blank'>
            Developers
          </a>
        </div>

        <span>© 2022 Twitter, Inc.</span>
      </footer>
    </>
  );
};

export default Main;
