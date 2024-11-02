

export const Input = ({ name, unit, label, unitOrientationRight=false, containerClassName=null}) => {

  // For styling
  const position = unitOrientationRight ? "absolute right-0" : "absolute left-0";
  const iconBorder = unitOrientationRight ? "rounded-r-lg border-r" : "rounded-l-lg border-l";
  const inputPadding = !unitOrientationRight ? "pl-12 pr-4" : "px-4";

  return (
    <div className={`flex-col ${containerClassName}`}>
      <label htmlFor="" className="text-slate-700">{label}</label>
      <div className={`flex relative`}>
        <input type="number" name={name} id={name} className={`basis-full min-h-12 rounded-lg border border-slate-500 w-full ${inputPadding}`}/>
        <div className={`${position} ${iconBorder} border-t border-b h-full w-fit text-slate-900 flex items-center justify-center p-4`}>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  )
}