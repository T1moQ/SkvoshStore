import DB from '../DB/DB'
import GoodCard from './GoodCard'

const CardList = () => {
   return (
      <>
         {DB.map((el, index) =>
            <GoodCard key={index} {...el} />
         )}
      </>
   )
}

export default CardList
