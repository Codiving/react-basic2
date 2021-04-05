import React, { useRef } from "react";

const Ref = () => {
  const textRef = useRef(null);

  console.log("rendering");

  return (
    <div>
      <input ref={textRef} />
      <button onClick={() => textRef.current.focus()}>
        input에 포커스하기
      </button>
    </div>
  );
};

export default Ref;
