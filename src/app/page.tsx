"use client";
import { useState } from "react";

function TextChanger() {
  const texts = ["Text 1", "Text 2", "Text 3", "Text 4"];
  const textsdesc = ["wiwiwi", "wowowo", "wawawa", "wewewe"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isFinishButtonDisabled, setIsFinishButtonDisabled] = useState(true);

  const changeTextForward = () => {
    // Calculate the next text index
    const nextIndex = (currentTextIndex + 1) % texts.length;
    if(nextIndex == 3){
      setIsNextButtonDisabled(true);
      setIsFinishButtonDisabled(false);
    }
    setCurrentTextIndex(nextIndex);
    setIsPrevButtonDisabled(false);
  };

  const changeTextBackward = () => {
    // Calculate the prev text index
    const nextIndex = (currentTextIndex - 1) % texts.length;
    if(nextIndex == 0){
      setIsPrevButtonDisabled(false);
    }
    setIsFinishButtonDisabled(true);
    setCurrentTextIndex(nextIndex);
  };

  const changeTextFinish = () => {
    setCurrentTextIndex(0);
    setIsFinishButtonDisabled(true);
    setIsNextButtonDisabled(false);
    setIsPrevButtonDisabled(true);
  }

  return (
    <>
      <div className="flex justify-between">
        <button id="prev" onClick={changeTextBackward} disabled={isPrevButtonDisabled}>Prev</button>
        <button id="next" onClick={changeTextForward} disabled={isNextButtonDisabled}>Next</button>
        <button onClick={changeTextFinish} disabled={isFinishButtonDisabled}>Finish</button>
      </div>

      <div className="text-center pt-24">
        <div>
          <h1 id="title"> <div>
            <p>{texts[currentTextIndex]}</p>
          </div></h1>
          <p id="content">{textsdesc[currentTextIndex]}</p>
        </div>
      </div>
    </>


  );
}


export default function Home() {
  return (
    <main className="min-h-screen items-center p-24">

    <TextChanger></TextChanger>


    </main>
  )
}
