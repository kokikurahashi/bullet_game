import BulletStyle from "./style"

export default function(props){
  const imgPath =`images/bullet01.png`

  return(
  <img
    src = {imgPath}
    style = {BulletStyle(props.bulletPosition)}
  />
  )
}