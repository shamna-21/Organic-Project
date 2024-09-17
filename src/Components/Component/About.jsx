import React from "react";

import leaf from "../Images/bigleaf.png";

import grapes from "../Images/grapes.png";
function About() {
  return (
    <div className=" flex-col justify-center items-center ">
      <div className=" bg-gray-200 h-60">
        <h1 className="text-5xl font-bold text-green-700 text-center p-16 ">
          Get In Touch
        </h1>
      </div>
      <div className="">
        <img
          src={leaf}
          alt="Leaf"
          className="w-50 mx-auto relative bottom-9 h-20 "
        />
      </div>
      <div className="">
        <div className="grid grid-cols-2  gap-20 ml-14 mr-14  h-full shadow-lg ">
          <div className="m-10">
            <h1 className="text-3xl font-bold mb-10 ">We Are Your Favourite Store.</h1>
            <h3>
              Tuas quisquam quo gravida proident harum, aptent ligula anim
              consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
              potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
              penatibus quasi! Nostra tenetur dignissimos ultrices natus
              distinctio ultrices consequuntur numqu. Officiis fuga harum porro
              et? Similique rhoncus atque! Netus blanditiis provident nunc
              posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur
              anim amet quas, malesuada proident platea corrupti expedita.
            </h3>
          </div>
          <div>
            <img src={grapes} alt="img" className="shadow-lg rounded-md mb-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
