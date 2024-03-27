import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-slate-300 bg-slate-900 flex justify-center items-center p-7 gap-8 text-lg md:text-xl">
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Skills</Link>
      <Link href={"/"}>Certifications</Link>
      <Link href={"/"}>Contact</Link>
    </nav>
  );
};

export default Navbar;
