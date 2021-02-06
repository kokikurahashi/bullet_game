import EemeyStyle from "./style"

export default function(props){
  const imgPath =`images/enemy.png`

  return(
  <img
    src = {imgPath}
    style = {EemeyStyle(props.bulletPosition)}
  />
  )
}