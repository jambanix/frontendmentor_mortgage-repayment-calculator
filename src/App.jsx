
import './App.css'
import { Form } from './components/Form'
import { Results } from "./components/Results"

function App() {

  const handleSubmit = (formValues) => {
    console.log(formValues);
  }

  return (
    <>
      <main>
        <div className="flex items-center justify-center w-full min-h-screen bg-slate-300">
          <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 w-full max-w-[688px] lg:max-w-[1008px] lg:w-[1008px] bg-white rounded-xl">
            <Form onSubmit={handleSubmit}/>
            <Results />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
