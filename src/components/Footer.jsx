import React from "react";
import trade from "../assets/Untitled (10).png";

function Footer() {
  return (
    <div>
      <footer class="bg-white dark:bg-gray-900 mt-5">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class=" mt-5">
            <div class="mb-6 md:mb-0  ">
              <a href="https://flowbite.com/" class="flex items-center">
                <img
                  src={trade}
                  class="h-8 me-3 rounded-full"
                  alt="FlowBite Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Uranus Web
                </span>
              </a>
            </div>
            <div class=" mt-10 grid grid-cols-2 gap-8 sm:gap-6  ">
              <div className="">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Partners
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://Dia.wiki" class="hover:underline">
                      Decentralized Intelligence Agency
                    </a>
                  </li>
                  <li>
                    <a href="https://WorldVibeWeb.org" class="hover:underline">
                      World Vibe Web
                    </a>
                  </li>
                  <li>
                    <a href="https://Purplerock.xyz" class="hover:underline">
                      Purplerock
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources:{" "}
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a
                      href="https://persistventure.notion.site/URANUS-Web-7291c569928947758d04c7dc99a3a327"
                      class="hover:underline "
                    >
                      Effective Vibes
                    </a>
                  </li>
                  <li>
                    <a href="https://goldenmeme.org/" class="hover:underline">
                      Golden Meme
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a
                href="https://persistventure.notion.site/URANUS-Web-7291c569928947758d04c7dc99a3a327"
                class="hover:underline"
              >
                Uranus Web™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
