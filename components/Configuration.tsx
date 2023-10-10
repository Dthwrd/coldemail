import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Configuration = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full">
      <h3 className="text-2xl font-semibold">1. Configuration</h3>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="email">Redirect to: </Label>
        <Input
          type="text"
          id="text"
          placeholder="Your Link"
          className="bg-transparent w-full"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="text">Redirect to: </Label>
        <Input
          type="text"
          id="email"
          placeholder="Address"
          className="bg-transparent w-full"
        />
      </div>
      <div className="flex gap-x-4 justify-end pt-14">
        <Link
          href="/domains"
          className="px-8 py-2 bg-neutral-200 text-neutral-950 rounded-md"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Configuration;
