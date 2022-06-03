import {useState, useEffect, React} from 'react'
import {useSpring, animated, config} from 'react-spring'

export default function FormStatusBarSegment({triggered}) {

    const [progressed, setProgressed] = useState(null)

    useEffect(() => {
      setProgressed(triggered)

    }, [triggered])
    

    const props = useSpring({
        to:  progressed ? {width: "100%"} : {width: "0%"},
        from: { width: "0" },
        reset: false,
        config: config.slow,
    })

  return (
    <>
        <div className='FormStatusBarSegment-container'>
            <animated.div style={props} className='FormStatusBarSegment-progress'> </animated.div>
        </div>
    </>
  )
}
