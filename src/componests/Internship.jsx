import React from "react";
import internship from "./data/internship.json";
let Internship = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>Internship/ Training</h1>
        {internship.map((data) => {
          return (
            <>
              <div className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
                key={data.id}>
                <div className="left">
                  <img src={`/assets/${data.imageSrc} `} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h3>{data.organisation}</h3>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[2]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[3]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Internship;
