import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

const AnimatedSection = ({ children, delay = 0 }) => {
   const [ref, inView] = useInView({
      triggerOnce: false, // Animasi akan di-trigger setiap kali section masuk viewport
      threshold: 0.1, // Trigger animasi saat 10% section terlihat
   })

   const animation = useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(50px)',
      config: { duration: 500 },
      delay: inView ? delay : 0, // Delay animasi jika diperlukan
   })

   return (
      <animated.div ref={ref} style={animation}>
         {children}
      </animated.div>
   )
}

export default AnimatedSection
