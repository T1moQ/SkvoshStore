import { useParams } from 'react-router-dom'
import DB from '../../../../DB/DB'
import cl from './GoodPageMain.module.css'

const PageText = () => {

   const params = useParams()
   const good = DB.find((el) => el.slug === params.slug)

   return (
      <div className={cl.page_box}>
         <div className={cl.photo_box}>
            <img src={good.photo} alt="#" className={cl.photo} />
         </div>
         <div className={cl.text_column}>
            <h2 className={cl.title}>{good.title}</h2>
            <h2 className={cl.price}>${good.price}</h2>
            <div className={cl.text}>
               Looking for the perfect solution for your needs? We present to you our new product, which combines rich functionality with elegant design. Whether for home, office or your travels, this product will become a reliable companion in all situations.
            </div>
         </div>
      </div>
   )
}

export default PageText
