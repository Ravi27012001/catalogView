import React from "react";
import {useContext,useState} from "react";
import Createe from "./data/createe";
import "./add.css";
const List = ()=>{
    const[i,setI]= useState(4);
   const data = useContext(Createe);
   console.log(data);
  const prev =()=>{
    if(i===0){
        setI(4); 
    }
    else{
    setI(i-1);
}

  }
  const next =()=>{
    if(i===4){
        setI(0); 
    }
    else{
    setI(i+1);
}

  }

     return(<div>
       <h1>Indian Cricketers</h1>    
 
       <div className="card carts " style={{width: "20rem",height:"31rem"}} >
  <img className="card-img-top" style={{height: "15rem",borderRadius:"5px"}} src={data[i].Image} alt="Not Found"/>
  <div className="card-body">
    <h5 className="card-title">{data[i].name}</h5>
    <p className="card-text" style={{fontSize:"14px"}} >{data[i].description}</p>
   </div>
</div>
    <div style={{marginTop:"30px"}}>
    <button type="button" class="btn btn-primary"style={{marginRight:"145px"}} onClick={prev}>Previous</button>
    <button type="button" class="btn btn-primary" onClick={next}>Next</button>

    </div>
       
       </div>)
}
export default List;