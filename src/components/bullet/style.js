// 弾のスタイルを表すフック
import BulletSize from "./size"
const Style = (bulletPosition) => {
  return {
    position: 'absolute',
    width: BulletSize.width,
    height: BulletSize.height,
    left: bulletPosition.x,
    top:  bulletPosition.y,
    scale: 0.5,
    opacity: "1.0"
  }
}

export default Style