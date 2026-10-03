import { useState } from "react";

function DynamicButton() {
  const [isBlue, setIsBlue] = useState(true);

  const handleClick = () => {
    setIsBlue(!isBlue);
  };

  return (
    <button
      style={{
        backgroundColor: isBlue ? "blue" : "green",
        color: "white",
      }}
      onClick={handleClick}
    >
      Change Color
    </button>
  );
}

export default DynamicButton;