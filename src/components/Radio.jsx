import { forwardRef } from "react"

export const Radio = forwardRef(({name, label, value, selectedType, onSelect}, ref) => {

  const isSelected = selectedType === value ? true : false;
  const selectionStatusStyle = isSelected ? "border-lime" : "border-slate-500"

  return (
    <div onClick={() => onSelect(name, value)} className={`flex gap-2 w-full border p-3 cursor-pointer ${selectionStatusStyle}`}>
      <input className="" value={value} ref={ref} type="radio" name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
});