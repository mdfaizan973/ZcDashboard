export default function Footer() {
  return (
    <div>
      <footer className="flex items-center justify-between p-5 text-center">
        <p className="text-sm">
          © 2023, made with ❤️ by{" "}
          <span className="font-bold">Creative Tim</span> for a better web.
        </p>
        <div className="flex justify-end mt-2">
          <a href="#" className="mx-2 text-gray-500">
            Creative Tim
          </a>
          <a href="#" className="mx-2 text-gray-500">
            About Us
          </a>
          <a href="#" className="mx-2 text-gray-500">
            Blog
          </a>
          <a href="#" className="mx-2 text-gray-500">
            License
          </a>
        </div>
      </footer>
    </div>
  );
}
