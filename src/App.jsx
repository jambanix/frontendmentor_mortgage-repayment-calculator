
import { useState } from 'react';
import './App.css'
import { Form } from './components/Form'
import { Results } from "./components/Results"

const calculate = (amount, term, rate, repaymentType="repayment") => {
  amount = Number(amount);
  term = Number(term);
  rate = Number(rate);

  const interestRateMultiplier = (rate / 100) / 12;
  const termMonths = term * 12;
  
  const repaymentCalc = () => {
    const quotient = interestRateMultiplier * Math.pow(1 + interestRateMultiplier, termMonths);
    const divisor = (Math.pow(1 + interestRateMultiplier, termMonths)) - 1
    const paymentAmount = amount * (quotient / divisor);
    return {
      payment: paymentAmount.toFixed(2),
      total: (paymentAmount * termMonths).toFixed(2)
    }
  }

  const interestOnlyCalc = () => {
    const paymentAmount = (amount * (interestRateMultiplier * 12) / 12);
    const total = (paymentAmount * termMonths) + amount;
    return {
      payment: paymentAmount.toFixed(2),
      total: total.toFixed(2)
    }
  }
  return (repaymentType === "repayment" ? repaymentCalc() : interestOnlyCalc())
}

function App() {

  const [result, setResult] = useState();

  const handleSubmit = (formValues) => {
    const {mortgageAmount, mortgageTerm, mortgageRate, repaymentType} = formValues;
    const {payment, total} = calculate(mortgageAmount, mortgageTerm, mortgageRate, repaymentType);
    setResult(prev => ({payment: payment, total: total}));
  }


  const handleClear = () => setResult(prev => undefined);

  return (
    <>
      <main>
        <div className="flex items-center justify-center w-full min-h-screen bg-slate-100">
          <div className="grid grid-rows-[min-content_min-content] grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 w-full max-w-[688px] lg:max-w-[1008px] lg:w-[1008px] bg-white rounded-xl">
            <Form onClear={handleClear} onSubmit={handleSubmit}/>
            <Results result={result} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
