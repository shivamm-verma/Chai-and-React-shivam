import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen w-full duration-500 "
      style={{ backgroundColor: color }}      //syntax of bgc in style
      // Color is set to color (can be changed through setColor [userState])
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-3 py-2 shadow-2xl rounded-xl gap-3 text-white" 
        style={{backgroundColor: "#F9E79F"}}>
          <button
            className="outline-none px-5 py-2 rounded-3xl"
            style={{ backgroundColor: "Red" }}Blue
            onClick={() => setColor("Red")}
          >
            Red
          </button>
          <button
            className="outline-none px-5 py-2 rounded-3xl"
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("Blue")}            
          >
            Blue
          </button>
          <button
            className="outline-none px-5 py-2 rounded-3xl"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-5 py-2 rounded-3xl"
            style={{ backgroundColor: "Olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-5 py-2 rounded-3xl text-black font-semibold"
            style={{ backgroundColor: "Pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-1 px-5 py-0 rounded-3xl text-black font-semibold"
            style={{ backgroundColor: "White" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-5 py-2 rounded-3xl"
            style={{ backgroundColor: "#232323" }}
            onClick={() => setColor("#232323")}
          >
            Black
          </button>
          <button
            className="outline-none shadow-2xl px-5 py-2 rounded-3xl text-black font-semibold"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none shadow-2xl px-5 py-2 rounded-3xl text-black font-semibold"
            style={{ backgroundColor: "Lavender" }}
            onClick={() => setColor("Lavender")}
          >
            Lavender
          </button>
          <button
            className="outline-none shadow-2xl px-5 py-2 rounded-3xl text-white font-semibold"
            style={{ backgroundColor: "Purple" }}
            onClick={() => setColor("Purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
