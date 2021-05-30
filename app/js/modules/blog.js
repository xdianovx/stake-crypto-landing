import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blog = () => {
  const maw1200 = window.matchMedia("(max-width: 1200px)").matches;
  let blogCatAnim = gsap.to(".blog-categories", {
    opacity: 1,
  });
  let blogCatST = ScrollTrigger.create({
    trigger: ".blog-categories",
    animation: blogCatAnim,
    pin: true,
    start: "top 50px",
    end: "bottom 400px",
    pinSpacing: false,
  });

  if (maw1200) {
    blogCatST.disable();
  }
};

export default blog;
