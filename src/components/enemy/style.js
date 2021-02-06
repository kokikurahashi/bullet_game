// 弾のスタイルを表すフック
import { useState, useEffect } from "react";
import EnemySize from "./size"
const Style = (bulletPosition) => {
  const x = 500
  const y = 0
  const [isCollision, setIsCollision] = useState(false)

  useEffect(() => {
    if (!bulletPosition[0]){
      setIsCollision(false)
    }
    else{
      const distane = Math.sqrt((bulletPosition[0].x - x)**2 + (bulletPosition[0].y - y)**2)
      const result = distane < EnemySize.width // 衝突条件
      setIsCollision(result)
    }
  }, [bulletPosition]);

  return {
    position: 'absolute',
    width: EnemySize.width,
    height: EnemySize.height,
    left: x,
    top: y,
    scale: 0.5,
    opacity: isCollision ? "0.0": "1.0"
  }
}

export default Style