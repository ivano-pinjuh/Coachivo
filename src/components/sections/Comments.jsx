import CommentCard from "../UI/CommentCard"

import { useRef, useEffect } from "react";

const Comments = () => {
  const containerRef = useRef()




  useEffect(() => {
    const container = containerRef.current

    if (container) {
      container.addEventListener('mousedown', handleMouseDown)
      container.addEventListener('touchstart', handleTouchStart)

      return () => {
        container.removeEventListener('mousedown', handleMouseDown)
        container.removeEventListener('touchstart', handleTouchStart)
      }
    }
  }, [])

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.pageX
    const initialScrollLeft = containerRef.current.scrollLeft

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    function handleMouseMove(e) {
      const x = startX - e.pageX
      containerRef.current.scrollLeft = initialScrollLeft + x
    }

    function handleMouseUp() {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }

  const handleTouchStart = (e) => {
    const touch = e.touches[0]
    const startX = touch.pageX
    const initialScrollLeft = containerRef.current.scrollLeft

    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)

    function handleTouchMove(e) {
      const touch = e.touches[0]
      const x = startX - touch.pageX
      containerRef.current.scrollLeft = initialScrollLeft + x
    }

    function handleTouchEnd() {
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }



  return (
    <div className="w-full overflow-x-auto scrollbar-hidden bg-isabelline" ref={containerRef}>
      <div className="flex w-fit gap-[3vw] pl-[10vw] pt-[16vh] pb-[13vh]">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  )
}



export default Comments