import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/home"}>
            Hoyo
          </Link>
          <Link class="navbar-brand" to={"/hotels"}>
            Hotels
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarSupportedContent"
            // aria-controls="navbarSupportedContent"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search for Hotels"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
