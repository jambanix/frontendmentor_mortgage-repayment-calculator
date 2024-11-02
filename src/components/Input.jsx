import { forwardRef } from "react";


export const Input = forwardRef(({unit, label, unitOrientationRight=false, containerClassName=null, name, onChange, onBlur, error}, ref) => {

  const position = unitOrientationRight ? "absolute right-0" : "absolute left-0";
  const iconBorder = unitOrientationRight ? "rounded-r-lg border-r" : "rounded-l-lg border-l";
  const inputPadding = !unitOrientationRight ? "pl-12 pr-4" : "px-4";
  const iconStyle = error ? "bg-red" : "bg-slate-500";
  
  return (
    <div className={`flex-col ${containerClassName}`}>
      <label htmlFor="" className="text-slate-700">{label}</label>
      <div className={`flex relative`}>

        {/* Input */}
        <input name={name} onChange={onChange} onBlur={onBlur} ref={ref} type="text" className={`basis-full min-h-12 rounded-lg border border-slate-500 w-full ${inputPadding} focus:border-lime focus:!outline-none`}/>

        {/* Icon */}
        <div className={`${position} ${iconBorder} border-t border-b h-full w-fit text-slate-900 flex items-center justify-center p-4 ${iconStyle}`}>
          <p>{unit}</p>
        </div>
      </div>
      {error && <p className="text-red">{error.message}</p>}
    </div>
  );
});