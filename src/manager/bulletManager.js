import { useState, useEffect } from "react";

const BulletManagaer = (airCraftPosition) => {
  const rangeDistance = -100
  const [bulletPosition, setBulletPosition] = useState([])
  const handleBulletCreation = () => {
    const [x, y] = [-200, -200]
    setBulletPosition([...bulletPosition, { x, y }])
  }

  const handleBulletPosition = () => {
    const copy = bulletPosition.slice();

    // 初期値なら期待のポジションに位置させる
    if (bulletPosition[bulletPosition.length - 1].x == -200 && bulletPosition[bulletPosition.length - 1].y == -200)
    {
      const x = airCraftPosition.x
      const y = airCraftPosition.y
      copy[copy.length - 1].x = x
      copy[copy.length - 1].y = y
    }
    else if (bulletPosition[bulletPosition.length - 1].y > rangeDistance){
      copy[copy.length - 1].y = copy[copy.length - 1].y - 20
    }
    else{
      copy.pop()
    }
    setBulletPosition(copy)
  }

  useEffect(() => {
    document.addEventListener("keydown",  handleBulletCreation, false);
  }, []);

  useEffect(() => {
    if(bulletPosition.length > 0){
      setTimeout(handleBulletPosition, 50);
    }
  }, [bulletPosition]);

  return bulletPosition
}

export default BulletManagaer