import React from 'react'
import { useRouter } from 'next/router'

const projectId = () => {
    const router= useRouter();
    const projectId= router.query.projectId
  return (
    <div>projectId is : {projectId}</div>
  )
}

export default projectId