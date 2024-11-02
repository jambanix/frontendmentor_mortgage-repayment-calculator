import { Input } from "../components/Input"
import { Radio } from "./Radio"
import { useForm } from "react-hook-form"

export const Form = ({ onSubmit }) => {

  const {register, handleSubmit, formState, getValues} = useForm();


  console.log(getValues());
  return (
    <section className="bg-white rounded-tl-xl rounded-bl-xl">
      <form className="flex flex-col p-4 gap-4" onSubmit={handleSubmit(onSubmit)}>

        {/* Header and clear button */}
        <header className="flex flex-col sm:flex-row sm:justify-between">
          <h1 className="text-slate-900 font-bold text-xl">Mortgage Calculator</h1>
          <button className="bg-none h-fit w-fit underline text-slate-700 text-sm">Clear all</button>
        </header>

        {/* Input group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input label="Mortgage Amount" unit="£" containerClassName="sm:col-span-full" {...register("mortgageAmount", {required: true, pattern: {value: /^[\.0-9]*/, message: "Enter a valid mortgage amount"}})} />
          <Input label="Mortgage Term" unit="years" unitOrientationRight containerClassName="sm:col-start-1" {...register("mortgageTerm", {required: true, pattern: {value: /^[0-9]*/, message: "Enter a valid term"}})} />
          <Input label="Interest Rate" unit="%" unitOrientationRight containerClassName="sm:col-start-2" {...register("mortgageRate", {required: true, pattern: {value: /^[\.0-9]*/, message: "Enter a valid interest rate"}})}/>
        </div>

        {/* Radio group */}
        <div className="flex flex-col gap-2 w-full sm:col-span-2">
          <label htmlFor="">Mortgage Type</label>
          <Radio label="Repayment" name="repayment" {...register("repayment")}/>
          <Radio label="Interest Only" name="interest" {...register("interest")}/>
        </div>

        {/* Submit button */}
        <button type="submit" className="rounded-full bg-lime transition-all text-slate-900 w-full sm:max-w-[314px] h-12 hover:contrast-125">Calculate</button>
      </form>
    </section>
  )
}