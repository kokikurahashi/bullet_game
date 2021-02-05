// 機体のスタイルを表すフック

import AirCraftSize from "./size"
import AirCraftPosition from "./position"
const Style = () => {
  const [x, y] = AirCraftPosition()
  return {
    position: 'absolute',
    width: AirCraftSize.width,
    height: AirCraftSize.height,
    left: x - AirCraftSize.width / 2,
    top: y - AirCraftSize.height / 2,
    scale: 0.5
  }
}

export default Style