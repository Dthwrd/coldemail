import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-6">
      <div className="flex gap-x-12 items-center font-semibold">
        <Link href="#" className="text-lg">
          ColdEmail.Domains
        </Link>
        <div className="flex gap-x-6 text-neutral-400 text-sm">
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
        </div>
      </div>
      <Link
        href="#"
        className="px-4 py-2 bg-slate-800 text-sm font-semibold rounded-md"
      >
        Dashboard
      </Link>
    </header>
  );
};

export default Header;
