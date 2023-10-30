import { useState } from "react"
import { Link } from "react-router-dom"
import Select from "./UI/select/Select"
import GoodCard from "./GoodCard"
import DB from "../DB/DB"

const Main = (props) => {
   const { value } = props

   const [sort, setSort] = useState('')

   const sortCards = (sort) => {
      setSort(sort)
      if (sort === 'up') {
         DB.sort((a, b) => b.price - a.price)
      } else {
         DB.sort((a, b) => a.price - b.price)
      }
   }

   const filteredGoods = DB.filter(el => {
      return el.title.toLowerCase().includes(value.toLowerCase())
   })

   return (
      <main className='main container'>
         <div className='select_box'>
            <Select
               defaultValue={'Sort...'}
               options={[
                  { value: 'up', title: 'Price from High to Low' },
                  { value: 'down', title: 'Price from Low to High' }
               ]}
               value={sort}
               onChange={sortCards}
            />
         </div>
         <div className='card_container'>
            {filteredGoods.length
               ? filteredGoods.map((el, index) =>
                  <Link className="card_link" to={`/${el.slug}`} key={index}>
                     <GoodCard {...el} />
                  </Link>)
               : <h2>Sorry...nothing has found</h2>
            }
         </div>
      </main>
   )
}

export default Main
