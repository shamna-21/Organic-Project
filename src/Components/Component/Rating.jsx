import React, { useState } from 'react'

function Rating() {
  const [color,setColor]=useState(true)
  function handleclick() {
    setColor(!color)
  }
  return (
    <div style={{width:'20px', height:"20px", background:color? "white":"blue"}} >
      <div style={{width:'20px', height:"20px" }} onClick={handleclick}></div>
    </div>
  )
}

export default Rating


// import React, { useState } from "react";

// function Rating() {
//   const [inputs, setInputs] = useState("");
//   const [value, setValue] = useState([]);
//   const [news, setNews] = useState("");
//   const [edit, setEdit] = useState(null);
//   function handlechange(e) {
//     setInputs(e.target.value);
//   }
//   function handleclick(e) {
//     if (inputs === "") {
//       alert("enter");
//     } else if (edit !== null) {
//       setValue(value.map((item, index) => (index === edit ? inputs : item)));
//       setEdit(null);
//     } else {
//       setValue([...value, inputs]);
//       setInputs("");
//     }
//   }
//   function handleDelete(ind) {
//     setValue(value.filter((_, i) => i !== ind));
//   }
//   function handleEdit(ind) {
//     setEdit(ind);
//     setInputs(value[ind]);
//   }
//   function handlesearch(e) {
//     setNews(e.target.value);
//   }
//   const filteredItems = value.filter((item) =>
//     item.toLowerCase().includes(news.toLowerCase())
//   );
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={news}
//         onChange={handlesearch}
//       />
//       <input type="text" value={inputs} onChange={handlechange} />
//       <button onClick={handleclick}>ADD</button>
//       {filteredItems.map((item, ind) => (
//         <div>
//           {item} <button onClick={() => handleDelete(ind)}>delete</button>
//           <button onClick={() => handleEdit(ind)}>Edit</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Rating;

// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// function Rating() {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);

//   return (
//     <div>
//       {[...Array(5)].map((_, index) => {
//         const currentRating = index + 1;

//         return (
//           <label key={currentRating}>
//             <input
//               type="radio"
//               name="rating"
//               value={currentRating}
//               style={{ display: 'none' }}
//               onClick={() => setRating(currentRating)}
//             />
//         .    <FaStar
//               size={30}
//               color={currentRating <= (hover || rating) ? 'green' : 'yellow'}
//               onMouseOver={() => setHover(currentRating)}
//               onMouseOut={() => setHover(null)}
//               style={{ cursor: 'pointer' }}
//             />
//           </label>
//         );
//       })}
//     </div>
//   );
// }

// export default Rating;
