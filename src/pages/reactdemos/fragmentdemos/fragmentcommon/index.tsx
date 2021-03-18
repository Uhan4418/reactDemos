import React, {FC, Fragment} from 'react'
import ShowCodes from '@/components/BtnShowCodes'

const FragementCom : FC = () => {

  const codes = `
  import React, {FC, Fragment} from 'react'
  
  const FragementCom : FC = () => {
  
    /* Fragment写法1： */
    // return (
    //   <Fragment>
    //     Some text.
    //     <h2>A heading</h2>
    //     More text.
    //     <h2>Another heading</h2>
    //     Even more text.
    //   </Fragment>
    // )
  
    /* Fragment写法2： */
    return (
      <>
        Some text.
        <h2>A heading</h2>
        More text.
        <h2>Another heading</h2>
        Even more text.
      </>
    )
  }
  
  export default FragementCom
  `

  /* Fragment写法1： */
  // return (
  //   <Fragment>
  //     Some text.
  //     <h2>A heading</h2>
  //     More text.
  //     <h2>Another heading</h2>
  //     Even more text.
  //   </Fragment>
  // )

  /* Fragment写法2： */
  return (
    <>
      Some text.
      <h2>A heading</h2>
      More text.
      <h2>Another heading</h2>
      Even more text.
      <br/>
      <ShowCodes codes={codes}/>
    </>
  )
}

export default FragementCom