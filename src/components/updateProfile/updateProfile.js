import React, { useEffect } from "react";
import axios from "axios";
const UpdateProfile = () => {
  useEffect(() => {
    axios
      .post(
        `http://192.168.0.130/invoice/api/Account/updateprofile?userId=bf6da3c5-6403-4176-1225-08dba3d1d9b7`,
        {
        //   userId: '',
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.statusCode === 200) {
          console.log(res.data);
          localStorage.setItem('userId', res.data.data.userId)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <h2> update</h2>
      
    </>
  );
};

export default UpdateProfile;
