import { useState } from "react"
import cl from './Likes.module.css'

const Likes = () => {

   const [likes, setLikes] = useState(5)
   const [isLike, setIsLike] = useState(false)

   const clickHandler = () => {
      setLikes(likes + (isLike ? -1 : 1))
      setIsLike(!isLike)
   }

   return (
      <div className={cl.likes_box}>
         <div>This review likes <span>{likes}</span> users! </div>
         <div>Do you like it?</div>
         <button onClick={clickHandler} className={cl.button}>Like!</button>
      </div>
   )
}

export default Likes
