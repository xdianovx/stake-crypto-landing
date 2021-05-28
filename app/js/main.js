// Plugins
import VanillaTilt from 'vanilla-tilt'
import Choices from 'choices.js'
import rangesliderJs from 'rangeslider-js'


// Blocks
import sidebar from './modules/sidebar'
import about from './modules/about'
import blog from './modules/blog'
import navScroll from './modules/nav_scroll'
import card from './modules/card'
import cardsSection from './modules/cards_section'

cardsSection()
sidebar()
about()
blog()
navScroll()
card()

VanillaTilt.init(document.querySelector(".beginning__img"), {
    max: 15,
    speed: 400
});

const element = document.querySelector('.calculator-select');
const choices = new Choices(element, {
    searchEnabled: false
});

const calcucatorRange = document.querySelector('.calculator-range')
rangesliderJs.create(calcucatorRange)
