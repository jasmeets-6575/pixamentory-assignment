import Link from "next/link";
import Logo from "./Logo";

interface linksType {
  id: number;
  href: string;
  text: string;
}

const links: linksType[] = [
  {
    id: 1,
    href: "/",
    text: "Home",
  },
  {
    id: 2,
    href: "/services",
    text: "Services",
  },
  {
    id: 3,
    href: "/about",
    text: "About",
  },
  {
    id: 4,
    href: "/contact",
    text: "Contact",
  },
];
const Sidebar = () => {
  return (
    <section className="hidden md:block bg-[#222831] h-screen mt-4 p-2 w-72">
      <Logo />

      <div className="text-gray-300 w-full flex flex-col tracking-wider text-lg mt-20 gap-y-3">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className="px-4 my-3 bg-[#2f2e41] rounded-md font-semibold"
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Sidebar;
