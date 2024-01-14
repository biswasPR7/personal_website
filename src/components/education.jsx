import React from "react";
import iitk_photo from "./IITk logo.jpeg";
import kv_photo from "./kv_logo.png";

function Edu() {
  return (
    <div id="edu_id">
      <h1 style={{ color: "yellow", marginLeft: "41%", marginTop: 300 }}>
        Education
      </h1>
      <div className="edu_wrapper" style={{flex: 1}}>
        <div className="edu">
          <img id="iitPhoto" src={iitk_photo} />
          <p>IIT kanpur</p>
          <p>2021-2025</p>
          <p>  Maths And Scientific computing</p>
          <p> CGPA: 7</p>
          <p> Current semester: 6th</p>
        </div>
        <div className="edu" style={{flex: 1}}>
        <img id="iitPhoto" src={kv_photo} />
          <p>Class 12 , KV Delhi</p>
          <p>Score : 90.8%  (95 in Maths,Physics,English)</p>
          <p>CBSE board , 2020</p>
        </div>
        <div className="edu" style={{flex: 1}}>
        <img id="iitPhoto" src={kv_photo} />
          <p>Class 10 , KV Delhi</p>
          <p>Score : 90.4%  </p>
          <p>CBSE board , 2018</p>
        </div>
        {/* <div className="edu">
        <img id="iitPhoto" src={kv_photo} />
          <p>Class 10 , KV Delhi</p>
          <p>Score : 90.4%  </p>
          <p>CBSE board</p> 
        </div>  */}
      </div>
    </div>
  );
}

export default Edu;
