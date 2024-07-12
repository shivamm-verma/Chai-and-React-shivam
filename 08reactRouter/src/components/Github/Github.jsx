import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/shivamm-verma")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center text-4xl bg-yellow-300 text-black font-semibold p-4 py-16 flex flex-row justify-evenly items-center">
      <img height="250" width="250" src={data.avatar_url} alt="" />
      <h1>Github Followers: {data.followers}</h1>
    </div>
  );
}

export default Github;

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shivamm-verma");
  return response.json();
};
