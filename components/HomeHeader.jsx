import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

export default function HomeHeader() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://yts.mx/api/v2/list_movies.json?quality=3D"
        );
        const data = await response.json();
        setMovies(data.data.movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="H1">Movie List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px" }}
        />
      </div>
      <div>
        <ul style={{ padding: 0 }}>
          {filteredMovies.map((movie) => (
            <li
              key={movie.id}
              style={{
                listStyleType: "none",
                display: "inline-block",
                justifyContent: "space-between",
                width: "230px",
                height: "345px",
              }}
            >
              <div>
                <Link to={`/homeFooter/${movie.id}`}>
                  <h3 style={{ color: "black", textDecorationLine: "none" }}>
                    {movie.title}
                  </h3>
                  {movie.medium_cover_image && (
                    <img
                      src={movie.medium_cover_image}
                      alt={movie.title}
                      style={{ width: "230px", height: "345px" }}
                    />
                  )}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../styles/HomeHeader.module.css";

// export default function HomeHeader() {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // API 호출하여 영화 목록 가져오기
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(
//           "https://yts.mx/api/v2/list_movies.json?quality=3D"
//         );
//         const data = await response.json();
//         setMovies(data.data.movies);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const filteredMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className="H1">Movie List</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           textAlign: "center",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search movies"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", borderRadius: "5px" }}
//         />
//       </div>
//       <div>
//         <ul
//           style={{
//             padding: 0,
//             // margin: "10%",
//           }}
//         >
//           {filteredMovies.map((movie) => (
//             <li
//               key={movie.id}
//               style={{
//                 listStyleType: "none",
//                 display: "inline-block",
//                 justifyContent: "space-between",
//                 width: "230px",
//                 height: "345px",
//               }}
//             >
//               <div>
//                 {/* <Link to={`/movies/${movie.id}`}> */}
//                 <Link to={`/HomeFooter`}>
//                   <h3>{movie.title}</h3>
//                   {movie.medium_cover_image && (
//                     <img
//                       src={movie.medium_cover_image}
//                       alt={movie.title}
//                       style={{ width: "230px", height: "345px" }}
//                     />
//                   )}
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

{
  /* <h3>{movie.title}</h3>
{movie.medium_cover_image && (
  <img
    src={movie.medium_cover_image}
    alt={movie.title}
    style={{ width: "230px", height: "345px" }}
  />
)} */
}

// export default function HomeHeader() {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(
//           "https://yts.mx/api/v2/list_movies.json?quality=3D"
//         );
//         const data = await response.json();
//         setMovies(data.data.movies);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const navigate = useNavigate();

//   const filteredMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className="H1">Movie List</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           textAlign: "center",
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Search movies"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ padding: "10px", borderRadius: "5px" }}
//         />
//       </div>
//       <div>
//         <ul style={{ padding: 0 }}>
//           {filteredMovies.map((movie) => (
//             <li
//               key={movie.id}
//               style={{
//                 listStyleType: "none",
//                 display: "inline-block",
//                 justifyContent: "space-between",
//                 width: "230px",
//                 height: "345px",
//               }}
//             >
//               <div>
//                 <Link
//                   to={`/HomeFooter/${movie.id}`}
//                   onClick={() => navigate(`/Homefooter/${movie.id}`)}
//                 >
//                   <h3>{movie.title}</h3>
//                   {movie.medium_cover_image && (
//                     <img
//                       src={movie.medium_cover_image}
//                       alt={movie.title}
//                       style={{ width: "230px", height: "345px" }}
//                     />
//                   )}
//                 </Link>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// HomeHeader.js
// import { Link } from 'react-router-dom';
