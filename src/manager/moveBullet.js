import { useState, useEffect } from "react";

const MoveBullet = (bulletFlag) => {
  const [y, updateY] = useState(0)
  const handleUpdateY = () => {
    if (bulletFlag){
      updateY(y - 20)
    }
  }

  useEffect(() => {
    setTimeout(handleUpdateY, 50);
  }, [bulletFlag, y]);

  return y
}

export default MoveBullet