import React from 'react'

function Button({text,handleOnClick}) {
  return (
    <span className="App" onClick={()=>handleOnClick()}>
        {text}
    </span>
  );
}

export default Button;
