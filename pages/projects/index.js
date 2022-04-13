import React from 'react'
import Link from 'next/link'

const ProjectList = () => {
  return (
    <div>
    {/* go back */}
    <Link href="/"> 
      <a><button>Go back</button></a>
    </Link>
        <p><Link href="project/1"><a >Project 1</a></Link></p>
        <p><Link href="project/2"><a >Project 2</a></Link></p>
        <p><Link href="project/3"><a >Project 3</a></Link></p>
    </div>

  )
}

export default ProjectList