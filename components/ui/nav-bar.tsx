import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full border-0 py-4 lg:px-24 px-0 bg-gray-950">
      <h1 className="text-3xl text-white">
        <Link href="/">
          Tasty React Next.js
        </Link>
      </h1>
    </nav>
  );
}