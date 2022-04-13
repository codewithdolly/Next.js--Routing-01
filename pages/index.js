import Link from 'next/link'
import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { useRouter } from 'next/router'
// import { Button } from 'bootstrap'


const Home = () => {
  const router= useRouter();
  const handleOrder= ()=>{
    console.log("Placing Order");
    router.push('/projects')
  }

  return (
    <div>Hello World 
    {/* <Button class="btn btn-primary">Hey there</Button> */}
    <h4>
      <Link href="/contact"><a>Contact Us</a></Link>
    </h4>
    <Link href='/projects'><a>Products</a></Link>
   
    <button onClick={handleOrder}>Place Order</button>
    <hr />
    <Link href="/posts"><a >Posts</a></Link>
    
    
    </div>
  )
}

export default Home