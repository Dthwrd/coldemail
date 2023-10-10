"use client";

import { usePathname } from "next/navigation";
import React from "react";

import {
  HiOutlineBriefcase,
  HiAtSymbol,
  HiOutlineUser,
  HiOutlineBadgeCheck,
} from "react-icons/hi";

const Stepper = () => {
  const pathname = usePathname();

  return (
    <ol className="relative border-l border-gray-500 h-full ml-8 w-72">
      <li
        className={`flex justify-center items-center mb-24 ml-14 ${
          pathname === "/configuration" ? "text-gray-200" : "text-gray-500"
        }`}
      >
        <span
          className={`absolute flex items-center justify-center w-16 h-16 bg-slate-950 rounded-full -left-8 ring-2 ${
            pathname === "/configuration" ? "ring-gray-200" : "ring-gray-500"
          }`}
        >
          <HiOutlineBriefcase size={25} />
        </span>
        <div
          className={
            pathname === "/configuration" ? "text-gray-200" : "text-gray-500"
          }
        >
          <h3 className="font-medium leading-tight">Configuration</h3>
          <p className="text-sm">Step details here</p>
        </div>
      </li>
      <li
        className={`flex justify-center items-center mb-24 ml-14 ${
          pathname === "/domains" ? "text-gray-200" : "text-gray-500"
        }`}
      >
        <span
          className={`absolute flex items-center justify-center w-16 h-16 bg-slate-950 rounded-full -left-8 ring-2 ${
            pathname === "/domains" ? "ring-gray-200" : "ring-gray-500"
          }`}
        >
          <HiAtSymbol size={25} />
        </span>
        <div
          className={pathname === "/domains" ? "text-gray-200" : "text-gray-500"}
        >
          <h3 className="font-medium leading-tight">Add Domains</h3>
          <p className="text-sm">Step details here</p>
        </div>
      </li>
      <li
        className={`flex justify-center items-center mb-24 ml-14 ${
          pathname === "/emails" ? "text-gray-200" : "text-gray-500"
        }`}
      >
        <span
          className={`absolute flex items-center justify-center w-16 h-16 bg-slate-950 rounded-full -left-8 ring-2 ${
            pathname === "/emails" ? "ring-gray-200" : "ring-gray-500"
          }`}
        >
          <HiOutlineUser size={25} />
        </span>
        <div
          className={pathname === "/emails" ? "text-gray-200" : "text-gray-500"}
        >
          <h3 className="font-medium leading-tight">Add Emails</h3>
          <p className="text-sm">Step details here</p>
        </div>
      </li>
      <li
        className={`flex justify-center items-center ml-14 ${
          pathname === "/confirmation" ? "text-gray-200" : "text-gray-500"
        }`}
      >
        <span
          className={`absolute flex items-center justify-center w-16 h-16 bg-slate-950 rounded-full -left-8 ring-2 ${
            pathname === "/confirmation" ? "ring-gray-200" : "ring-gray-500"
          }`}
        >
          <HiOutlineBadgeCheck size={30} />
        </span>
        <div>
          <h3 className="font-medium leading-tight">Confirmation</h3>
          <p className="text-sm">Step details here</p>
        </div>
      </li>
    </ol>
  );
};

export default Stepper;
