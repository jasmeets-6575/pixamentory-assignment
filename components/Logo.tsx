import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-2xl font-bold tracking-wider cursor-pointer"
    >
      LOGO
    </Link>
  );
};
export default Logo;
