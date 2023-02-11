import React from "react";
import { add ,mult,sub,div} from './Calc';


function App(){
return(
    <>
  <ul>
    <li>Division of two num is = {div(7,2)}</li>
    <li>Multiplicatin of two num is = {mult(5,2)}</li> 
    <li>Addition of two num is = {add(22,2)}</li>
     <li>Subtraction of two num is = {sub(22,2)}</li>
  </ul>
</>
);
}
export default App;