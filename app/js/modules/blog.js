import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)





const blog = () => {
    gsap.to('.blog-categories', {
        opacity: 1,
        scrollTrigger: {
            pin: true,
            start: 'top 100px',
            trigger: '.blog-categories'
        }
    })
}

export default blog