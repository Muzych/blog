import { Link } from "@remix-run/react";

export default function NavLink() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            首页
          </Link>
        </li>
        <li>
          <Link to="/posts" className="hover:underline">
            博客文章
          </Link>
        </li>
      </ul>
    </nav>
  );
}