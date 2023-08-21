import { useState } from "react";

function App() {
  const [result, setresult] = useState("");

  const calculator = e => {
    try {
      setresult(eval(result))
    } catch (error) {
      setresult('Error')
    }
  } 

  return (
  
    <div className="container" >
      <div className="calculator">
       <form action="">
        <div className="display">
          <input type="text" value={result} />
        </div>
        <div>
          <input type="button"   value="AC" onClick={() => setresult("")}/>
          <input type="button"   value="DE" onClick={e => setresult(result.slice(0, -1))}/>
          <input type="button"   value="." onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="/" onClick={e => (setresult(result + e.target.value))}/>
        </div>
        <div>
          <input type="button"   value="7" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="8" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="9" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="*" onClick={e => (setresult(result + e.target.value))}/>
        </div>
        <div>
          <input type="button"   value="4" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="5" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="6" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="+" onClick={e => (setresult(result + e.target.value))}/>
        </div>
        <div>
        <input type="button"   value="1" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="2" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="3" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="-" onClick={e => (setresult(result + e.target.value))}/>
        </div>
        <div>
        <input type="button"   value="00" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="0" onClick={e => (setresult(result + e.target.value))}/>
          <input type="button"   value="=" onClick={calculator}/>
        </div>
       </form>
    </div>
    </div>
  );
}

export default App;
