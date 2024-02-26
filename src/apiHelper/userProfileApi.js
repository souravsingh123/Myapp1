// import React, { useEffect } from "react";
// import axios from "axios";
// const UserProfileApi = () => {
//   const token = localStorage.getItem("token");

//   useEffect(() => {
 
//     axios
//       .get(
//         `http://192.168.0.130/invoice/api/Account/getuserbyid?userId=bf6da3c5-6403-4176-1225-08dba3d1d9b7
//         `,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((res) => {
//         if (res.data.statusCode === 200) {
//           console.log(res.data);
        
//         }
//       })
//       .catch((error)=>{
//         console.log(error,'error')
//       })
      
//   });
//   return(
//    <>
//    {/* <div>{token}</div> */}
//    <div>
   
//    </div>
   
   
//    </>
//   )
// };

// export default UserProfileApi;
