import React, { useState } from "react";

function Form(props) {
  const [inventryValue, setInventryValue] = useState({
    targetedinvetray: 83,
    realinvetray: 66,
  });

  const realInvetrayHandler = (e) => {
    setInventryValue({ ...inventryValue, realinvetray: e.target.value });
  };
  const targetedInvetrayHandler = (e) => {
    setInventryValue({ ...inventryValue, targetedinvetray: e.target.value });
  };

  const persent =
    100 - (inventryValue.realinvetray / inventryValue.targetedinvetray) * 100;
  props.persentValue(persent);

  return (
    <div className="Form-Area">
      <div className="top-area">
        <div className="total-items">
          <h2>
            {(
              +inventryValue.targetedinvetray + +inventryValue.realinvetray
            ).toLocaleString("en-US")}
          </h2>
          <p>items</p>
        </div>
        <div className="bar-div">
          <div className="items-bar"></div>
          <div
            className="main-bar"
            style={{ width: persent > -1 ? `${persent}%` : "0%" }}
          ></div>
        </div>
        <div className="bottom-area">
          <div className="bottom-left">
            <div className="label">
              <div className="left-icon"></div>
              <div>
                <p>Targeted Inventry</p>
                <input
                  min={0}
                  type="number"
                  onChange={targetedInvetrayHandler}
                  value={inventryValue.targetedinvetray}
                  placeholder="Targeted Inventry Value"
                />
              </div>
            </div>
          </div>
          <div className="bottom-right">
            <div className="label">
              <div className="right-icon"></div>
              <div>
                <p>Real Inventry</p>
                <input
                  min={0}
                  type="number"
                  onChange={realInvetrayHandler}
                  value={inventryValue.realinvetray}
                  placeholder="Real Inventry Value"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
