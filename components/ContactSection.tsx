
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-20 md:px-4 px-4">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-neutral-200 bg-[#fafafa] md:p-6 p-0 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          {/* Left Card */}
          <div className="space-y-5">
          <div className="relative h-[450px] overflow-hidden rounded-[28px]">
  <Image
    src="/gricultureai.jpg"
    alt="Partnership"
    fill
    priority
     sizes="(max-width: 768px) 100vw, 33vw"
    className="
      object-cover
      transition-transform
      duration-700
      hover:scale-110
    "
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
</div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-neutral-500">
                    Partnerships and Collaborations
                  </p>

                  <a
                    href="mailto:collabs@forhelp.com"
                    className="mt-2 block text-base font-medium text-neutral-900"
                  >
                    collabs@forhelp.com
                  </a>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white transition hover:scale-105">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-600 font-medium">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600 font-medium">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-lime-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-600 font-medium">
                    Phone
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="w-full rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-lime-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-600 font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Enter your Message"
                  className="w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-lime-400"
                />
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <label className="flex items-center gap-3 text-sm text-neutral-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300"
                  />
                  I agree with Terms of Use and Privacy Policy
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-black"
                >
                  Send your Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}