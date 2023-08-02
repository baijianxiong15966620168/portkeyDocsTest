// // Example from https://beta.reactjs.org/learn

import { useEffect, useState } from 'react'
import styles from './counters.module.css'
import { MDXRemote } from 'next-mdx-remote/rsc'

function MyButton() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState(null)
  // useEffect(() => {
  //   fetch('/items/portkey').then(res => {
  //     return res.json()
  //   }).then(res => {
  //     console.log(res)
  //     const item = res.data.startHere
  //     setItems(item)
  //   })
  // }, [])
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}


// import React from 'react'
// import MDX from '@mdx-js/runtime'
// // Provide custom components for markdown elements
// const components = {
//   h1: props => <h1 style={{color: 'tomato'}} {...props} />,
//   Demo: props => <h1>This is a demo component</h1>
// }
// // Provide variables that might be referenced by JSX
// const scope = {
//   some: 'value'
// }
// const mdx = `
// # Hello, world!
// <Demo />
// <div>Here is the scope variable: {some}</div>
// `
// export default () => (
//   <MDX components={components} scope={scope}>
//     {mdx}
//   </MDX>
// )

// import { compileMDX } from 'next-mdx-remote/rsc'

// export default function Home() {
//   const [content, setContent] = useState(null);
//   const [frontmatter, setFrontmatter] = useState(null);
//   // Optionally provide a type for your frontmatter object
  
//   useEffect( () => { 
//     async function fetchData() {
//           try {
//             const { content, frontmatter } = await compileMDX<{ title: string }>({
//               source: `---
//                 title: RSC Frontmatter Example
//                 ---
//                 # Hello World
//                 This is from Server Components!
//               `,
//               options: { parseFrontmatter: true },
//             })
//             console.log(content, 'content')
//             setContent(content)
//             setFrontmatter(frontmatter)
//           } catch (err) {
//               console.log(err);
//           }
//       }
//       fetchData();
//   }, []);
  
//   return (
//     <>
//       <h1>{frontmatter ? frontmatter?.title  :  ''}</h1>
//       {content}
//     </>
//   )
// }