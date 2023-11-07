import React from 'react';

export default function Navbar() {
    return (
        <div className="Navbar">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">ReactApp</a>
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/card">Card</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
                <form class="form-inline d-flex my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </nav>
        </div>
        </div>
    );
}