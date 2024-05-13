import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <h1>Shivam is using React+Vite</h1>

    <>
      {/* Empty Div Tags */}
      <h1>Introductions to ReactJs</h1>
      <p>React Js App can be created by the followings:</p>
      <h2>$ npx create-react-app folderName</h2>
      <h2>$ npm create vite@latest (and following commands)</h2>
    </>
  );
}

export default App;
