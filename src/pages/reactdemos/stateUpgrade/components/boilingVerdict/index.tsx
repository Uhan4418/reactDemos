import React , { FC }from "react";

//  接口定义方式一(interface)
// interface PropsType {
//   celsius: number
// }

//  接口定义方式二(type)
type PropsType = {
  celsius: number
}

const BoilingVerdict: FC<PropsType> = (props) => {
  if(props.celsius >= 100){
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

export default BoilingVerdict