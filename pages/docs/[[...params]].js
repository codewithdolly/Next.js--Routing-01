//catch all route

import React from "react";
import { useRouter } from "next/router";

const DOCS = () => {
  const router = useRouter();
  const { params =[]} = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <p>
        {" "}
        viewing a docs for feature: {params[0]} and a consept: {params[1]}
      </p>
    );
  } else if (params.length === 1) {
    return <p> viewing docs for feature: {params[0]}</p>;
  }

  return <div>This is form DOCS</div>;
};

export default DOCS;
