/*
* @Author: albin
* @Date:   2018-08-25 12:25:25
* @Last Modified by:   albin
* @Last Modified time: 2018-08-25 12:37:32
*/
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/first">First</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
        <li>
          <Link to="/third">Third</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 20px;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

export default Navigationbar;
