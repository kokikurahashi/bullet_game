import AirCraftStyle from "./style"

export default function(props){
  const imgPath = `images/airCraft.jpg`
  return(
    <img
      src = { imgPath }
      style = { AirCraftStyle(props.airCraftPosition) }
    />
  )
}