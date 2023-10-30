import { useState } from "react"
import Header from "../../../Header"
import Main from "../../../Main"
import Footer from "../../../Footer"

const HomePage = () => {
   const [value, setValue] = useState('')
   return (
      <div style={{ display: 'contents' }}>
         <Header value={value} setValue={setValue} />
         <Main value={value} />
         <Footer />
      </div>
   )
}

export default HomePage
