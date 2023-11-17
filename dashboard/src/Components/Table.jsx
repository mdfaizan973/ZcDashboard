// import React from 'react'
import "./Styles/Table.css";
export default function Table() {
  const data = [
    {
      img: "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-xd.6e37886f94dba0c2967ece68a152e30c.svg",
      text: "Material UI XD Version",
      progressValue: "60",
      budget: "$14,000",
    },
    {
      img: "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-atlassian.f2b0e8570a4b4ce768854ff3dad1a6e1.svg",
      text: "Add Progress Track",
      progressValue: "10",
      budget: "$3,000",
    },
    {
      img: "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-slack.7c47c5aa474b5c4fb39fcf05ffb8e4e7.svg",
      text: "Fix Platform Errors",
      progressValue: "100",
      budget: "Not Set",
    },
    {
      img: "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-spotify.e83cf56c9d99a1fdf59e8deb58bbe470.svg",
      text: "Launch our Mobile App",
      progressValue: "100",
      budget: "$20,500",
    },
    {
      img: "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-jira.c19fd4e416babfbd0fdb0a794188c601.svg",
      text: "Add the New Pricing Page",
      progressValue: "30",
      budget: "$500",
    },
    {
      img: "https://demos.creative-tim.com/material-dashboard-react/static/media/logo-invision.a1062115730dcd10e1c4f4abe7b9ab33.svg",
      text: "Redesign New Online Shop",
      progressValue: "40",
      budget: "$2,000",
    },
  ];
  return (
    <div className="main-table bg-white">
      <nav className="p-4 flex justify-between items-center">
        <div className=" text-md font-bold">
          Projects
          <br />
          <span className="text-gray-400 flex mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-800 h-6 w-6"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            30 done this month
          </span>
        </div>

        <div className="text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" h-6 w-6"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </div>
      </nav>
      {/* Table */}
      <div className="mt-3">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className=" overflow-hidden  sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Companies
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Members
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Budget
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Completion
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((ele, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap flex items-center">
                          <img
                            src={ele.img}
                            className="h-7 w-67 mr-2"
                            alt="Material UI XD Logo"
                          />
                          <span className="text-sm font-bold text-gray-600">
                            {ele.text}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap ">
                          <div className="flex">
                            <img
                              src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
                              className="h-6 w-67 mr-2 rounded-full"
                              alt="Material UI XD Logo"
                            />
                            <img
                              src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
                              className="h-6 w-67 mr-2 rounded-full z-10 -ml-5"
                              alt="Material UI XD Logo"
                            />
                            <img
                              src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
                              className="h-6 w-67 mr-2 rounded-full z-20 -ml-5"
                              alt="Material UI XD Logo"
                            />
                            <img
                              src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg"
                              className="h-6 w-67 mr-2 rounded-full z-20 -ml-5"
                              alt="Material UI XD Logo"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-bold text-gray-500 whitespace-nowrap">
                          {ele.budget}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="relative w-full h-2 bg-gray-200  rounded overflow-hidden">
                            <div
                              className="bg-blue-500 h-full"
                              style={{ width: `${ele.progressValue}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
