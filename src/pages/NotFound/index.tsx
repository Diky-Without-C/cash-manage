import notfound from "@assets/images/404.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <img src={notfound} className="h-auto w-1/2" />
      <h1 className="text-xl font-bold text-gray-900">404 | Page Not Found</h1>
      <Link to="/" className="btn btn-primary btn-sm mt-4 rounded-lg">
        back to home
      </Link>
    </main>
  );
}
