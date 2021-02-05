import { useState, useEffect } from "react";

const BulletManagaer = () => {
  const [bulletFlag, updateBalletFlag] = useState(false)
  const [y, updateY] = useState(0)
  
  const handleUpdateY = () => {
    if (bulletFlag){
      updateY(y - 5)
    }
  }

  const handlebulletFlag = () => {
    updateBalletFlag(true)
  }

  useEffect(() => {
    document.addEventListener("keydown",  handlebulletFlag, false);
  }, []);

  useEffect(() => {
    setTimeout(handleUpdateY, 10);
  }, [bulletFlag, y]);

  return [bulletFlag, y]
}

export default BulletManagaer