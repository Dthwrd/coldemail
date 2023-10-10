import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center py-8">
      <div className="flex items-center text-sm">
        ColdEmail.Domains -
        <Link href="/" className="underline pl-1">Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
