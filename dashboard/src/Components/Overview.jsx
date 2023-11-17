// import React from 'react'
import "./Styles/Overview.css";
export default function Overview() {
  return (
    <div className="main-overview bg-white">
      <div className="p-4 text-md font-bold">
        Orders overview
        <br />
        <span className="text-gray-400 flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-3 font-bold text-green-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          24% this month
        </span>
      </div>

      <div className="max-w-md mx-auto mt-2 p-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-bold">$2400, Design changes</p>
              <p className="text-gray-500 text-xs">22 DEC 7:20 PM</p>
            </div>
          </div>

          <div className="flex items-center space-y-3 space-x-4">
            <div className="h-6 w-6 bg-red-500 rounded-full flex items-center justify-center">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-bold">New order #1832412</p>
              <p className="text-gray-500 text-xs">21 DEC 11 PM</p>
            </div>
          </div>

          <div className="flex items-center space-y-3 space-x-4">
            <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-bold">
                Server payments for April
              </p>
              <p className="text-gray-500 text-xs">21 DEC 9:34 PM</p>
            </div>
          </div>

          <div className="flex items-center space-y-3 space-x-4">
            <div className="h-6 w-6 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-bold">
                New card added for order #4395133
              </p>
              <p className="text-gray-500 text-xs">20 DEC 2:20 AM</p>
            </div>
          </div>

          <div className="flex items-center space-y-3 space-x-4">
            <div className="h-6 w-6 bg-pink-500 rounded-full flex items-center justify-center">
              {" "}
              <svg
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-600 font-bold">
                New card added for order #4395133
              </p>
              <p className="text-gray-500 text-xs">18 DEC 4:54 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
