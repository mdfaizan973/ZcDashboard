export default function Sidebar() {
  return (
    <div>
      <div className="w-1/5 bg-gray-800 text-center rounded-md shadow-md p-6 mx-auto">
        <div className="flex items-center space-x-2">
          <img
            src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/logo-ct.png"
            alt="Dashboard Logo"
            className="h-6 w-6"
          />
          <span className="text-sm text-white font-semibold">My Dashboard</span>
        </div>
        <hr className="mt-4" />
      </div>
    </div>
  );
}
