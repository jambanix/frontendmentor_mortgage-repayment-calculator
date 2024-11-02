import { forwardRef, useState } from "react";

export const Input = forwardRef(
  (
    {
      unit,
      label,
      unitOrientationRight = false,
      containerClassName = null,
      name,
      onChange,
      onBlur,
      error,
    },
    ref
  ) => {
    const position = unitOrientationRight
      ? "absolute right-0"
      : "absolute left-0";
    const inputPadding = !unitOrientationRight ? "pl-14 pr-4" : "px-4";

    const [isFocusing, setIsFocusing] = useState(false);

    const iconBorderStyle = () => {
      if (unitOrientationRight) {
        if (error) {
          return "border-t-red border-r-red border-b-red rounded-r-lg border-r";
        } else {
          return `rounded-r-lg border-r border-b border-t ${
            isFocusing
              ? "border-t-lime border-b-lime border-r-lime bg-lime text-slate-900"
              : "border-t-slate-300 border-b-slate-300 border-r-slate-300 bg-slate-300"
          }`;
        }
      } else {
        if (error) {
          return "border-t-red border-l-red border-l-red rounded-l-lg border-l";
        } else {
          return `rounded-l-lg border-l border-b border-t ${
            isFocusing
              ? "border-t-lime border-b-lime border-l-lime bg-lime text-slate-900"
              : "border-t-slate-300 border-b-slate-300 border-l-slate-300 bg-slate-300"
          }`;
        }
      }
    };

    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        <label htmlFor="" className="text-slate-700 text-sm font-semibold">
          {label}
        </label>
        <div className={`flex relative focus:border-lime`}>
          {/* Input */}
          <input
            onBlur={() => setIsFocusing(false)}
            onFocus={() => setIsFocusing(true)}
            name={name}
            onChange={onChange}
            ref={ref}
            type="text"
            className={`basis-full min-h-12 rounded-lg border ${
              error ? "border-red" : "border-slate-300"
            } w-full ${inputPadding} focus:border-lime focus:!outline-none`}
          />

          {/* Icon */}
          <div
            className={`${position} ${iconBorderStyle()} h-full w-fit ${
              error ? "text-white" : "text-slate-700"
            } flex items-center justify-center p-4 font-semibold`}
          >
            <p>{unit}</p>
          </div>
        </div>
        {error && <p className="text-red">{error.message}</p>}
      </div>
    );
  }
);
