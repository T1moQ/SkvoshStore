const GoodCard = (props) => {
   const { photo, title, price } = props
   return (
      <div className='card_item'>
         <div className="image_box">
            <img src={photo} alt="#" className="image" />
         </div>
         <div className='card-title'>{title}</div>
         <div className='card-price'>$ {price}</div>
      </div>
   )
}

export default GoodCard
