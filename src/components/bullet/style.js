// 弾のスタイルを表すフック
import BulletSize from "./size"
import { useState, useEffect } from "react"
const Style = (deltaY, airCraftPosition) => {
  const [airCraftX, airCraftY] = airCraftPosition
  const [initialX, SetInitialX] = useState(0)
  const [initialY, SetInitialY] = useState(0)

  useEffect(() => {
    console.log(airCraftX, airCraftY) 
    SetInitialX(airCraftX - BulletSize.width / 2)
    SetInitialY(airCraftY)
  }, []);

  return {
    position: 'absolute',
    width: BulletSize.width,
    height: BulletSize.height,
    left: initialX,
    top:  initialY + deltaY - BulletSize.height / 2,
    scale: 0.5,
    opacity: "1.0"
  }
}

export default Style