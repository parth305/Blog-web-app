
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setuser } from '../redux/actioncreators/useractions';
import styles from "../styles/contect.module.css"
function Contect() {
  let [state,setstate]=useState({name:"",email:"",password:"",desc:""})
  let dispatch=useDispatch();
  let handlesubmit=(e)=>{
    e.preventDefault()
    dispatch(setuser(state));
    setstate({name:"",email:"",password:"",desc:""});
    // console.log(state);
  }

  let handlechange=(e)=>{
    setstate({...state,[e.target.name]:e.target.value})
  }

  return (
<div className={styles.container}>
  <form onSubmit={handlesubmit}>

    <div className={styles.divs}>
    <label htmlFor="fname" className={styles.lb}>Name</label>
    <input className={styles.ipt} type="text" id="fname" name="name" value={state.name} onChange={handlechange} placeholder="Your name.." required/>
    </div>

    <div className={styles.divs}>
    <label htmlFor="email" className={styles.lb}>Email</label>
    <input className={styles.ipt} type="email" id="email" name="email" value={state.email} onChange={handlechange} placeholder="Your email.." required/>
    </div>

    <div className={styles.divs}>
    <label htmlFor="password" className={styles.lb}>Passwrod</label>
    <input className={styles.ipt} type="password" id="password" name="password" value={state.password} onChange={handlechange} placeholder="Your password.." required/>
    </div>
    <div className={styles.divs}>
    <label htmlFor="desc" className={styles.lb}>description</label>
    <textarea className={styles.ipt}id="desc" name="desc" placeholder="Write something.." value={state.desc} onChange={handlechange} style={{height:100}}></textarea>
    </div>

    <div className={styles.submit}>
    <button className={styles.btn} type="submit" >Submit</button>
    </div>
  </form>
</div>
  )
}

export default Contect
