import { EmptyResult } from "./EmptyResult";
import { ValidResult } from "./ValidResult";

export const Results = ({ result }) => {
  return (
    <section className="bg-slate-900 lg:rounded-bl-[20%] rounded-tr-xl rounded-br-xl p-6 flex justify-center">
      {result ? <ValidResult result={result} /> : <EmptyResult />}
    </section>
  );
};
