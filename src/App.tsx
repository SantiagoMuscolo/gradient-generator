import { useState } from "react";
import "./App.css";
import { Box, Slider } from "@mui/material";

function App() {
  const [startColor, setStartColor] = useState("#ff0000");
  const [endColor, setEndColor] = useState("transparent");
  const [angle, setAngle] = useState(0.25);
  const [startPercentage, setStartPercentage] = useState(20);
  const [endPercentage, setEndPercentage] = useState(80);
  const [thirdPercentage, setThirdPercentage] = useState(40);
  const [thirdColor, setThirdColor] = useState("transparent");
  const [ableThirdColor, setAbleThirdColor] = useState(false);

  const gradientStyle = {
    background:
      thirdColor === "transparent"
        ? `linear-gradient(${angle}deg, ${startColor} ${startPercentage}%, ${endColor} ${endPercentage}%)`
        : `linear-gradient(${angle}deg, ${startColor} ${startPercentage}%, ${endColor} ${endPercentage}%, ${thirdColor} ${thirdPercentage}%)`,
  };

  const twoGradientString = (
    <span className="flex flex-col">
      <span className="text-yellow-400">
        {angle} <span className="text-white">deg,</span>
      </span>{" "}
      <span className="text-yellow-400">
        {startColor} <span className="text-white">{startPercentage}%,</span>
      </span>{" "}
      <span className="text-yellow-400">
        {endColor} <span className="text-white">{endPercentage}%,</span>
      </span>
      ) ;
    </span>
  );

  const ThreeradientString = (
    <span className="flex flex-col">
      <span className="text-yellow-400">
        {angle} <span className="text-white">deg,</span>
      </span>{" "}
      <span className="text-yellow-400">
        {startColor} <span className="text-white">{startPercentage}%,</span>
      </span>{" "}
      <span className="text-yellow-400">
        {endColor} <span className="text-white">{endPercentage}%,</span>
      </span>
      <span className="text-yellow-400">
        {thirdColor} <span className="text-white">{thirdPercentage}%,</span>
      </span>
      ) ;
    </span>
  );


  const generateGradientCSS = () => {
    return `background-image: linear-gradient(${angle}deg, ${startColor}, ${endColor});`;
  };

  const copyToClipboard = () => {
    const cssString = generateGradientCSS();
    navigator.clipboard.writeText(cssString);
  };

  return (
    <>
      <header>
        <nav className="border-b border-gray-500 p-6 flex justify-around font-mono">
          <span className="text-white font-bold capitalize text-xl">
            <span className="text-[#B94CED]">&lt;&gt;</span> Santiago Muscolo{" "}
            <span className="text-[#B94CED]">&lt;/&gt;</span>
          </span>
          <div>
            <a
              href="https://github.com/SantiagoMuscolo"
              target="a_blank"
              className="mr-4 font-bold text-white"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-muscolo-142578249/"
              target="a_blank"
              className="font-bold text-white"
            >
              Linkedin
            </a>
          </div>
        </nav>
      </header>
      <main className="flex mt-20 justify-center font-mono">
        <section className="flex gap-16">
          <div
            className="w-[500px] h-[740px] border-4 rounded-lg sticky top-0"
            style={gradientStyle}
          />
          <div>
            <div className="flex flex-col text-center">
              <h2 className="text-white font-bold text-2xl mb-1">
                Generador de gradientes
              </h2>
              <span className="text-gray-400 font-medium mb-6 text-lg">
                Genera esa gradiente que tanto buscabas 🎉
              </span>
            </div>

            <div className="flex gap-4 mb-10 relative">
              <input
                type="color"
                id="startColor"
                value={startColor}
                onChange={(e) => setStartColor(e.target.value)}
                className="flex w-[100px] h-[100px] rounded-lg border-2 cursor-pointer transition-all ease-in-out text-center bg-transparent p-0 box-border color-picker"
              />
              <div className="relative">
                <input
                  type="color"
                  id="endColor"
                  value={endColor}
                  onChange={(e) => {
                    setEndColor(e.target.value);
                    setAbleThirdColor(true);
                  }}
                  className="flex w-[100px] h-[100px] rounded-lg border-2 cursor-pointer transition-all ease-in-out text-center bg-transparent p-0 color-picker"
                />
                {endColor === "transparent" && (
                  <span className="text-white text-2xl font-bold absolute inset-0 flex justify-center items-center pointer-events-none">
                    +
                  </span>
                )}
              </div>
              <div className="relative">
                <input
                  type="color"
                  id="thirdColor"
                  value={thirdColor}
                  disabled={!ableThirdColor}
                  onChange={(e) => {
                    setThirdColor(e.target.value);
                    setAbleThirdColor(true);
                  }}
                  className="flex w-[100px] h-[100px] rounded-lg border-2 cursor-pointer transition-all ease-in-out text-center bg-transparent p-0 color-picker"
                />
                {ableThirdColor && thirdColor === "transparent" && (
                  <span className="text-white text-2xl font-bold absolute inset-0 flex justify-center items-center pointer-events-none">
                    +
                  </span>
                )}
              </div>
            </div>
            <div className="mb-5 flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="text-white font-bold mb-2">Angulo:</span>
                <Slider
                  className="w-[400px]"
                  value={angle}
                  onChange={(e, newValue) =>
                    setAngle(parseInt(newValue as any))
                  }
                  min={0}
                  max={360}
                  color="secondary"
                />
              </div>
              <div className="flex flex-col w-[25rem]">
                <span className="text-white font-bold mb-2">
                  Porcentaje del primer color:
                </span>
                <Slider
                  className="w-[400px]"
                  value={startPercentage}
                  onChange={(e, newValue) =>
                    setStartPercentage(newValue as any)
                  }
                  min={0}
                  max={100}
                  color="secondary"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold mb-2">
                  Porcentaje del segundo color:
                </span>
                <Slider
                  className="w-[400px]"
                  value={endPercentage}
                  onChange={(e, newValue) => setEndPercentage(newValue as any)}
                  min={0}
                  max={100}
                  color="secondary"
                />
              </div>
              {thirdColor !== "transparent" && (
                <div className="flex flex-col">
                  <span className="text-white font-bold mb-2">
                    Porcentaje del tercer color:
                  </span>
                  <Slider
                    className="w-[400px]"
                    value={thirdPercentage}
                    onChange={(e, newValue) =>
                      setThirdPercentage(newValue as any)
                    }
                    min={0}
                    max={100}
                    color="secondary"
                  />
                </div>
              )}
            </div>
            <span className="text-white text-xl font-bold">Tu gradiente:</span>
            <div className="flex flex-col mt-3">
              <div className="flex flex-col text-white bg-[#151f28] mt-2 p-4 rounded-lg">
                <span>
                  <span className="text-[#ff39a8]">
                    background-image:{" "}
                    <span className="text-[#00beff]">linear-gradient</span>
                    <span className="text-white">(</span>
                  </span>{" "}
                  {thirdColor === "transparent" ? twoGradientString : ThreeradientString}
                </span>
              </div>
              <button
                className="border border-[#B94CED] rounded p-2 text-white mt-4 self-end"
                onClick={copyToClipboard}
              >
                Copiar CSS
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
