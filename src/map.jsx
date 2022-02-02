import React from "react";
import enrikejson from "./pasuxebi.json";

function Map(props) {
  
  return (
    <div>
      <p>{props.object.question}</p>

      {props.object.answers.map((e) => (
        <>
        console.log(s);

          <input
            type="radio"
            id={e.id}
            name={props.object.id}
            value={e.correct}
          />
          <label for={e.id}>{e.answer}</label>
          <br />
        </>
      ))}

      <input
        type="submit"
        value="პასუხი"
        onClick={() => props.setRagaca(props.ragaca + 1)}
      ></input>
    </div>
  );
}

export default Map;
