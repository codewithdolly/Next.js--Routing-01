import React from 'react'
import {useRouter} from "next/router"

const reviewId = () => {
    const router= useRouter();
    const {projectId, reviewId}= router.query
  return (
    <div>The ProjectId is : {projectId} and reviewId is : {reviewId} </div>
  )
}

export default reviewId