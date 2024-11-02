import emptyImg from "../assets/images/illustration-empty.svg"


const EmptyResult = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 w-full h-full">
      <img src={emptyImg} alt="no results image" />
      <h2 className="font-bold text-white">Results shown here</h2>
      <p className="text-slate-300">Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
    </div>
  )
}

export const Results = ({ result }) => {
  return (
  <section className="bg-slate-900 lg:rounded-bl-[20%] rounded-tr-xl rounded-br-xl">
    {result? <h1>Result</h1> : <EmptyResult/>}
  </section>
  )
}