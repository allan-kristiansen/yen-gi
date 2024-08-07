import Lenis from 'lenis'
import { gsap } from 'gsap'

export const useSmoothScroll = () => {
    const scrollLenis = new Lenis({
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        infinite: true,
        syncTouch: true,
        syncTouchLerp: 0.1,
    })

    gsap.ticker.add((time) => {
        scrollLenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}