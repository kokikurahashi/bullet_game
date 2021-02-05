import { useState, useEffect } from "react";

const MoveBullet = (bulletFlag) => {
  const [y, updateY] = useState(0)
  const handleUpdateY = () => {
    if (bulletFlag){
      updateY(y - 5)
    }
  }

  useEffect(() => {
    setTimeout(handleUpdateY, 10);
  }, [bulletFlag, y]);

  return y
}

export default MoveBullet