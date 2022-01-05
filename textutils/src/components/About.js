import React from "react";

export default function About(props) {
  {/* const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  }); */}

  let myStyle = {
    color: props.mode === 'dark'?'white':'#101766',
    backgroundColor: props.mode === 'dark'?'#3d3bbf':'white',
  }

  {/*  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: '1px solid white'
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  }; */}

  return (
    <div className="container" style={
      {color: props.mode === 'dark'?'white':'#101766'}}>
      <h2 className="container my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyse Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is TextUtils App</strong> It can be used for manipulating your text<code>.TextUtils</code>,
              is very Helpful and easy to use.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>It's absolutely free to use.</strong> Completely free <code>.Best website</code>, easy to use.
              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Compatible in all the Browsers.</strong> Don't worry you can open it in any broser you can want<code>.Compatibility</code>,
              is really awesome.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary"
        >
          {btnText}
  </button> 
  </div> */}
    </div>
  );
}
