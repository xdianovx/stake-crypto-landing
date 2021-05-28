import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger, Draggable)

let tl = gsap.timeline()


const sidebar = () => {
  const burgerBtn = document.querySelector('.header__burger')
  const sidebar = document.querySelector('.sidebar')
  const sidebarCloseBtn = document.querySelector('.sidebar__close')
  const heroWrap = document.querySelector('.hero__wrap')
  const cardsWrap = document.querySelector('.cards')
  const mainSection = document.querySelector('main')
  const heroTitle = document.querySelector('.hero__title')
  const heroSuptitle = document.querySelector('.hero__suptitle')
  const topscrollWrap = document.querySelector('.topscroll')
  const cards = gsap.utils.toArray('.puff')
  const showCardsGridBtn = document.querySelector('.cards-btn')

  window.addEventListener('DOMContentLoaded', () => {
    mainSection.style.display = "none"
  })


  let scrollAnim = gsap.to(cards, {
    x: -(cardsWrap.offsetWidth - heroWrap.offsetWidth),
    ease: 'none'
  })

  gsap.to(heroTitle, {
    yPercent: 100,
    xPercent: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: '.topscroll',
      start: 'top top',
      scrub: 1
    }
  })

  gsap.to(heroSuptitle, {
    y: -500,
    x: -500,
    opacity: 0,
    scrollTrigger: {
      trigger: '.topscroll',
      start: 'top top',
      scrub: 1
    }
  })

  let topScrl = ScrollTrigger.create({
    trigger: '.topscroll',
    animation: scrollAnim,
    scrub: 1,
    start: "top 0",
    pin: true,
    end: () => {
      "+=" + topscrollWrap.offsetWidth
    }
  })



  // Показать sidebar
  burgerBtn.addEventListener('click', () => {
    if (cardsWrap) {
      mainSection.style.display = "block"
      cardsWrap.classList.add('active')
      topScrl.disable()
    }


    tl
      .to(burgerBtn, {
        opacity: 0,
      })
      .to(sidebar, {
        duration: 0.5,
        x: 0,
      })
      .to(burgerBtn, {
        opacity: 1,
      })
      .to(heroWrap, {
        x: '90%'
      }, '-=1')
      .to(cardsWrap, {
        y: '-100px'
      }, '-=2')
      .to(showCardsGridBtn, {
        visibility: 'hidden'
      }, '-=1')
  })

  // Скрыть sidebar
  sidebarCloseBtn.addEventListener('click', () => {
    if (cardsWrap) {
      topScrl.enable()
      mainSection.style.display = "none"
      cardsWrap.classList.remove('active')
    }
    tl
      .to('.sidebar__close', {
        duration: 0.5,
        rotate: 90,
      })
      .to(sidebar, {
        duration: 0.5,
        x: '-101%',
      })
      .to('.sidebar__close', {
        duration: 0.5,
        rotate: 0,
      })

      .to(heroWrap, {
        x: 0
      }, '-=1')
      .to(cardsWrap, {
        x: 0,
        y: 0
      }, "-=2")
      .to(showCardsGridBtn, {
        visibility: 'visible'
      }, '-=1')

  })
}

export default sidebar
