// Plugins
import VanillaTilt from "vanilla-tilt";
import rangesliderJs from "rangeslider-js";

// Blocks
import sidebar from "./modules/sidebar";
import about from "./modules/about";
import blog from "./modules/blog";
import navScroll from "./modules/nav_scroll";
import card from "./modules/card";
import cardsSection from "./modules/cards_section";
import { select } from "./modules/select";

window.addEventListener("DOMContentLoaded", () => {
  sidebar();
  about();
  select();
  card();
  cardsSection();
  blog();
  navScroll();
  document.querySelector("main").style.display = "none";
});

VanillaTilt.init(document.querySelector(".beginning__img"), {
  max: 15,
  speed: 400,
});

const calcucatorRange = document.querySelector(".calculator-range");
rangesliderJs.create(calcucatorRange);
