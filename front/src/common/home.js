import React, { useState } from "react";
import userPic from '../upload/red-user.png';
import poster from '../upload/Freevector_Covid-19-Technology-Supporting-Technology_Illustration_Mf0321_generated.jpg';
import poster1 from '../upload/Revision_Freevector_Education-School_Illustration_Mf0321.jpg';
function HomePage(){

  const [course, setCourse] = useState([
    {
      ID: 1,
      title: "Learning How to Create Beautiful Scenes in Illusrator in 60 mins",
      teacher: {
        ID: 1,
        name: "Lana Marandina",
        username: "lanamara",
        dp: userPic,

      },
      duration: "82min",
      poster: poster
    },
    {
      ID: 2,
      title: "Learning How to Create Beautiful Scenes in Illusrator in 60 mins",
      teacher: {
        ID: 1,
        name: "Lana Marandina",
        username: "lanamara",
        dp: userPic,

      },
      duration: "93min",
      poster: poster1,
    },
  ]);
  // course n jagsaalt
  var courseList = [];
  for(let i = 0; i < course.length; i++){
    courseList.push(
      <a href="#" className="course rel" key={"all-courses-" + i}>
        <div className="block rel" style={{
          background: "#e2e2e2 url(" + course[i].poster + ") no-repeat center"
        }}>

          <div className="user abs aic flex">
            <div className="pic">
              <img src={course[i].teacher.dp} className="bl"/>
            </div>
            <div className="meta rel">
              <h2 className="s15 name fontb cfff">{course[i].teacher.name}</h2>
              <h2 className="s13 uname fontb cfff">@{course[i].teacher.username}</h2>
            </div>
          </div>

          <div className="duration abs">
            <h2 className="s13 uname fontb cfff">{course[i].duration}</h2>
          </div>

          <div className="course-title abs">
            <h2 className="s15 uname fontb cfff">{course[i].title}</h2>
          </div>

        </div>
      </a>
    );
  }
  return (
    <div className="home-page rel">
      
      {/* Buh Course */}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">Бүх Курс</h2>
        <div className="courses rel flex">
          {courseList}
        </div>
      </div>
    </div>
  )
}

export default HomePage;