// // Example from https://beta.reactjs.org/learn

import { useEffect, useState } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { remark } from "remark";
import remarkMdx from "remark-mdx";

export default function Counter() {
  const [md, setMdx] = useState(null);
  useEffect(() => {
    fetch("https://test-cms.awaken.finance/items/portkeyDocs")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        const md = res.data.md;
        setMdx(md);
      });
    
  }, []);

  return (
    <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
      {/* <div>{md}</div> */}
      {md + "This ~is not~ strikethrough, but ~~this is~~!"}
    </ReactMarkdown>
  );
}


// ToDo： 