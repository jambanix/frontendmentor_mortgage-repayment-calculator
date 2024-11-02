import { forwardRef } from "react"

export const Radio = forwardRef(({name, label, value, selectedType, onSelect}, ref) => {

  const isSelected = selectedType === value ? true : false;
  const selectionStatusStyle = isSelected ? "border-lime bg-lime/10" : "border-slate-500 bg-none"

  return (
    <div onClick={() => onSelect(name, value)} className={`flex gap-2 items-center w-full border p-3 cursor-pointer rounded-lg ${selectionStatusStyle}`}>
      <input className="h-5 w-5 accent-slate-900" value={value} ref={ref} type="radio" name={name} id={name} />
      <label className="font-semibold" htmlFor={name}>{label}</label>
    </div>
  )
});