import { Input } from "../components/Input"
import { Radio } from "./Radio"

export const Form = () => {
  return (
    <section className="bg-white flex flex-col p-4 gap-4 rounded-tl-xl rounded-bl-xl">
      <header className="flex flex-col sm:flex-row sm:justify-between">
        <h1 className="text-slate-900 font-bold text-xl">Mortgage Calculator</h1>
        <button className="bg-none h-fit w-fit underline text-slate-700 text-sm">Clear all</button>
      </header>

      {/* Input group */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Mortgage Amount" unit="£" containerClassName="sm:col-span-full"/>
        <Input label="Mortgage Term" unit="years" unitOrientationRight containerClassName="sm:col-start-1"/>
        <Input label="Interest Rate" unit="%" unitOrientationRight containerClassName="sm:col-start-2"/>
      </div>

      {/* Radio group */}
      <div className="flex flex-col gap-2 w-full sm:col-span-2">
        <label htmlFor="">Mortgage Type</label>
        <Radio label="Repayment" name="repayment" />
        <Radio label="Interest Only" name="interest" />
      </div>
    </section>
  )
}