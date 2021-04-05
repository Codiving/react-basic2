import React, { useState } from "react";

const State = () => {
  const [text, setText] = useState("");

  console.log("rendering");

  return <input value={text} onChange={e => setText(e.target.value)} />;
};

export default State;
