import React from "react";
import AirCraftStyle from "../components/airCraft/style"
import BulletStyle from "../components/bullet/style"
import AirCraftPositionManager from "../manager/airCraftPositionManager"
import BulletManagaer from "../manager/bulletManager"
export default function(){
  const airCraftImg = `images/airCraft.jpg`
  const BulletImg = `images/bullet01.png`
  const airCraftPosition = AirCraftPositionManager() // 弾の動き制御開始
  return(
    <div>
      <img
        src = {airCraftImg}
        style = {AirCraftStyle(airCraftPosition)}
      >
      </img>
      { <img
        src = {BulletImg}
        style = {BulletStyle(BulletManagaer(), airCraftPosition)}
      >
      </img>
      }
    </div>
  )
}