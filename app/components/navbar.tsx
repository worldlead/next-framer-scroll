import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="px-14 text-black h-16 fixed top-16 w-full transition-colors duration-500 z-40">
        <ul className="flex justify-between items-center">
          <li>
            <Link
              href="/about"
              className="inline-block -mx-2 -my-1 px-2 py-1 text-sm"
            >
              about
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width="71"
                height="30"
                className=""
              />
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-sm px-10 py-3 rounded-[10px] shadow-lg bg-white"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
