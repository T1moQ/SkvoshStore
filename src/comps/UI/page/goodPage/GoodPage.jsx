import { useState } from "react"
import Header from "../../../Header"
import Footer from "../../../Footer"
import GoodPageMain from "./GoodPageMain"

const GoodPage = () => {
   const [value, setValue] = useState('')
   return (
      <div>
         <Header value={value} setValue={setValue} />
         <GoodPageMain />
         <Footer />
      </div>
   )
}

export default GoodPage
