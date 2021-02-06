import { useState, useEffect } from "react";

const BulletManagaer = () => {
  const rangeDistance = -300
  const [ yList, setYList] = useState([])
  const handleBulletCreation = () => {
    setYList([...yList, 0])
  }

  const handleBulletY = () => {
    const copy = yList.slice();
    if (yList[yList.length - 1] > rangeDistance){
      copy[copy.length - 1] = copy[copy.length - 1] - 20
    }
    else{
      copy.pop()
    }
    setYList(copy)
  }

  useEffect(() => {
    document.addEventListener("keydown",  handleBulletCreation, false);
  }, []);

  useEffect(() => {
    if(yList.length > 0){
      setTimeout(handleBulletY, 50);
    }
  }, [yList]);

  return { yList, setYList}
}

export default BulletManagaer