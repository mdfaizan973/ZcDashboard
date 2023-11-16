import "./Styles/Navbar.css";
export default function Navbar() {
  return (
    <div>
      <div className="dash_nav">
        <div>Dashboard</div>

        <ul className="mt-4 flex sm:mt-0">
          <input
            className="border-2 border-gray-300 bg-transparent h-10 pl-4 pr-2 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search here"
          />

          <li className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM12 18c-1.11 0-2-.89-2-2h4c0 1.11-.89 2-2 2zm1-15a1 1 0 0 0-2 0v5a3.999 4.999 0 0 0-3 8.745V16h8v-1.255A3.999 4.999 0 0 0 13 8V3z"
              />
            </svg>
          </li>
          <li className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}
