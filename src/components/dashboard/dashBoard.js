import React, { useState, useEffect } from "react";

import "./dashboard.css";

import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Loading from "../loading/loading";

import Sidebar from "../sidebar/sidebar";

import Navbar from "../router/navbar";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, "error");
        setIsLoading(false);
      });
  }, [setData]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <Sidebar />
          <Navbar />

          <div>
            <div>
              <input
                className="search mt-2"
                type=" search"
                placeholder="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <SearchIcon className="search-icon" />
            </div>
            <div className="row">
              {data.length &&
                data
                  .filter((item) => {
                    if (query === "") {
                      return item;
                    } else if (
                      item.title.toLowerCase().includes(query.toLowerCase()) ||
                      item.description
                        .toLowerCase()
                        .includes(query.toLowerCase()) ||
                      item.category.toLowerCase().includes(query.toLowerCase())
                    ) {
                      return item;
                    }
                    return false;
                  })
                  .map((item) => {
                    const {
                      id,
                      title,
                      description,
                      price,
                      discountPercentage,
                      rating,
                      stock,
                      brand,
                      category,
                      thumbnail,
                    } = item;
                    return (
                      <div className="col-md-4">
                        <div className="card text-center ">
                          <div key={id}>
                            <div className="img1 mt-2">
                              <img
                                src={thumbnail}
                                alt={title}
                                style={{ maxWidth: "150px", height: "100px" }}
                              />
                            </div>
                            <div>
                              <b>{title}</b>
                            </div>
                            <div>{description}</div>
                            <div>${price}</div>
                            <div>{discountPercentage}%</div>
                            <div>{rating}</div>
                            <div>{stock}</div>
                            <div>{brand}</div>
                            <div>{category}</div>
                            <div>
                              <NavLink to={`/productDetails/${id}`}>
                                <button className="btn1 mt-4">view</button>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
