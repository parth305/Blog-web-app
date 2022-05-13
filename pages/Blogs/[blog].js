import React, { useEffect } from 'react'
import {useRouter} from "next/router"
import styles from "../../styles/Blog.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getblog } from '../../redux/actioncreators/getdata';
import loadder from "../../loadder.svg"
import Image from 'next/image'
// import Blog from "../../Model/BlogModel"
function blogitem(props) {

  //server side rendering
  // let Blog=props

  //static side rendering
  // let Blog=JSON.parse(props.data)


    //redux
    let dispatch=useDispatch();
    let {Blog}=useSelector((state)=>state.Blog)
    let router=useRouter();
    let blog=router.query.blog
    // console.log(blog);
    useEffect(()=>{
      if (!router.isReady) return;
      dispatch(getblog(blog));
      // console.log(Blog);
    },[router.isReady])

    //dangerouslysetinnerhtml
    function createMarkup(data) {
      return {__html: data};
    }
  return (
    Blog?
    <div>
      <main className={styles.main}>
      <h1>{Blog.title}</h1>
      <hr />
      <p dangerouslySetInnerHTML={createMarkup(Blog.content)} />
      </main>
    </div>:
    
    <main className={styles.mainloader}>
    <Image
          src={loadder}
          alt="Picture of the author"
          width={200}
          height={200}
        />
        </main>
  )
}


//static side rendering
/*
export async function getStaticPaths() {
  let mongoose=require("mongoose")
  let url='mongodb://localhost/bhyu';
  mongoose.connect(url).then(() => {
      console.log("app started in getstatispaths");
  })
  let data=await Blog.find();
  let arg= data.map((item)=>{
    return{  params: {blog:item._id.toString()} }
  })
  return {
    paths: arg,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  let mongoose=require("mongoose")
  let url='mongodb://localhost/bhyu';
  mongoose.connect(url).then(() => {
      console.log("app started in blog getstaticprops");
  })
  let {blog}=context.params
    let data={}
    try{
         data=await Blog.findById(blog);
    }
    catch(error){
        console.log({error:"no blog found"})
    }
  return {
    props: {data:JSON.stringify(data)}, // will be passed to the page component as props
  }
}*/

//server side rendering
// export async function getServerSideProps(context) {
//   let id=context.query.blog
//   let response=await fetch(`http://localhost:3000/api/getblog?id=${id}`);
//   let data=response.json()
//   return {
//     props: data, // will be passed to the page component as props
//   }
// }

export default blogitem
