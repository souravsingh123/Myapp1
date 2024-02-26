// import React from 'react'
// import Spinner from 'react-bootstrap/Spinner'
// const Loading = () => {
//   return (
//     <>
//     <Spinner animation='broder' role='status'>
//     <div className=''>loading...</div>
//     </Spinner>
//     </>
   
//   )
// }

// export default Loading

import Spinner from 'react-bootstrap/Spinner';

const Loading=()=>{
  return (
    <Spinner animation="border" role="status" style={{marginLeft:"500px", marginTop:"270px"}}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;