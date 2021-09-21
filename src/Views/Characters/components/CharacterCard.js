import React from "react";
import Rotate from "react-reveal/Rotate";

const CharacterCard = ({ reversible, sourceImage, children, name }) => {
  return (
    <Rotate top left={!reversible} right={reversible}>
      <div
        className={`h-96 w-full my-6 flex ${
          reversible ? "flex-row-reverse" : "flex-row"
        } items-center justify-between py-4 px-10`}
      >
        <div className={`w-4/12 h-full ${reversible ? "pl-3.5" : "pr-3.5"}`}>
          <img className="w-10/12 h-full" src={sourceImage} />
        </div>
        <div
          className={`w-8/12 h-full ${
            reversible ? "pr-10" : "pl-10"
          } bg-gray-300`}
        >
          <h1
            className={`text-2xl font-bold tracking-widest ${
              reversible ? "text-right" : "text-left"
            } max-h-16 futura-text primary-color h-2/12`}
          >
            {name}
          </h1>
          <div
            className={`py-2.5 overflow-y-auto flex-row max-h-72 ${
              reversible ? "scroll-left" : "scroll-right"
            }`}
          >
            <p
              className={`${
                reversible ? "pl-3.5" : "pr-3.5"
              } leading-6 text-left text-black whitespace-pre-line text scroll-right`}
            >
              {children}
            </p>
          </div>
        </div>
      </div>
    </Rotate>
  );
};

export default CharacterCard;
