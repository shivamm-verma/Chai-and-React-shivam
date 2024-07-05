import { CheckCircle } from "lucide-react";
import React from "react";

export function Pricing() {
  return (
    <div className="mx-auto max-w-7xl pt-4">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="px-4 py-10 lg:col-span-5 lg:px-0">
          <span className="mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold">
            Pricing that fits your budget
          </span>
          <h1 className="text-3xl font-bold md:text-5xl">
            Join our Plus Memberships.
          </h1>
          <p className="mt-8 font-medium">
            Learn the react router in most accessible formats, whether it
            Mobile, Tablet, Laptop or TV. Also get Full Access to our community
            and leaderboards, to know where you lie in a Crowd!
          </p>
          <h1 className="mt-8 text-xl font-semibold">Got a Query? Ask.</h1>
          <div className="mt-4 flex w-full max-w-sm items-center space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
          <div className="w-full p-5 md:w-1/2">
            <div className="rounded-md border bg-white bg-opacity-90">
              <div className=" border-b">
                <div className="px-9 py-7">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                    Basic
                  </h3>
                  <p className="font-medium leading-relaxed text-gray-500">
                    Get premium badges, Quick support and many more!!
                  </p>
                </div>
              </div>
              <div className="px-9 pb-9 pt-8">
                <p className="mb-6 font-medium leading-relaxed text-gray-600">
                  Features included:
                </p>
                <ul className="mb-11">
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      10 Team Members
                    </p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      500+ Resources
                    </p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Premium Badges
                    </p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      10 FreeMails to Leaders
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Quick Support
                    </p>
                  </li>
                </ul>
                <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                  <span>Starting from</span>
                  <span className="ml-2 text-gray-900">₹259/mo</span>
                </p>
                <div className="md:inline-block">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Start your free trial
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-5 md:w-1/2">
            <div className="rounded-md border bg-white bg-opacity-90">
              <div className=" border-b">
                <div className="px-9 py-7">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                    Pro
                    <span className="m-0 ml-3 inline-block rounded-full border p-1 px-3 text-xs font-semibold opacity-100">
                      Contains all features of Basic
                    </span>
                  </h3>
                  <p className="font-medium leading-relaxed text-gray-500">
                    Get direct-messaging to Leaders, ask Doubts, get contact of
                    High Achievers and many more!!
                  </p>
                </div>
              </div>
              <div className="px-9 pb-9 pt-8">
                <p className="mb-6 font-medium leading-relaxed text-gray-600">
                  Features included:
                </p>
                <ul className="mb-11">
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Unlimited team Creation
                    </p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      1200+ Free Resources
                    </p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      contact of High Achievers
                    </p>
                  </li>
                  <li className="mb-4 flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Individual Email Account
                    </p>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    <p className="font-semibold leading-normal">
                      Direct-messaging to Leaders
                    </p>
                  </li>
                </ul>
                <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                  <span>Starting from</span>
                  <span className="ml-2 text-gray-900">₹799/mo</span>
                </p>
                <div className="md:inline-block">
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Start your free trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
