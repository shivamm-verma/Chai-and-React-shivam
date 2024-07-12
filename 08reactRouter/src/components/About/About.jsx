import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function About() {
  document.title = "About Us";
  return (
    <div className="py-16 bg-whit dark:bg-slate-800">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Welcome to our guide on React Router, the essential tool for
              navigating between different views in your React applications
              seamlessly. Whether you're a beginner or an experienced developer,
              understanding React Router is crucial for building dynamic and
              responsive single-page applications. React Router enables you to
              manage routing declaratively within your components, allowing you
              to create a smooth user experience with URLs that reflect the
              current application state. With features like nested routes, URL
              parameters, and dynamic routing, React Router empowers you to
              create complex navigation structures effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
