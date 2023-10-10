"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";

const Emails = () => {
  const [emails, setEmails] = useState<number[]>([]);
  const [email, setEmail] = useState(0);

  const removeEmail = (index: number) => {
    const newEmail = emails.filter((email) => email !== index);
    setEmails(newEmail);
  };

  return (
    <div className="flex flex-col gap-y-10 w-full">
      <h3 className="text-2xl font-semibold">3. Add Emails</h3>
      {!emails
        ? ""
        : emails.map((email, i) => (
            <div key={i} className="flex flex-col gap-y-6">
              <div className="flex gap-x-4">
                <h1>Email {i + 1}</h1>
                <button onClick={() => removeEmail(email)}>
                  <HiOutlineTrash size={20} />
                </button>
              </div>
              <div className="flex gap-x-4 items-center">
                <Input
                  type="text"
                  id="text"
                  placeholder="Username"
                  className="bg-transparent w-[60%]"
                />
                <span className="text-2xl">@</span>
                <Select>
                  <SelectTrigger className="w-full bg-transparent">
                    <SelectValue placeholder="Select Your Domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yourdomain1@gmail.com">
                      yourdomain1@gmail.com
                    </SelectItem>
                    <SelectItem value="yourdomain2@gmail.com">
                      yourdomain2@gmail.com
                    </SelectItem>
                    <SelectItem value="yourdomain3@gmail.com">
                      yourdomain3@gmail.com
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select>
                <SelectTrigger className="w-full bg-transparent">
                  <SelectValue placeholder="Select Your Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="provider1">provider1</SelectItem>
                  <SelectItem value="provider2">provider2</SelectItem>
                  <SelectItem value="provider3">provider3</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full bg-transparent">
                  <SelectValue placeholder="Select Your Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="persona1">persona1</SelectItem>
                  <SelectItem value="persona2">persona2</SelectItem>
                  <SelectItem value="persona3">persona3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
      <button
        onClick={() => {
          setEmail((prev) => prev + 1);
          setEmails([...emails, email]);
        }}
        className="flex w-[60px] justify-center items-center px-4 py-2 bg-neutral-200 text-neutral-950 rounded-md"
      >
        <HiOutlinePlus />
      </button>
      <div className="flex gap-x-4 justify-end pt-14">
        <Link
          href="/domains"
          className="px-8 py-2 bg-neutral-200 text-neutral-950 rounded-md"
        >
          Back
        </Link>
        <Link
          href="/confirmation"
          className="px-8 py-2 bg-neutral-200 text-neutral-950 rounded-md"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Emails;
