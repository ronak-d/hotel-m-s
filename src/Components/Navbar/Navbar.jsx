import React from "react";
import * as bootstrap from "bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div>
            <Link class="navbar-brand" to={"/"}>
              Hoyo
            </Link>
            <Link class="navbar-brand" to={"/hotels"}>
              Hotels
            </Link>
          </div>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
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
      </nav>
    </div>
  );
};

export default Navbar;
