import React from "react";

function Meter(props) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = new Date();
  return (
    <section className="App-header">
      <div className="part-1">
        <h3 className="heading">Inventory accuracy</h3>
        <div className="back-circle">
          <h2 className="persentage">
            {props.persent > -1 ? `${props.persent}%` : props.persent}
          </h2>
          <div className="back-circle-left"> </div>
          <div className="back-circle-right"> </div>
          <div className="front-circle">
            <div className="back-circle-top-left"> </div>
            <div className="back-circle-top-right"> </div>
          </div>
          <div className="small-circle"></div>
          <div
            className="App-logo"
            style={{
              transform: props.rotateValue,
            }}
          ></div>
        </div>
      </div>
      <div className="text-area">
        <p>Total item Ratio</p>
        <h5 className="text-area-p2">
          {props.persent > -1 ? `${100 - props.persent}%` : props.persent}
        </h5>
        <h6 id="text-area-background">{months[data.getMonth()]}</h6>
      </div>
    </section>
  );
}

export default Meter;
