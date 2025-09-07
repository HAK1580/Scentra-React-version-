import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Search from "./Search";

import SliderHero from "./SliderHero";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  // playAnimation = true only while we want the intro animation to run
  const [playAnimation, setPlayAnimation] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    // If animation already disabled, nothing to do
    if (!playAnimation) return;

    const nav = navRef.current;
    if (!nav) {
      setPlayAnimation(false);
      return;
    }

    // When CSS animation finishes, disable it permanently
    const onAnimationEnd = () => {
      setPlayAnimation(false);
      // If you want the animation to run only once across page reloads:
      // localStorage.setItem("navAnimatedDone", "1");
    };

    nav.addEventListener("animationend", onAnimationEnd);

    // fallback in case animationend doesn't fire (e.g. reduced-motion)
    const fallback = setTimeout(onAnimationEnd, 2200);

    return () => {
      nav.removeEventListener("animationend", onAnimationEnd);
      clearTimeout(fallback);
    };
  }, [playAnimation]);

  // Optional: persist across reloads (uncomment to enable)
  // useEffect(() => {
  //   if (localStorage.getItem("navAnimatedDone")) setPlayAnimation(false);
  // }, []);

  return (
    <>
      {/* keep nav mounted — toggle visibility via class */}
      <nav
        ref={navRef}
        className={`main-nav ${playAnimation ? "play" : ""} ${search ? "nav-hidden" : ""}`}
      >
        
          <img
            className="logo"
            width={300}
            src="/Scentra-React-version-/IMGS/logo/logo-fotor-bg-remover-2025080510633.webp"
            alt=""
          />
          <img className="hamburger" src="/Scentra-React-version-/IMGS/icons/hamburger.svg" alt="" />

      

        <ul>
          <li className="nav-left">
            <a href="index.html">HOME</a>
          </li>
          <li className="nav-left">
            <a href="#ourcollection">ALL COLLECTIONS</a>
          </li>
          <li className="scentra-middle">SCENTRA</li>
          <li className="nav-right">
            <a href="#home">ABOUT US</a>
          </li>
          <li className="nav-right">
            <a href="#home">CONTACT US</a>
          </li>
        </ul>



        <img
          onClick={() => setSearch(!search)}
          className="search-icon"
          width={32}
          src="/Scentra-React-version-/IMGS/icons/search.svg"
          alt=""
        />

      </nav>

      {/* search wrapper — show/hide via class (keeps component mounted) */}
      <div className={`search-wrapper ${search ? "show" : "hide"}`}>
        <Search search={search} setSearch={setSearch} />

      </div>

    </>
  );
};

export default Navbar;
