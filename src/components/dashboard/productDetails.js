import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading/loading";

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, "error");
        setIsLoading(false);
      });
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="container d-flex flex-column justify-content-center align-items-center m-4">
            <div className="mt-3">
              {
                <img
                // className="img"
                  src={data.thumbnail}
                  alt={data.title}
                  style={{ maxWidth: "400px", height: "200px" }}
                />
              }
            </div>
            <div className="title mt-3">
              <h3>{data.title}</h3>
              <b></b>
            </div>
            <div className="description mt-3">
              {showMore
                ? data?.description
                : `${data?.description?.slice(0, 40)}`}
              {
                <b
                  onClick={() => setShowMore(!showMore)}
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  {showMore ? "..showLess" : "..showMore"}
                </b>
              }
            </div>
            <div className="price mt-3">${data.price}</div>
            <div className="category mt-3">{data.category}</div>
            <div className="brand mt-3">{data.brand}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
