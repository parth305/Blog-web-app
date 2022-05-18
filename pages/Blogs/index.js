import React, { useContext, useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import styles from "../../styles/Blogs.module.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getblogs } from '../../redux/actioncreators/getdata';
import loadder from "../../loadder.svg"
// import Blog from "../../Model/BlogModel"
const axios = require("axios")
import InfiniteScroll from 'react-infinite-scroll-component';
import Pagecontext from '../../contextapi/pagecontext';

function index(props) {
  // console.log(props);
  let { page, setpage } = useContext(Pagecontext);

  //redux
  let dispatch = useDispatch();
  let { Blogs,total } = useSelector((state) => state.Blog)

  //for infinite scroll without redux
  // let [Blogs, setBlogs] = useState([]);
  // let [total, settotal] = useState(9)
  let fun = async (page) => {

    dispatch(getblogs(page));
    //for infinite scroll without redux
    // let data = await axios.get(`http://localhost:3000/api/getblogs?page=${page}`);
    // setBlogs(data.data.data);
    // settotal(data.data.total)
    setpage(page + 1);

  }
  useEffect(() => {
    if (page === 1) {
      fun(1);
    }
  }, [])

  let fetchData = async () => {
    //for infinite scroll without redux
    // let { data, total } = await axios.get(`http://localhost:3000/api/getblogs?page=${page}`);
    // console.log("gagagagga", data, total);
    // setBlogs(Blogs.concat(data.data))
    fun(page)
  }

  //static site rednring
  // let Blogs=JSON.parse(props.data)
  // console.log("heheheh",Blogs);

  //server side rednering
  // let Blogs=props.data
  return (
    <main className={styles.main}>
      {/* <div className={styles.grid}> */}
        <InfiniteScroll className={styles.grid}
          dataLength={Blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={Blogs.length < total}
          loader={<Image
            src={loadder}
            alt="Picture of the author"
            width={200}
            height={200}
          />}
          // loader={<h1>Loading.....</h1>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        // below props only if you need pull down functionality

        >
          {
            Blogs.length > 0 ?
              Blogs.map((item) => {
                // console.log("naiaiai", Blogs);
                return <Link href={`${"/Blogs/" + item._id}`} key={item._id}>
                  <a className={styles.card}>
                    <h3>{item.title} &rarr;</h3>
                    <p>{item.metadata.split(" ").slice(0, 9).join(" ")}</p>
                  </a>
                </Link>
              }) : null
          }
        </InfiniteScroll>


      {/* </div> */}
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