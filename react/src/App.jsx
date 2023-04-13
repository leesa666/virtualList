import { useEffect, useState, useRef } from "react"
import './style.css'
const App = () => {
  const data = [...Array(100001).keys()]
  const ullist = useRef(null)
  const box2 = useRef(null)
  useEffect(() => {
    // box2.current.style.height = `${data.length * 20}px`
    box2.current.style.height = `${600}px`

  }, [])
  const [index, setIndex] = useState({
    start: 0,
    end: 25
  })

  const scrollHandler = () => {
    const top = ullist.current.scrollTop
    // console.log(top)
    box2.current.style.height = `${top + 550}px`
    setIndex((pre) => {
      return {
        start: Math.ceil(top / 20),
        end: Math.ceil(top / 20 + 25)
      }
    })
    // box2.current.style.height = `${600}px`

    console.log(index)
  }
  return (
    <div className="box" ref={ullist} onScroll={scrollHandler}>
      <div className="box2" ref={box2} >

      </div>
      <ul className="ullist"  >
        {
          data.slice(index.start, index.end).map(item => {
            return <li key={item} className="list">{item}</li>
          })
        }
      </ul>
    </div>)

}
export default App