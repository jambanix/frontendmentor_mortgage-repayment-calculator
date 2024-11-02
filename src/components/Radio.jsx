
export const Radio = ({name, label}) => {
  return (
    <div className="flex gap-2 w-full border border-slate-500 p-3">
      <input type="radio" name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}