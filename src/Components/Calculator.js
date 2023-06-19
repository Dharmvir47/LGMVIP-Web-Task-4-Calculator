import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");
  const [pre, setPre] = useState("");
  const handleClick = (e) => {
    if(result.length < 11 ){

      setResult(result.concat(e.target.name));
    } else{
      setResult(result);
    }
  };
  const handlePlusMinus = () => {
    if(pre === ""){
      setPre("-");
    } else {
      setPre("");
    }
  };

  const handleClickC = () => {
    setResult(result.substring(0,result.length-1));
  };

  const calculate = () => {
    try {
      //eslint-disable-next-line
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };
  return (
    <div className="calc-container">
      <div className="calc">
        <h1>Calculator</h1>
        <div className="grid">
          <input type="text" value={ pre + result} id="inp" placeholder="0" readOnly />
          <button className="bg-grey" onClick={clear}>
            AC
          </button>
          <button className="bg-grey" onClick={handlePlusMinus}>
            +/-
          </button>

          <button className="btn bg-grey" onClick={handleClick} name="%">
            %
          </button>
          <button className="btn" onClick={handleClick} name="/">
            /
          </button>
          <button className="btn" onClick={handleClick} name="7">
            7
          </button>
          <button className="btn" onClick={handleClick} name="8">
            8
          </button>
          <button className="btn" onClick={handleClick} name="9">
            9
          </button>
          <button className="btn operator" onClick={handleClick} name="*">
            X
          </button>

          <button className="btn" onClick={handleClick} name="4">
            4
          </button>
          <button className="btn" onClick={handleClick} name="5">
            5
          </button>
          <button className="btn" onClick={handleClick} name="6">
            6
          </button>
          <button className="btn operator" onClick={handleClick} name="-">
            -
          </button>

          <button className="btn" onClick={handleClick} name="1">
            1
          </button>
          <button className="btn" onClick={handleClick} name="2">
            2
          </button>
          <button className="btn" onClick={handleClick} name="3">
            3
          </button>
          <button className="btn operator" onClick={handleClick} name="+">
            +
          </button>
          <button className="btn " onClick={handleClickC} name="C" id="c">
            C
          </button>
          <button className="btn" onClick={handleClick} name="0" id="zero">
            0
          </button>
          <button className="btn" onClick={handleClick} name=".">
            <b>.</b>
          </button>
          <button className="btn operator" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
