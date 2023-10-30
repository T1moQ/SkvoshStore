import cl from './Select.module.css'

const Select = (props) => {
   const { options, value, onChange, defaultValue } = props
   return (
      <select
         value={value}
         onChange={event => onChange(event.target.value)}
         name="select"
         id="1"
         className={cl.select}>
         <option>{defaultValue}</option>
         {options.map((el, index) =>
            <option key={index} value={el.value}>{el.title}</option>
         )}
      </select>
   )
}

export default Select
