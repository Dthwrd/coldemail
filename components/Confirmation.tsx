import Link from "next/link";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Confirmation = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full">
      <h3 className="text-2xl font-semibold">4. Confirmation</h3>
      <div className="p-6 border border-neutral-200 rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xl font-semibold text-neutral-200 w-full">
                Domain List
              </TableHead>
              <TableHead className="text-xl font-semibold text-neutral-200 w-full"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="w-full text-right py-8 pr-4">Total: $$$</p>
        <button className="w-full py-2 bg-neutral-200 text-neutral-950 rounded-md">Pay</button>
      </div>

      <div className="flex gap-x-4 justify-end pt-14">
        <Link
          href="/emails"
          className="px-8 py-2 bg-neutral-200 text-neutral-950 rounded-md"
        >
          Prev
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
