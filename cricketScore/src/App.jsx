import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import engLogo from "./img/england-2906827_640.webp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="Calculator">
      <div>
        <div></div>
        <div>
          <div>
            <img src={engLogo} alt="" className="image" />
          </div>
          <h4>OliePope</h4>
          <h4>Joe Root</h4>
        </div>
      </div>
      <input type="text" placeholder="0" id="inputBox" />
      <div>
        <button>C</button>
        <button>DEL</button>
        <button>%</button>
        <button>/</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div>
        <button>00</button>
        <button>0</button>
        <button>.</button>
        <button class="equal-button">=</button>
      </div>
    </div>
  );
}

export default App;
