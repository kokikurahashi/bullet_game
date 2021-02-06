import React from "react";
import AirCraft from "../components/airCraft"
import Bullet from "../components/bullet"
import Enemy from "../components/enemy"
import BulletManagaer from "../manager/bulletManager"
import AirCraftPositionManager from "../manager/airCraftPositionManager"
export default function(){
  const airCraftPosition = AirCraftPositionManager()
  const bulletPosition = BulletManagaer(airCraftPosition) // 弾の動き制御開始
  return(
    <div>
      <Enemy 
        bulletPosition={bulletPosition}
      />
      <AirCraft
        airCraftPosition={airCraftPosition}
      />
      { bulletPosition.map((position, index) => {
        return (
          <Bullet
            bulletPosition={position}
            key={index}
          />
        )
      })}
    </div>
  )
}