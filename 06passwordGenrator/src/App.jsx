import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();
  const renderCount = useRef(0);

  // useRef hook
  const passwordRef = useRef(null);

  // usecallback is for Optimization & Memoization(mem mgmt.)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstubbwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-/?~";

    for (let i = 1; i <= length; i++) {
      const randomNum = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomNum);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
    renderCount.current += 1;
    document.title = `Render Count: ${renderCount.current}`;
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      {/* <h1 className="text-white text-5xl text-center px-4  py-3 font-semibold">
        Password Generator
      </h1> */}
      <div className="my-16 w-full max-w-2xl mx-auto shadow-md shadow-[#a2a570] rounded-lg px-8 text-black bg-yellow-200 font-bold text-center text-3xl py-3">
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4 text-lg font-normal">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 m-4"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-500 text-white px-3 py-0.5 hover:bg-blue-600 active:bg-blue-700 duration-100 shrink-0"
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-xl gap-x-2 p-3">
          <div className="flex items-center gap-x-1 mx-4">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              //to actually make range move
            />
            <label>Length: {length}</label>
          </div>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numInp"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInp"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>

      <h1 className="text-4xl text-center text-black bg-white py-2">
        Render Count: {renderCount.current}
      </h1>
    </>
  );
}

export default App;
