import Configuration from "@/components/Configuration";
import Stepper from "@/components/Stepper";
import Link from "next/link";
import React from "react";

import { HiChevronLeft } from "react-icons/hi";

const page = () => {
  return (
    <main className="px-56 py-16 bg-slate-950 min-h-screen text-neutral-200">
      <div className="flex items-center">
        <Link href="/">
          <HiChevronLeft size={25} />
        </Link>
        <h1 className="text-4xl font-bold">Order Form</h1>
      </div>
      <div className="flex py-24 gap-x-56">
        <Stepper />
        <Configuration />
      </div>
    </main>
  );
};

export default page;
