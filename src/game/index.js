import React from "react";
import AirCraft from "../components/airCraft"
import Bullet from "../components/bullet"
import AirCraftPositionManager from "../manager/airCraftPositionManager"
import BulletManagaer from "../manager/bulletManager"
export default function(){
  const airCraftPosition = AirCraftPositionManager() // 弾の動き制御開始
  return(
    <div>
      <AirCraft
        airCraftPosition={airCraftPosition}
      />
      <Bullet
        BulletManagaer={BulletManagaer}
        airCraftPosition={airCraftPosition}
      />
    </div>
  )
}