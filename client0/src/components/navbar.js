import React, {Fragment, useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
<header class="Header__SiteHeader-iw8uuv-0 cxhrii site-header site-header--menu-right px-7 px-lg-10 dynamic-sticky-bg site-header--absolute site-header--sticky
   ">
   <div class="container-fluid">
      <nav class="navbar site-navbar offcanvas-active navbar-expand-lg  px-0">
         <div class="brand-logo mt-3 mt-md-0 d-flex align-items-center"><a class="" href="/#">
             <img src=".../img/download.svg" alt="logo with light bg" class="dark-version-logo" /></a></div>
         <div class="collapse navbar-collapse">
            <div class="navbar-nav-wrapper">
               <ul class="navbar-nav main-menu d-none d-lg-flex">
                  <li class="nav-item"><a class="nav-link" role="button" aria-expanded="false" href="/">Help support us </a></li>
               </ul>
            </div>
         </div>
         <div class="header-btn ml-auto ml-lg-0 d-none d-xs-block"><a href="https://www.buymeacoffee.com/devquest"><button class="btn btn btn-image  btn-sm-2 rounded-5 h-50 font-size-5"></button></a><a href="https://discord.gg/jEJ5FSEdrS"><button class="btn btn btn-image-discord  btn-sm-2 rounded-5 h-50 font-size-5"></button></a></div>
         <button class="Header__ToggleButton-iw8uuv-1 cNkhNT navbar-toggler btn-close-off-canvas ml-3 " type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation"><i class="icon icon-menu-34 icon-burger d-block"></i></button>
      </nav>
   </div>
</header>
        </Fragment>
    );
}
export default Navbar;
