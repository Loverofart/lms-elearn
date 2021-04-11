import React, { useState } from "react";
import userPic from '../upload/red-user.png';
import poster from '../upload/Freevector_Covid-19-Technology-Supporting-Technology_Illustration_Mf0321_generated.jpg';

function HomePage(){

  const [course, setCourse] = useState([
    {
      ID: 1,
      title: "Learning How to Create Beautiful Scenes in Illusrator in 60 mins",
      teacher: {
        ID: 1,
        name: "Lana Marandina",
        username: "@lanamara",
        dp: "https://www.vecteezy.com/free-vector/cartoon",

      },
      duration: "82min",
      poster: "../upload/Freevector_Covid-19-Technology-Supporting-Technology_Illustration_Mf0321_generated.jpg"
    }
  ]);
  // course n jagsaalt
  var courseList = [];
  for(let i = 0; i < 2; i++){
    courseList.push(
      <a href="#" className="course rel" key={"all-courses-" + i}>
        <img src={userPic} className="bl" />
      </a>
    );
  }
  return (
    <div className="home-page rel">
      
      {/* Buh Course */}
      <div className="section rel">
        <h2 className="title s24 fontb">Бүх Курс</h2>
        <div className="courses rel flex">
          {courseList}
        </div>
      </div>
    </div>
  )
}

export default HomePage;