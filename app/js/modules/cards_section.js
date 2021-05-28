import { gsap } from "gsap";
const cardsSection = () => {
  const tl = gsap.timeline();

  const cards = document.querySelectorAll(".card-section");
  const card = gsap.utils.toArray(".card-section");

  gsap.to(card, {});
};

export default cardsSection;
