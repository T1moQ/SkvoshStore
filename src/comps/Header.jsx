import { useState } from "react"
import { Link } from "react-router-dom"
import DB from "../DB/DB"

const Header = (props) => {
   const { value, setValue } = props
   const [autocompleteIsOpen, setAutocompleteIsOpen] = useState(true)

   const inputClickHandler = () => {
      setAutocompleteIsOpen(true)
   }

   const clickItemHandler = (event) => {
      setValue(event.target.textContent)
      setAutocompleteIsOpen(!autocompleteIsOpen)
   }

   const filteredGoods = DB.filter(el => {
      return el.title.toLowerCase().includes(value.toLowerCase())
   })

   return (
      <header className='header'>
         <nav className='header_nav'>
            <Link to={'/'} className="title_link">
               <h1 className='title-header'>Skvosh Boardshop</h1>
            </Link>
            <form className='headre_form'>
               <input
                  value={value}
                  onChange={event => setValue(event.target.value)}
                  onClick={inputClickHandler}
                  className='header_input'
                  placeholder="Search..."
               />
               <ul className="autocomplete">
                  {value && autocompleteIsOpen
                     ? filteredGoods.map((el, index) =>
                        <li className="autocomplete_item"
                           key={index}
                           {...el}
                           onClick={clickItemHandler}>
                           {el.title}
                        </li>)
                     : null
                  }
               </ul>
            </form>
         </nav>
      </header>
   )
}

export default Header
