import { Input } from "../components/Input";
import { Radio } from "./Radio";
import { useForm } from "react-hook-form";
import calculatorIcon from "../assets/images/icon-calculator.svg";

const defaultValues = {
  mortgageAmount: "",
  mortgageTerm: "",
  mortgageRate: "",
  repaymentType: "repayment",
};

export const Form = ({ onSubmit, onClear }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, dirtyFields },
    reset,
    clearErrors,
  } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });

  const selectedRepaymentType = watch("repaymentType");
  const handleReset = () => {
    clearErrors();
    reset();
    onClear();
  };

  return (
    <section className="bg-white rounded-tl-xl rounded-bl-xl">
      <form
        noValidate
        className="flex flex-col p-6 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Header and clear button */}
        <header className="flex flex-col gap-2 sm:flex-row sm:justify-between py-2">
          <h1 className="text-slate-900 font-bold text-xl">
            Mortgage Calculator
          </h1>
          <button
            className="bg-none h-fit w-fit underline text-slate-700 text-sm"
            onClick={handleReset}
          >
            Clear all
          </button>
        </header>

        {/* Input group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            error={dirtyFields.mortgageAmount && errors?.mortgageAmount}
            label="Mortgage Amount"
            unit="£"
            containerClassName="sm:col-span-full"
            {...register("mortgageAmount", {
              required: true,
              pattern: {
                value: /^[\.0-9]*$/,
                message: "Enter a valid mortgage amount",
              },
            })}
          />
          <Input
            error={dirtyFields.mortgageTerm && errors?.mortgageTerm}
            label="Mortgage Term"
            unit="years"
            unitOrientationRight
            containerClassName="sm:col-start-1"
            {...register("mortgageTerm", {
              required: true,
              pattern: { value: /^[0-9]*$/, message: "Enter a valid term" },
            })}
          />
          <Input
            error={dirtyFields.mortgageRate && errors?.mortgageRate}
            label="Interest Rate"
            unit="%"
            unitOrientationRight
            containerClassName="sm:col-start-2"
            {...register("mortgageRate", {
              required: true,
              pattern: {
                value: /^[\.0-9]*$/,
                message: "Enter a valid interest rate",
              },
            })}
          />
        </div>

        {/* Radio group */}
        <div className="flex flex-col gap-2 w-full sm:col-span-2">
          <label htmlFor="" className="text-slate-700 text-sm font-semibold">
            Mortgage Type
          </label>
          <Radio
            onSelect={setValue}
            label="Repayment"
            name="repayment"
            value="repayment"
            {...register("repaymentType")}
            selectedType={selectedRepaymentType}
          />
          <Radio
            onSelect={setValue}
            label="Interest Only"
            name="interest"
            value="interest"
            {...register("repaymentType")}
            selectedType={selectedRepaymentType}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="items-center justify-center font-bold rounded-full bg-lime transition-all text-slate-900 w-full sm:max-w-[314px] h-12 hover:contrast-125 flex gap-3"
        >
          <img src={calculatorIcon} alt="icon calculator" className="w-6 h-6" />
          <p>Calculate repayments</p>
        </button>
      </form>
    </section>
  );
};
