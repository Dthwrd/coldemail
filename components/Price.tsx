import Link from "next/link";
import React from "react";

const Price = () => {
  return (
    <section className="flex flex-col items-center gap-y-6 h-screen py-32">
      <h1 className="text-6xl font-bold">Price Per Domain</h1>
      <p className="text-lg text-slate-400">
        Setup unlimited email accounts per domain name at no extra cost.
      </p>
      <div className="flex p-10 font-semibold rounded-xl gap-x-16 border border-slate-600 w-[70%]">
        <div>
          <h2 className="text-2xl pb-6">With each domain you get:</h2>
          <div className="flex gap-x-10">
            <div className="flex shrink-0 flex-col gap-y-3 text-xl">
              <p>1x domain name</p>
              <p>unlimited email accounts setup</p>
              <p className="pt-14">Unlimited AI warmup included</p>
              <p>Deliverability reports</p>
            </div>
            <div className="flex flex-col gap-y-3 text-xl">
              <p>Google Workspace Setup *</p>
              <p>
                Automatic DNS setup{" "}
                <span className="italic text-sm">
                  optimized for cold email deliverability (SPF, DKIM, DMARC,
                  email forwarding, primary domain redirect …)
                </span>
              </p>
              <p>instantly/smartlead export</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-bold">$19</h1>
            <p className="text-sm font-normal text-slate-400">/ Domain Name</p>
          </div>
          <Link
            href="/"
            className="font-normal text-sm text-center text-slate-950 py-3 rounded-md bg-blue-500"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 w-[70%] px-4 text-neutral text-slate-400">
        <p className="w-[90%]">
          * You can choose between Google Workspace, our free shared SMTP server
          or a private Dedicated IP SMTP server (coming soon) as your email
          provider.
        </p>
        <p>
          ** Google workspace incurs an additional{" "}
          <strong>$4.6/email/month</strong> after the 14 days trial.
        </p>
      </div>
    </section>
  );
};

export default Price;
