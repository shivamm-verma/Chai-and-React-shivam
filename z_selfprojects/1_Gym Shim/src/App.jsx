import { useState } from "react";
import "./index.css";
import Card from "./components/card";

function App() {
  return (
    <>
      {/* Navbar */}
      <div class="relative w-full bg-white">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div class="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                ></path>
              </svg>
            </span>
            <span class="font-bold">Gym Shim</span>
          </div>
          <div class="hidden grow items-start lg:flex">
            <ul class="ml-12 inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div class="hidden space-x-2 lg:block">
            <button
              type="button"
              class="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Sign In
            </button>
            <button
              type="button"
              class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log In
            </button>
          </div>
          <div class="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>

      {/* <div className="h-[150px] w-[150px] text-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/></svg></div> */}

      {/* SideBar */}
      {/* <aside class=" z-10 flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
        <a href="#">
          <svg
            width="40"
            height="46"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
              fill="black"
            ></path>
          </svg>
        </a>
        <div class="mt-6 flex flex-1 flex-col justify-between">
          <nav class="-mx-3 space-y-6 ">
            <div class="space-y-3 ">
              <label class="px-3 text-xs font-semibold uppercase text-gray-900">
                analytics
              </label>
              <a
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                  aria-hidden="true"
                >
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
                <span class="mx-2 text-sm font-medium">Dashboard</span>
              </a>
              <a
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                  <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                </svg>
                <span class="mx-2 text-sm font-medium">Sales</span>
              </a>
            </div>
            <div class="space-y-3 ">
              <label class="px-3 text-xs font-semibold uppercase text-gray-900">
                content
              </label>
              <a
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                  <path d="M18 14h-8"></path>
                  <path d="M15 18h-5"></path>
                  <path d="M10 6h8v4h-8V6Z"></path>
                </svg>
                <span class="mx-2 text-sm font-medium">Blogs</span>
              </a>
              <a
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  <path d="M2 8c0-2.2.7-4.3 2-6"></path>
                  <path d="M22 8a10 10 0 0 0-2-6"></path>
                </svg>
                <span class="mx-2 text-sm font-medium">Notifications</span>
              </a>
              <a
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
                <span class="mx-2 text-sm font-medium">Checklists</span>
              </a>
            </div>
          </nav>
          <div class="mt-6">
            <div class="rounded-lg bg-gray-100 p-3 ">
              <h2 class="text-sm font-medium text-gray-800">
                New feature availabel!
              </h2>
              <p class="mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                harum officia eligendi velit.
              </p>
              <img
                class="mt-2 h-32 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1806&amp;q=80"
                alt="Feature"
              />
            </div>
            <div class="mt-6 flex items-center justify-between">
              <a href="#" class="flex items-center gap-x-2">
                <img
                  class="h-7 w-7 rounded-full object-cover"
                  src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                  alt="avatar"
                />
                <span class="text-sm font-medium text-gray-700">
                  Dan Abromov
                </span>
              </a>
              <a
                href="#"
                class="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside> */}

      {/* welcome alert */}
      <div class="navWelc rounded-md border-l-4 border-green-500 bg-green-100 p-2">
        <div class="flex items-center justify-between space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-green-600"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-green-600">
              Welcome to Gym Shim dot com
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 cursor-pointer text-green-600"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
      <br />

      <h1 className="text-center font-bold text-5xl m-0">Explore</h1>

      {/* Exercies Card Intro */}
      <div className="gym-exercises p-4 flex flex-row justify-center flex-wrap m-2">
        <Card />
        <Card
          imgTitle="Back Rowing[back]"
          imgLink="https://img.freepik.com/free-photo/shirtless-athletic-male-doing-workouts-muscles-back-power-weight-machine-gym-club_613910-1680.jpg?t=st=1716928035~exp=1716931635~hmac=cd5655b84ad8e340e425be59bba3475ba7e27360bcb3d6d204f6adde0614beb1&w=1060"
        />
        <Card
          imgLink="https://img.freepik.com/free-photo/full-shot-man-doing-burpees_23-2149517297.jpg?t=st=1716928163~exp=1716931763~hmac=0a3f69f8b2cf5fcfcca85bc761744d5a1974060871885e0183e35bff1e3eb201&w=1060"
          imgTitle="Pushups[chest]"
        />
        <Card
          imgLink="https://img.freepik.com/free-photo/strong-man-training-gym_1303-23876.jpg?t=st=1716928222~exp=1716931822~hmac=d94311620bcc8614bbb62315c0abfb69d5d52b1535f78919953d673888adbaf8&w=1060"
          imgTitle="Cardio"
        />
        <Card
          imgLink="https://img.freepik.com/free-photo/handsome-young-athlete-working-out-gym_7502-5021.jpg?t=st=1716928399~exp=1716931999~hmac=e276efa60fc78514a1d474c979886fbade4586b59e28c42b33fb16e0c0f62578&w=1060"
          imgTitle="Bent Over DB Row[back]"
        />
        <Card
          imgLink="https://img.freepik.com/free-photo/young-adult-doing-indoor-sport-gym_23-2149205568.jpg?t=st=1716928468~exp=1716932068~hmac=23512d4d16066065330c70e84fb9bf1258c8e7a92dbcd584bcc428d719102c84&w=1060"
          imgTitle="Hyperextension[glutes]"
        />
        <Card
          imgLink="https://cdn.pixabay.com/photo/2013/02/09/04/19/weights-79587_1280.jpg"
          imgTitle="Deadlift[back]"
        />
        <Card
          imgLink="https://cdn.pixabay.com/photo/2022/05/16/14/44/woman-7200524_1280.jpg"
          imgTitle="???[??]"
        />
        <Card
          imgLink="https://cdn.pixabay.com/photo/2020/11/10/15/11/weightlifting-5730110_1280.jpg"
          imgTitle="Squats[legs]"
        />
        <Card
          imgLink="https://img.freepik.com/free-photo/young-man-working-out-gym-bodybuilding_23-2149552309.jpg?t=st=1716928769~exp=1716932369~hmac=918f522c033eb76b072484a3955db35494c55a46dd4a8e00ccdd2be1c8661ec8&w=1060"
          imgTitle="Rest"
        />
        <Card
          imgLink="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/05/shutterstock_336330470-scaled.jpg?fit=2560%2C1707&ssl=1"
          imgTitle="Overhead Press[shoulders]"
        />
        <Card
          imgLink="https://cdn.mos.cms.futurecdn.net/bVHCCLBjn9qKXWmUNXuiXd.jpg"
          imgTitle="Abs Crunches[abdominal]"
        />
        <Card
          imgLink="https://www.garagegymreviews.com/wp-content/uploads/coop-doing-barbell-bench-press.jpg"
          imgTitle="Bench Press[chest]"
        />
        <Card
          imgLink="https://www.garagegymreviews.com/wp-content/uploads/woman-doing-a-cable-upright-row.jpg"
          imgTitle="Upright Rows[shoulders]"
        />
        <Card
          imgLink="https://www.dmoose.com/cdn/shop/articles/Feature-image_535c6f0b-08ae-4264-9c22-e1943b53013e.jpg?v=1680860841"
          imgTitle="Lat Pulldown[back]"
        />
        <Card
          imgLink="https://www.borntough.com/cdn/shop/articles/A_beginners_Guide-_The_Best_10_Tricep_Exercises_for_Beginners.jpg?v=1637678733"
          imgTitle="Triceps Pushdown[triceps]"
        />
      </div>

      <br />

      <h1 className="text-center font-bold text-5xl mt-5">Our Staff</h1>
      <section class="mx-auto w-full max-w-7xl px-4 py-4">
        <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 class="text-lg font-semibold">Employees</h2>
            <p class="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <a href="#">Go Home</a>
            </button>
          </div>
        </div>
        <div class="mt-6 flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Role
                      </th>
                      <th scope="col" class="relative px-4 py-3.5">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Shivam Verma
                            </div>
                            <div class="text-sm text-gray-700">
                              shivam@gymshim.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900 ">Gym Owner</div>
                        <div class="text-sm text-gray-700">Engineering</div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        Owner
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" class="text-gray-700">
                          Edit
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Nikhil Kumar
                            </div>
                            <div class="text-sm text-gray-700">
                              NikhilKum@gymshim.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900 ">
                          Professional Trainer
                        </div>
                        <div class="text-sm text-gray-700">Engineering</div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        P-tag Trainer
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" class="text-gray-700">
                          Remove
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full object-cover"
                              src="https://i.pinimg.com/474x/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.jpg"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Aaryan Sharma
                            </div>
                            <div class="text-sm text-gray-700">
                              Aryansharma@gymshim.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900 ">Trainer</div>
                        <div class="text-sm text-gray-700">Engineering</div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        Trainer
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" class="text-gray-700">
                          Remove
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      <br /><br />
      {/* testimonials */}
      <h1 className="text-center font-bold text-5xl m-0 pb-2 mt-7">Testimonials</h1>
      <section class="px-2 py-10 md:px-0 mb-0">
        <div class="mx-auto max-w-4xl">
          <div class="md:flex md:items-center md:justify-center md:space-x-14">
            <div class="relative h-48 w-48 flex-shrink-0">
              <img
                class="relative h-48 w-48 rounded-full object-cover"
                src="https://e1.pxfuel.com/desktop-wallpaper/427/4/desktop-wallpaper-chris-bumstead-classic-physique.jpg"
                alt=""
              />
            </div>
            <div class="mt-10 md:mt-0">
              <blockquote>
                <p class="text-xl text-black">
                  "Under the guidance of Shivam Verma, Gym Shim has been
                  life-changing. Regular workouts here have not only improved my
                  health but also boosted my confidence and energy levels. I
                  truly believe in the power of fitness for a longer, happier
                  life."
                </p>
              </blockquote>
              <p class="mt-7 text-lg font-semibold text-black">Chris Bumstead</p>
              <p class="mt-1 text-base text-gray-600">
                Professional Bodybuilder Athelete
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      {/* Get to Know US Better */}
      <div className="flex justify-center">
        <div class="flex  w-full items-center space-x-2 md:w-1/3 m-4">
          <input
            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Email"
          />
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Contact Us
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
