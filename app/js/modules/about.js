import { Swiper, Autoplay } from 'swiper'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
Swiper.use([Autoplay])
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()
const about = () => {
  const aboutIconsSlider = new Swiper('.about-icons-slider', {
    slidesPerView: 'auto',
    loop: true,
    speed: 400,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
  })

  let activeSlide = document.querySelector('.swiper-slide-active')

  aboutIconsSlider.on('slideChangeTransitionEnd', () => {
    tl.to('.about-icons-slider .swiper-slide-active', {
      rotate: 45,
      delay: 2,
    }).to('.about-icons-slider .swiper-slide-prev', {
      rotate: '-=45',
    })
  })

  gsap.to(".what-we-do__marquee", {
    scrollTrigger: {
      trigger: ".what-we-do__marquee",
      scrub: 1,
      start: 'top center',
    },
    x: 300,
  });
}

export default about
