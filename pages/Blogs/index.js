import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import styles from "../../styles/Blogs.module.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getblogs } from '../../redux/actioncreators/getdata';
import loadder from "../../loadder.svg"
// import Blog from "../../Model/BlogModel"
function index(props) {
  // console.log(props);

  //redux
  let dispatch = useDispatch();
  let { Blogs } = useSelector((state) => state.Blog)
  useEffect(() => {
    dispatch(getblogs());
    }, [])

    //static site rednring
    // let Blogs=JSON.parse(props.data)
    // console.log("heheheh",Blogs);

    //server side rednering
    // let Blogs=props.data
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
         {
          Blogs.length > 0 ?
           Blogs.map((item) => {
            return <Link href={`${"/Blogs/" + item._id}`} key={item._id}>
              <a className={styles.card}>
                 <h3>{item.title} &rarr;</h3>
                 <p>{item.metadata.split(" ").slice(0,9).join(" ")}</p>
              </a>
            </Link> 
          }):<Image
          src={loadder}
          alt="Picture of the author"
          width={200}
          height={200}
        />
         } 
     
      </div>
    </main>
  )
}
/*
export async function getStaticProps(context) {
  let mongoose=require("mongoose")
  let url='mongodb://localhost/bhyu';
  mongoose.connect(url).then(() => {
      console.log("app started in get statis props of inedex");
  })
  let data=await Blog.find();
  // console.log(data);
  return {
    props: {data:JSON.stringify(data)}, // will be passed to the page component as props
  }
}
*/

//server side rendering
/*
export async function getServerSideProps(context) {
  let response=await fetch("http://localhost:3000/api/getblogs");
  let data=await response.json();
  return {
    props: {data}, // will be passed to the page component as props
  }
}
*/

export default index