import { forwardRef } from "react";


export const Input = forwardRef(({unit, label, unitOrientationRight=false, containerClassName=null, name, onChange, onBlur, error}, ref) => {

  const position = unitOrientationRight ? "absolute right-0" : "absolute left-0";
  const iconBorder = unitOrientationRight ? "rounded-r-lg border-r" : "rounded-l-lg border-l";
  const inputPadding = !unitOrientationRight ? "pl-12 pr-4" : "px-4";
  const iconStyle = error ? "bg-red" : "bg-slate-100";
  const iconBorderStyle = () => {
    if (unitOrientationRight) {
      if (error) {
        return "border-t-red border-r-red border-b-red rounded-r-lg border-r";
      }
      else {
        return "border-t-slate-300 border-r-slate-300 border-b-slate-300 rounded-r-lg border-r border-b border-t";
      }
    }
    else {
      if (error) {
        return "border-t-red border-l-red border-l-red rounded-l-lg border-l";
      }
      else {
        return "border-t-slate-300 border-l-slate-300 border-b-slate-300 rounded-l-lg border-l border-b border-t";
      }
    }
  }

  return (
    <div className={`flex-col ${containerClassName}`}>
      <label htmlFor="" className="text-slate-700">{label}</label>
      <div className={`flex relative`}>

        {/* Input */}
        <input name={name} onChange={onChange} onBlur={onBlur} ref={ref} type="text" className={`basis-full min-h-12 rounded-lg border ${error ? "border-red" : "border-slate-300"} w-full ${inputPadding} focus:border-lime focus:!outline-none`}/>

        {/* Icon */}
        <div className={`${position} ${iconBorderStyle()} h-full w-fit ${error ? "text-white" : "text-slate-900"} flex items-center justify-center p-4 ${iconStyle}`}>
          <p>{unit}</p>
        </div>
      </div>
      {error && <p className="text-red">{error.message}</p>}
    </div>
  );
});