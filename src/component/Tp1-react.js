import React, { useState } from 'react'
import './tp1.css'
export default function Tp1() {
  // declaration d'un state
  const [n1,setn1]=useState("");
  
 const Result=(e)=>{
  setn1(n1.concat(e.target.name));

 }
 const clear=()=>{
  setn1(n1.slice(0,n1.length-1));
}
const supprimer=()=>{
setn1("");
}
const calculate=()=>{
  try{
    setn1(eval(n1).toString());
  }catch{
    setn1("Error")
  }
}

  
  return (
    <div id="c">
      <div id="n">
      <input type="text"  value={n1} id='resulta'/><br/>
      <input type="button" value="effacer"  onClick={supprimer} id="sup" style={{backgroundColor: 'gray'}}  name='supprimer' />
      <input type="button" value="C"  onClick={clear} style={{backgroundColor: 'orange'}} className='nn'/>
      <input type="button" value="/"  onClick={Result} className='nn' style={{backgroundColor: 'orange'}} name='/'/><br/>
      <input type="button" value="7"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='7'/>
      <input type="button" value="8"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='8'/>
      <input type="button" value="9"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='9'/>
      <input type="button" value="*"  onClick={Result} className='nn' style={{backgroundColor: 'orange'}} name='*'/><br/>
      <input type="button" value="4"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='4'/>
      <input type="button" value="5"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='5'/>
      <input type="button" value="6"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='6'/>
      <input type="button" value="-"  onClick={Result} className='nn' style={{backgroundColor: 'orange'}} name='-'/><br/>
      <input type="button" value="1"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='1'/>
      <input type="button" value="2"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='2'/>
      <input type="button" value="3"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='3'/>
      <input type="button" value="+"  onClick={Result} className='nn' style={{backgroundColor: 'orange'}} name='+'/><br/>
      <input type="button" value="0"  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='0'/>
      <input type="button" value="."  onClick={Result} className='nn' style={{backgroundColor: 'white'}} name='.'/>
      <input type="button" value="="  onClick={calculate} className='egale' style={{backgroundColor: 'gray'}} name='='/>
     
    </div>
    </div>
  )
}
