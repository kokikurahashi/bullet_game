// 機体の座標を表すカスタムフック
import {useState} from "react";

const AirCraftPositionManager = () => {
  const [x, updataX] = useState(0)
  const [y, updataY] = useState(0)
  window.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    event = event || window.event; // IE対応
    updataX(event.clientX)
    updataY(event.clientY)
  }
  return { x, y }
}
export default AirCraftPositionManager