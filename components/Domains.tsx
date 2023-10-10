"use client";

import React, { useState } from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import {HiOutlineTrash, HiOutlinePlus} from "react-icons/hi"

const Domains = () => {
  const [domains, setDomains] = useState<string[]>([]);
  const [domain, setDomain] = useState<string>("");

  const addDomain = () => {
    if (domain !== "") {
      setDomains([...domains, domain]);
      setDomain("");
    }
  };

  const removeDomain = (text: string) => {
    const newDomain = domains.filter((dom) => dom !== text);
    setDomains(newDomain);
  };

  return (
    <div className="flex flex-col gap-y-10 w-full">
      <h3 className="text-2xl font-semibold">2. Add Domains</h3>
      <div className="flex gap-x-4">
        <Input
          type="text"
          id="text"
          placeholder="Add your domains"
          className="bg-transparent w-full"
          onChange={(e) => setDomain(e.target.value)}
          value={domain}
        />
        <button
          onClick={addDomain}
          className="flex justify-center items-center px-4 py-2 bg-neutral-200 text-neutral-950 rounded-md"
        >
          <HiOutlinePlus />
        </button>
      </div>
      {!domains
        ? ""
        : domains.map((dom, i) => (
            <div key={i} className="flex group gap-x-4">
              <Input
                type="text"
                id="text"
                placeholder="Add your domains"
                className="bg-transparent w-full"
                onChange={(e) => setDomain(e.target.value)}
                value={dom}
              />
              <button
                onClick={() => removeDomain(dom)}
                className="flex justify-center items-center px-4 py-2 bg-neutral-200 text-neutral-950 rounded-md"
              >
                <HiOutlineTrash />
              </button>
            </div>
          ))}
      <div className="flex gap-x-4 justify-end pt-14">
        <Link
          href="/configuration"
          className="px-8 py-2 bg-neutral-200 text-neutral-950 rounded-md"
        >
          Back
        </Link>
        <Link
          href="/emails"
          className="px-8 py-2 bg-neutral-200 text-neutral-950 rounded-md"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Domains;
