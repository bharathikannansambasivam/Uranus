import React from "react";

function Header() {
  return (
    <div>
      <h1 class=" flex justify-center items-center mb-7 text-3xl font-extrabold  md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          URANUS
        </span>{" "}
        Web.🪐{" "}
      </h1>
      <div class="flex justify-center ">
        <div class="max-w-md border-4 border-blue-500 rounded animate-pulse p-4 flex items-center flex-col">
          <div>
            <span>
              Developed by{" "}
              <span class="text-red-600">Bharathikannan Sambasivam</span>
            </span>
          </div>
          <div>
            <a href="mailto:bharathikannansambasivam@gmail.com">
              Email: bharathikannansambasivam@gmail.com{" "}
            </a>
            <div class="flex mt-5 sm:justify-center sm:mt-0">
              <a
                href="https://www.linkedin.com/in/bharathikannan-sambasivam/"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  class="w-4 h-4"
                  viewBox="0 0 48 48"
                >
                  <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
                </svg>
                <span class="sr-only">linkedIn</span>
              </a>
              <a
                href="https://medium.com/@bharathikannansambasivam"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="h-5 w-5"
                  viewBox="0 0 50 50"
                >
                  <path d="M15 14c6.065 0 11 4.935 11 11s-4.935 11-11 11S4 31.065 4 25 8.935 14 15 14M15 12C7.82 12 2 17.82 2 25s5.82 13 13 13 13-5.82 13-13S22.18 12 15 12L15 12zM35.5 15c2.124 0 4.5 4.277 4.5 10s-2.376 10-4.5 10S31 30.723 31 25 33.376 15 35.5 15M35.5 13c-3.59 0-6.5 5.373-6.5 12s2.91 12 6.5 12S42 31.627 42 25 39.09 13 35.5 13L35.5 13zM46.377 15.667h.005H46.377M45.5 18.577C45.78 20.158 46 22.327 46 25s-.22 4.842-.5 6.423C45.22 29.842 45 27.673 45 25S45.22 20.158 45.5 18.577M45.5 14c-1.381 0-2.5 4.925-2.5 11s1.119 11 2.5 11S48 31.075 48 25 46.881 14 45.5 14L45.5 14z"></path>
                </svg>
                <span class="sr-only">Medium</span>
              </a>
              <a
                href="https://github.com/bharathikannansambasivam"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="https://dribbble.com/bk_bharathikannan"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
