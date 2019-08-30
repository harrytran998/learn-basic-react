// import React, { useState } from 'react'

// const API_URL = 'https://api.giphy.com/v1/gifs/search?api_key=JnxTmEGKXjZeUKBzRjTQoMDg8OX8pS5U&rating=pg&q='

// const searchGift = async () => {
//   const [searchValue, setSearchValue] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [gifs, setGifs] = useState([])
//   const response = await fetch(API_URL + searchValue)
//   const json = await response.json()
//   return (
//     <div>
//       <h1>Search Gift</h1>
//       <input onChange={e => setSearchValue(e.target.value)} placeholder=""></input>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-4"></div>
//         </div>
//       </div>
//     </div>
//   )
// }
