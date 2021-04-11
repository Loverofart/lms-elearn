import React, { useState } from "react";
import FeatherIcon from 'feather-icons-react';
import logo from '../upload/laptop-mac.svg';
import userPic from '../upload/red-user.png';

function Sidebar(){

  const [nav, setNav] = useState([
    { label: "Home", slug: "/", icon: "home" },
    { label: "Discover", slug: "discover", icon: "list" },
    { label: "Categories", slug: "categories", icon: "tag" },
    { label: "My Courses", slug: "my-courses", icon: "briefcase" },
  ])

  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];
  for(let i = 0; i < nav.length; i++){
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <a href={nav[i].slug} className={"link noul flex gray" + (currentPage === nav[i].slug ? " active" : "")}>
          <FeatherIcon icon={nav[i].icon} className="icon s20"/>
          <h2 className="lbl s20">{nav[i].label}</h2>
          currentPage = {currentPage}
          <br/>
          nav slug = {nav[i].slug}
        </a>
      </li>
    );
  }

  return (
    <div className="sidebar fixed">
      <a href="#" className="logo bl">
        <img src={logo} className="bl" />
      </a>

      <ul className="nav">
        {navigation}
      </ul>

      <div className="last-watched-course flex aic">
        <FeatherIcon icon="zap" className="icon s20"/>
        <div className="lbl s fontb c333">
          Сүүлд үзсэн Курс
          <h2 className="author s13 c777">by Minjin</h2>
        </div>
      </div>

      <div className="stats aic flex">

        <div className="stats-box flex">
          <FeatherIcon icon="award" className="icon s24" fill="transparent" stroke="#1aab53"/>
          <h2 className="val s15 c333 fontb">1800</h2>
          <h2 className="lbl s13 c777">оноо</h2>
        </div>

        <div className="stats-box flex">
          <FeatherIcon icon="battery" className="icon s24" fill="transparent" stroke="#ea5252"/>
          <h2 className="val s15 c333 fontb">45.3%</h2>
          <h2 className="lbl s13 c777">үзсэн</h2>
        </div>
        
      </div>


      <div className="me flex aic">
        <div className="photo cfff s24 bl">
          <img src={userPic}/>
        </div>
        <div className="lbl s15 fontb c333">
          Minjin Gelegdorj
          <h2 className="uname s13 c777">@Gminjin</h2>
        </div>
      </div>

    </div>
  )
}

export default Sidebar;