import { useState } from "react";
import "./App.css";
import Card from "./components/cards";

function App() {
  return (
    <>
      <h1 className="w-[300px] bg-green-500 text-black p-4 rounded-xl">
        Tailwind CSS
      </h1>
      <h2>Myself Shivam</h2>
      <p className="mb-10">I like to create React Applications.</p>

      {/* Tailwind CSS Component */}
      {/* Just Copied Paste */}
      {/* <div class="relative z-10" role="dialog" aria-modal="true">
        <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg"
                      alt="Two each of gray, white, and black shirts arranged on table."
                      class="object-cover object-center"
                    />
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                      Basic Tee 6-Pack
                    </h2>

                    <section aria-labelledby="information-heading" class="mt-2">
                      <h3 id="information-heading" class="sr-only">
                        Product information
                      </h3>

                      <p class="text-2xl text-gray-900">$192</p>

                      <div class="mt-6">
                        <h4 class="sr-only">Reviews</h4>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <svg
                              class="text-gray-900 h-5 w-5 flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <svg
                              class="text-gray-900 h-5 w-5 flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <svg
                              class="text-gray-900 h-5 w-5 flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <svg
                              class="text-gray-900 h-5 w-5 flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <svg
                              class="text-gray-200 h-5 w-5 flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <p class="sr-only">3.9 out of 5 stars</p>
                          <a
                            href="#"
                            class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            117 reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" class="mt-10">
                      <h3 id="options-heading" class="sr-only">
                        Product options
                      </h3>

                      <form>
                        <fieldset aria-label="Choose a color">
                          <legend class="text-sm font-medium text-gray-900">
                            Color
                          </legend>

                          <div class="mt-4 flex items-center space-x-3">
                            <label
                              aria-label="White"
                              class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400"
                            >
                              <input
                                type="radio"
                                name="color-choice"
                                value="White"
                                class="sr-only"
                              />
                              <span
                                aria-hidden="true"
                                class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
                              ></span>
                            </label>
                            <label
                              aria-label="Gray"
                              class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400"
                            >
                              <input
                                type="radio"
                                name="color-choice"
                                value="Gray"
                                class="sr-only"
                              />
                              <span
                                aria-hidden="true"
                                class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"
                              ></span>
                            </label>
                            <label
                              aria-label="Black"
                              class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900"
                            >
                              <input
                                type="radio"
                                name="color-choice"
                                value="Black"
                                class="sr-only"
                              />
                              <span
                                aria-hidden="true"
                                class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
                              ></span>
                            </label>
                          </div>
                        </fieldset>

                        <fieldset class="mt-10" aria-label="Choose a size">
                          <div class="flex items-center justify-between">
                            <div class="text-sm font-medium text-gray-900">
                              Size
                            </div>
                            <a
                              href="#"
                              class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Size guide
                            </a>
                          </div>

                          <div class="mt-4 grid grid-cols-4 gap-4">
                            <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XXS"
                                class="sr-only"
                              />
                              <span>XXS</span>
                              <span
                                class="pointer-events-none absolute -inset-px rounded-md"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XS"
                                class="sr-only"
                              />
                              <span>XS</span>
                              <span
                                class="pointer-events-none absolute -inset-px rounded-md"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="S"
                                class="sr-only"
                              />
                              <span>S</span>
                              <span
                                class="pointer-events-none absolute -inset-px rounded-md"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="M"
                                class="sr-only"
                              />
                              <span>M</span>
                              <span
                                class="pointer-events-none absolute -inset-px rounded-md"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="L"
                                class="sr-only"
                              />
                              <span>L</span>
                              <span
                                class="pointer-events-none absolute -inset-px rounded-md"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XL"
                                class="sr-only"
                              />
                              <span>XL</span>
                              <span
                                class="pointer-events-none absolute -inset-px rounded-md"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XXL"
                                class="sr-only"
                              />
                              <span>XXL</span>
                              <span
                                class="pointer-events-none absolute -inset-px rounded-md"
                                aria-hidden="true"
                              ></span>
                            </label>
                            <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-not-allowed bg-gray-50 text-gray-200">
                              <input
                                type="radio"
                                name="size-choice"
                                value="XXXL"
                                disabled
                                class="sr-only"
                              />
                              <span>XXXL</span>
                              <span
                                aria-hidden="true"
                                class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1="0"
                                    y1="100"
                                    x2="100"
                                    y2="0"
                                    vector-effect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            </label>
                          </div>
                        </fieldset>

                        <button
                          type="submit"
                          class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add to bag
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* www.devui.io */}
      <div className="flex flex-cont">
        <Card aboutWho="Dog" btnText="Read about me" />
        <Card aboutWho="Cat" btnText="Meow Meow me" />
        <Card aboutWho="Human" btnText="How are you?" />
        <Card aboutWho="Woman" />
        {/* <Card /> */}
      </div>
    </>
  );
}

export default App;
