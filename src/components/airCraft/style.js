// 機体のスタイルを表すフック
import AirCraftSize from "./size"

const Style = (airCraftPosition) => {
  return {
    position: 'absolute',
    width: AirCraftSize.width,
    height: AirCraftSize.height,
    left: airCraftPosition.x - AirCraftSize.width / 2,
    top: airCraftPosition.y - AirCraftSize.height / 2,
    scale: 0.5
  }
}

export default Style