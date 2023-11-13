import React, { useState } from 'react'

function TextForm(props)
 {
    const handleclick=()=>
    {
        console.log("uppere case clciked")
        let newText=text.toUpperCase();
        // let snewText=text.toLowerCase();

        setext(newText)
        // setext(snewText)

    }
    const handlelowclick=()=>
    {
        console.log("uppere case clciked")
        let newText=text.toLowerCase();
        // let snewText=text.toLowerCase();

        setext(newText)
        // setext(snewText)

    }
    const handleclowclick=()=>
    {
        console.log("uppere case clciked")
        let newText='';
        // let snewText=text.toLowerCase();

        setext(newText)
        // setext(snewText)

    }
    const upperclcik=(event)=>
    {
        setext(event.target.value)


    }
    const[text,setext]=useState("enter text");
    
  return (

<>
    <div>
  <div className="mb-3 bg-blue color-red">
    <label for="mybox" className="form-label">{props.title}</label>
    <textarea className="form-control" value={text} onChange={upperclcik} id="mybox" rows="13"></textarea>
  </div>
  <button className="btn btn-warning mx-1" onClick={handleclick}>Convert-Upper</button>
  <button className="btn btn-secondary mx-3" onClick={handlelowclick}>Convert-Lower</button>
  <button className="btn btn-primary mx-3" onClick={handleclowclick}>Clear</button>

  {/* <button className="btn btn-primary" onClick={handleclick}>Convert-Lower</button> */}

  </div>

  <dvi className="conatiner">
    <h3>your text summary</h3>
    <p>
        word {text.split(" ").length} character {text.length}
    </p>
    <h2>
        timeTaken {0.08*text.split(" ").length} 
        </h2>
        <h4>preview</h4>
        <p>
        {text}
        </p>

  </dvi>
  </>

  )
}

export default TextForm