import { useState } from 'react'
import { nanoid } from 'nanoid'
import cl from '../goodPage/GoodPageMain.module.css'
import Likes from '../../../Likes'

const ReviewForm = () => {

   const [reviewsArr, setReviewsArr] = useState([
      { id: 1, name: 'Alex', review: 'I love it!', date: '23.09.23, 21:15:18 ' }
   ])
   const [name, setName] = useState('')
   const [review, setReview] = useState('')

   const addNewReview = (event) => {
      event.preventDefault()
      const newReview = {
         id: nanoid(6),
         name,
         review,
         date: new Date()
      }
      setReviewsArr([...reviewsArr, newReview])
      setName('')
      setReview('')
   }

   return (
      <div className={cl.like_counter}>
         <h2>Write a review</h2>
         <form className={cl.coment_form}>
            <input
               type="text"
               placeholder='Name'
               value={name}
               onChange={(event) => setName(event.target.value)}
               className={cl.input} />
            <textarea
               value={review}
               onChange={(event) => setReview(event.target.value)}
               placeholder='Tell us what do you like or dislike...'
               className={cl.textarea}
            ></textarea>
            <button
               onClick={addNewReview}
               className={cl.button}
            >Publish</button>
         </form>
         <br />
         <div className={cl.review_arr}>
            {reviewsArr.map((el, index) =>
               <div key={index} className={cl.review_item}>
                  <h3 className={cl.review_item_name}>{el.name}</h3>
                  <div className={cl.time}>{el.date.toLocaleString()}</div>
                  <div className={cl.review_item_text}>{el.review}</div>
                  <Likes />
               </div>
            )}
         </div>
      </div>
   )
}

export default ReviewForm
