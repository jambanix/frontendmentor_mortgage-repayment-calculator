import { EmptyResult } from "./EmptyResult";
import { ValidResult } from "./ValidResult";

export const Results = ({ result }) => {
  return (
    <section className="bg-slate-900 lg:rounded-bl-[20%] md:rounded-bl-xl md:rounded-br-xl lg:rounded-tr-xl lg:rounded-br-xl p-6 flex justify-center">
      {result ? <ValidResult result={result} /> : <EmptyResult />}
    </section>
  );
};
