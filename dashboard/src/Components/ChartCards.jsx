// import React from 'react'
import "./Styles/ChartCards.css";
export default function ChartCards() {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 bg-white p-4 rounded-md shadow-md mr-4">
          <img
            src="https://i.pinimg.com/564x/6f/83/cc/6f83cc84b8fe572494ba8a81180f5b76.jpg"
            alt="Card 5 Image"
            className="mb-6 rounded-lg shadow-md"
          />
          <div className="p-2">
            <h2 className="head-text">Website281</h2>
            <p className="text-gray-400">Last Campaign Performance</p>
            <br />
            <hr />
            <div className="flex items-center mt-3">
              <svg
                className="h-4 w-4 text-gray-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2zM12 6v6l5.79 3.48 1.41-2.33L12 6z"
                />
              </svg>
              <span className="text-gray-400">campaign sent 2 days ago</span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-md shadow-md mr-4">
          <img
            src="https://i.pinimg.com/564x/97/c4/f2/97c4f2f501f3446cda7b2adf4360bee3.jpg"
            alt="Website Views Image"
            className="mb-6 rounded-lg shadow-md"
          />
          <div className="p-2">
            <h2 className="head-text">Daily Sales</h2>
            <p className="text-gray-400">(+15%) increase in today sales.</p>
            <br />
            <hr />
            <div className="flex items-center mt-3">
              <svg
                className="h-4 w-4 text-gray-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2zM12 6v6l5.79 3.48 1.41-2.33L12 6z"
                />
              </svg>
              <span className="text-gray-400">updated 4 min ago</span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white p-4 rounded-md shadow-md">
          <img
            src="https://i.pinimg.com/564x/2b/47/85/2b47858564a375b6628025752d3f74cf.jpg"
            alt="Card 5 Image"
            className="mb-6 rounded-lg shadow-md"
          />
          <div className="p-2">
            <h2 className="head-text">Completed Tasks</h2>
            <p className="text-gray-400">Last Campaign Performance</p>
            <br />
            <hr />
            <div className="flex items-center  mt-3">
              <svg
                className="h-4 w-4 text-gray-400 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2zM12 6v6l5.79 3.48 1.41-2.33L12 6z"
                />
              </svg>
              <span className="text-gray-400">just updated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
