import { forwardRef } from "react"

export const Radio = forwardRef(({name, label, onChange, isChecked}, ref) => {
  return (
    <div onClick={onChange} className="flex gap-2 w-full border border-slate-500 p-3 cursor-pointer">
      <input ref={ref} type="radio" name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
});