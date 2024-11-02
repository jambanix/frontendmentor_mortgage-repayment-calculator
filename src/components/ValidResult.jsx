// Comma method from https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators

export const ValidResult = ({ result }) => {
  const addCommasToNumber = (number) =>
    number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="flex flex-col gap-4 h-full">

      {/* Your results heading */}
      <h2 className="text-slate-100 font-bold text-lg">Your results</h2>
      <p className="text-slate-300 text-sm">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "calculate repayment" again
      </p>

      <div className="bg-black/30 p-4 rounded-md relative basis-52">

        {/* Top bar */}
        <div className="absolute h-1 w-full bg-lime left-0 top-0 rounded-t-md"></div>

        <div className="flex flex-col gap-4">
          
          {/* Monthly payments */}
          <div className="flex flex-col justify-center py-2 gap-1">
            <h3 className="text-slate-300 text-sm">Your monthly repayments</h3>
            <h1 className="text-5xl text-lime font-semibold">
              £{addCommasToNumber(result.payment)}
            </h1>
          </div>

          <hr className="text-slate-100/10" />

          {/* Total payable */}
          <div className="flex flex-col py-2 gap-1">
            <h3 className="text-slate-300 text-sm">
              Total you'll repay over the term
            </h3>
            <p className="text-white text-md font-semibold">
              £{addCommasToNumber(result.total)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
