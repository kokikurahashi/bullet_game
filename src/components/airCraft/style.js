// 機体のスタイルを表すフック

import AirCraftSize from "./size"
const Style = (position) => {
  const [x, y] = position
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