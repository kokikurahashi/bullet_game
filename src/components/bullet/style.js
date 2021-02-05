// 弾のスタイルを表すフック
import BulletSize from "./size"
import { useState, useEffect } from "react"
const Style = (BulletManagaer, position) => {
  const [bulletFlag, y] = BulletManagaer
  const [airCraftX, airCraftY] = position
  const [initialX, SetIniatilX] = useState(0)
  const [initialY, SetIniatilY] = useState(0)

  useEffect(() => {
    SetIniatilX(airCraftX - BulletSize.width / 2)
    SetIniatilY(airCraftY)
  }, [bulletFlag]);

  return {
    position: 'absolute',
    width: BulletSize.width,
    height: BulletSize.height,
    left: initialX,
    top:  initialY + y - BulletSize.height / 2,
    scale: 0.5,
    opacity: bulletFlag ? "1.0" : "0",
  }
}


export default Style