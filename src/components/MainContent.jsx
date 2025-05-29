const MainContent = () => {
  return (
    <div className="flex justify-center items-start p-6 w-full transition-all duration-500 ease-in-out">
      <div className="flex">
        <div className="p-6 gap-4 w-[373px] rounded-2xl flex flex-col bg-dark-layer-1">
          <div className="flex justify-start">
            <img
              className="w-20 h-20 rounded-lg"
              src="https://assets.leetcode.com/favorite/default_favorite_cover.png"
            />
          </div>
          <div className="text-sd-foreground font-semibold text-3xl">
            Favorite
          </div>
          <div className="flex text-sm text-sd-foreground items-center">
            <span>Sahil Rochlani</span>
            <div className="w-[1px] h-[1px] bg-sd-foreground mx-1.5"></div>
            <span>11 questions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex cursor-pointer items-center gap-2 bg-sd-primary hover:bg-sd-primary/90 transition-colors rounded-3xl py-2 px-4">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                ></path>
              </svg>
              <span className="text-sm font-semibold">Practice</span>
            </div>
            <div className="flex items-center gap-2 ">
              <div className="flex justify-center p-3 hover:bg-sd-secondary/80 transition-colors cursor-pointer bg-sd-secondary text-sd-secondary-foreground items-center rounded-full">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="plus"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-center p-3 hover:bg-sd-secondary/80 transition-colors cursor-pointer bg-sd-secondary text-sd-secondary-foreground items-center rounded-full">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="pen-to-square"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-center p-3 hover:bg-sd-secondary/80 transition-colors cursor-pointer bg-sd-secondary text-sd-secondary-foreground items-center rounded-full">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="ellipsis-vertical"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 512"
                >
                  <path
                    fill="currentColor"
                    d="M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM112 96A48 48 0 1 0 16 96a48 48 0 1 0 96 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-sd-border h-px w-full my-1"></div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sd-foreground text-sm font-medium">
                Progress
              </span>
              <div className="flex justify-center cursor-pointer items-center hover:bg-sd-accent transition-colors rounded-lg hover:text-sd-accent-foreground text-sd-muted-foreground p-2">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="arrow-rotate-left"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="h-[176px] flex gap-2">
              <div className="min-w-[227px] bg-fill-quarternary rounded-md flex justify-center items-center">
                <div className="w-[160px] relative h-[160px]">
                  <svg
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 h-full w-full fill-transparent"
                  >
                    <defs>
                      <clipPath id="bar-mask">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.3622 21.3622C5.54592 37.1784 5.54592 62.8216 21.3622 78.6378C21.9479 79.2236 21.9479 80.1734 21.3622 80.7591C20.7764 81.3449 19.8266 81.3449 19.2408 80.7591C2.25303 63.7713 2.25303 36.2287 19.2408 19.2409C36.2286 2.25305 63.7713 2.25305 80.7591 19.2409C97.7469 36.2287 97.7469 63.7713 80.7591 80.7591C80.1733 81.3449 79.2236 81.3449 78.6378 80.7591C78.052 80.1734 78.052 79.2236 78.6378 78.6378C94.454 62.8216 94.454 37.1784 78.6378 21.3622C62.8216 5.54594 37.1784 5.54594 21.3622 21.3622Z"
                        />
                      </clipPath>
                    </defs>
                    <g clipPath="url(#bar-mask)">
                      <g
                        className="duration-400 origin-center translate-x-0 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)]"
                        style={{ "--tw-rotate": "225deg" }}
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="fill-green-500 qa_6R duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-[#F0F0F0] dark:stroke-[#434343]"
                          style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            strokeDasharray: "198, 66",
                            strokeDashoffset: 66,
                          }}
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="fill-green-500 qa_6R duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-sd-success"
                          style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            strokeDasharray: "198, 66",
                            strokeDashoffset: 66,
                          }}
                        />
                      </g>
                      <g
                        className="duration-400 origin-center translate-x-0 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)]"
                        style={{ "--tw-rotate": "503.1deg" }}
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="fill-green-500 qa_6R aH1ck duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-[#F0F0F0] dark:stroke-[#434343]"
                          style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            strokeDasharray: "0, 264",
                            strokeDashoffset: 66,
                          }}
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="fill-green-500 qa_6R aH1ck duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-sd-primary/20"
                          style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            strokeDasharray: "0, 264",
                            strokeDashoffset: 66,
                          }}
                        />
                      </g>
                      <g
                        className="duration-400 origin-center translate-x-0 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)]"
                        style={{ "--tw-rotate": "495deg" }}
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="fill-green-500  qa_6R aH1ck duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-[#F0F0F0] dark:stroke-[#434343]"
                          style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            strokeDasharray: "0, 264",
                            strokeDashoffset: 66,
                          }}
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="fill-green-500 qa_6R aH1ck duration-400 transition-all ease-[cubic-bezier(.6,1.37,.81,.97)] stroke-transparent"
                          style={{
                            strokeWidth: 3,
                            strokeLinecap: "round",
                            strokeDasharray: "0, 264",
                            strokeDashoffset: 66,
                          }}
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="absolute top-1/2 text-sd-foreground -translate-y-2/3 left-1/2 -translate-x-1/2 flex flex-col">
                    <div>
                        <span className="text-[30px] font-semibold">11</span>
                        <span>/11</span>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="text-xs">Solved</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="bg-fill-quarternary text-xs rounded-md flex flex-col justify-center items-center h-1/3 w-full">
                  <span className="text-easy">Easy</span>
                  <span className="text-sd-foreground font-medium">5/5</span>
                </div>
                <div className="bg-fill-quarternary text-xs rounded-md flex flex-col justify-center items-center h-1/3 w-full">
                  <span className="text-medium">Med.</span>
                  <span className="text-sd-foreground font-medium">6/6</span>
                </div>
                <div className="bg-fill-quarternary text-xs rounded-md flex flex-col justify-center items-center h-1/3 w-full">
                  <span className="text-hard">Hard</span>
                  <span className="text-sd-foreground font-medium">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
