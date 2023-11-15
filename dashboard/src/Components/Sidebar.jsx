export default function Sidebar() {
  return (
    <div>
      <div className="w-full h-[93vh]  bg-gray-800 text-center rounded-[15px] shadow-md p-4 mx-auto">
        <div className="flex items-center space-x-2">
          <img
            src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/logo-ct.png"
            alt="Dashboard Logo"
            className="h-6 w-6"
          />
          <span className="text-sm text-white font-semibold">My Dashboard</span>
        </div>
        <hr className="mt-4" />

        <div className="mt-8">
          <button
            type="button"
            className="text-white bg-[#1da1f2]  hover:bg-[#1da1f2]/90 w-[100%] focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 inline-flex-shrink-0 me-2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
              <line x1="15" y1="3" x2="15" y2="21" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
            </svg>
            Dashboard
          </button>

          <button
            type="button"
            className="text-white   hover:bg-[#8A8A8A36] w-[100%]   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 inline-flex-shrink-0 me-2"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
              <line x1="4" y1="9" x2="20" y2="9" />
              <line x1="4" y1="15" x2="20" y2="15" />
              <line x1="10" y1="4" x2="10" y2="20" />
            </svg>
            Tables
          </button>
          <button
            type="button"
            className="text-white   hover:bg-[#8A8A8A36]  w-[100%] focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 inline-flex-shrink-0 me-2"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
              <line x1="7" y1="2" x2="7" y2="22" />
              <line x1="17" y1="2" x2="17" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="2" y1="7" x2="7" y2="7" />
              <line x1="2" y1="17" x2="7" y2="17" />
              <line x1="17" y1="17" x2="22" y2="17" />
              <line x1="17" y1="7" x2="22" y2="7" />
            </svg>
            Billing
          </button>
          <button
            type="button"
            className="text-white   hover:bg-[#8A8A8A36] w-[100%] focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 inline-flex-shrink-0 me-2"
            >
              <line x1="4" y1="3" x2="4" y2="21" />
              <line x1="20" y1="3" x2="20" y2="21" />
              <line x1="16" y1="3" x2="16" y2="21" />
              <line x1="8" y1="3" x2="8" y2="21" />
            </svg>
            RTL
          </button>
          <button
            type="button"
            className="text-white   hover:bg-[#8A8A8A36] w-[100%] focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 inline-flex-shrink-0 me-2"
            >
              <path d="M3 3h18v12H3zM9 21a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2" />
            </svg>
            Notifications
          </button>
          <button
            type="button"
            className="text-white   hover:bg-[#8A8A8A36] w-[100%] focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 inline-flex-shrink-0 me-2"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M5 22s5.5-1.5 7-4c1.38 2.18 3.76 4 6 4M19 22s-1-3-2-5" />
            </svg>
            Profile
          </button>
          <button
            type="button"
            className="text-white   hover:bg-[#8A8A8A36] w-[100%] focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 inline-flex-shrink-0 me-2"
            >
              <path d="M17 8l4 4-4 4m0-7h-7" />
              <path d="M3 12h13v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
            </svg>
            Sign In
          </button>
          <button
            type="button"
            className="text-white   hover:bg-[#8A8A8A36] w-[100%] focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 inline-flex-shrink-0 me-2"
            >
              <path d="M17 9H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm0 0V7a5 5 0 0 0-5-5s-5 0-5 5v2" />
            </svg>
            Sign Up
          </button>
        </div>

        <button
          type="button"
          className="text-white mt-[50px] bg-[#1da1f2] hover:bg-[#1da1f2]/90  w-[100%] focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center me-2 mb-2"
        >
          UPGRADE TO PRO
        </button>
      </div>
    </div>
  );
}
