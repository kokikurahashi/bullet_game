import { useState, useEffect } from "react";
import MoveBullet from "./moveBullet";

const BulletManagaer = () => {
  const [bulletFlag, updateBalletFlag] = useState(false)
  const y = MoveBullet(bulletFlag)
  const handlebulletFlag = () => {
    updateBalletFlag(true)
  }

  useEffect(() => {
    document.addEventListener("keydown",  handlebulletFlag, false);
  }, []);

  return [bulletFlag, y]
}

export default BulletManagaer