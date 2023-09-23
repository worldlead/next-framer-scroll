import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { text: "about", href: "/about" },
    { text: "features", href: "/features" }, // Added "features" link
  ];

  return (
    <>
      <div className="flex justify-between items-center px-14 text-black h-16 fixed top-8 w-full transition-colors duration-500 z-40">
        <nav>
          <ul className="flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="inline-block -mx-2 -my-1 px-2 py-1 text-sm"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/">
          <Image src="/assets/logo.svg" alt="Logo" width="71" height="30" />
        </Link>

        <nav>
          <ul className="flex items-center">
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
      </div>
    </>
  );
}
