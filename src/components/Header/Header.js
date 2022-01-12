import React from "react";
import "./Header.css";
import Image from "../../image/logo-pristin-capital.png";

function Header() {
  return (
    <header>
      <div class="container">
        <img src={Image} />

        <input class="hamburger-button" type="checkbox" id="hamburger-button" />
        <label for="hamburger-button">
          <div></div>
        </label>

        <div class="menu">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Our Work</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </nav>

          <div class="buttons">
            <a href="/" class="button primary">
              Get a Quote
            </a>
            <a href="/" class="button">
              Redeem Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
