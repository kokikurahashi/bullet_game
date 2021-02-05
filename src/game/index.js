import React from "react";
import AirCraftStyles from "../components/airCraft/style"
export default function(){
  const imgPath = `images/airCraft.jpg`
  return(
    <div>
      <img
        src = {imgPath}
        style = {AirCraftStyles()}
      >
      </img>
    </div>
  )
}