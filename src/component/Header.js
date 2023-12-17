import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='list'>
      <Link to='/Board'>자유게시판</Link>
      <Link to='/Show'>소개</Link>
      <Link to='/'>메인 화면</Link>
    </div>
  );
}
export default Header;
