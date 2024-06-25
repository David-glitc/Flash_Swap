import { TonConnectButton } from "@tonconnect/ui-react";


function Navbar() {
  return (
    <div>
      <nav className="bg-white z-[10000] my-2 py-4 border-gray-200 dark:bg-gray-900 mx-2 rounded-2xl shadow-xl">
        <div className="max-w-screen-xl  justify-items-start flex gap-3 flex-wrap items-center justify-between mx-auto px-2">
          <p className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="/mmmm.png" className="h-10 w-10" alt="" />
            <span className="self-center text-2xl -m-5 font-semibold whitespace-nowrap dark:text-white">
              FlashSwap
            </span>
          </p>
          <div className="flex md:order-2 gap-6 space-x-3 px-2 md:space-x-0 rtl:space-x-reverse">
            <TonConnectButton className=" items-end " />
            <div className="dropdown z-100 dropdown-bottom dropdown-hover dropdown-end">
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content shadow-xl z-[10000] menu text-xl font-bold p-2 my-6 text-primary bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    href="#"
                    // className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    // className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    // className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    // className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
