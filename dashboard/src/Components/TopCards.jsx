// import React from 'react'

export default function TopCards() {
  return (
    <div>
      <div className="flex mb-4 space-x-4">
        <div className="flex-1 bg-white p-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="h-20 w-20 bg-black text-white rounded-md border flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16l2 6h-1M6 18h12m-4-4v4m0 0h4"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-400">Bookings</p>
              <h2 className="text-2xl  font-bold mb-2">281</h2>
            </div>
          </div>
          <hr className="mt-2" />
          <p className="mt-2 text-gray-400">
            <span className="text-green-800 font-bold">+55% </span>
            than lask week
          </p>
        </div>

        <div className="flex-1 bg-white p-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="h-20 w-20 bg-blue-500 rounded-md border flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 11a9 9 0 0117.897 2.474M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 14h6"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-400">Todays Users</p>
              <h2 className="text-2xl  font-bold mb-2">2,300</h2>
            </div>
          </div>
          <hr className="mt-2" />
          <p className="mt-2 text-gray-400">
            <span className="text-green-800 font-bold">+3% </span>
            than last month
          </p>
        </div>

        <div className="flex-1 bg-white p-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="h-20 w-20 bg-green-500 rounded-md border flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 19c0 1.1.9 2 2 2h8a2 2 0 002-2v-1.5M6 9a4 4 0 014-4h4a4 4 0 014 4"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-400">Revenue</p>
              <h2 className="text-2xl  font-bold mb-2">34k</h2>
            </div>
          </div>
          <hr className="mt-2" />
          <p className="mt-2 text-gray-400">
            <span className="text-green-800 font-bold">+1% </span>
            than yesterday
          </p>
        </div>

        <div className="flex-1 bg-white p-2 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="h-20 w-20 bg-pink-500 rounded-md border flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 14l3-3V8a1 1 0 00-1-1h-4a1 1 0 00-1 1v3l-6.293 6.293a1 1 0 001.414 1.414L12 14l6.293 6.293a1 1 0 001.414-1.414L15 14z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-400">Followers</p>
              <h2 className="text-2xl  font-bold mb-2">+91</h2>
            </div>
          </div>
          <hr className="mt-2" />
          <p className="mt-2 text-gray-400">
            <span className="text-green-800 font-bold"></span>
            Just updated
          </p>
        </div>
      </div>
    </div>
  );
}
