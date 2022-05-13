import React from 'react'
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/About"><a>About</a></Link></li>
          <li><Link href="/Blogs"><a>Blogs</a></Link></li>
          <li><Link href="/Contectus"><a>Contect us</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
