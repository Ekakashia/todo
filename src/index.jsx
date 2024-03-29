import React, { useState } from "react";

import ReactDOM from "react-dom/client";

function App() {
    
    const [value, setValue] = useState("");
    const [text, setText] = useState([]);
    const myForm = (event) => {
       event.preventDefault();
       setText([...text, value]);
       event.target.reset();
    }
    const remove = (index) => {
      const array = [...text];
      array.splice(index, 1);
      setText(array);
    }

    return(
   
   <React.Fragment>
       <div className="container mt-4">

        <div className="row justify-content-center">
            <div className="col-md-3"><h1>My Todos</h1></div>
        </div>
        <div className="row justify-content-center mt-3">
            <div className="col-md-6">
               <div className="card border border-0">
                <div className="card-header border border-0">
                  <form method="POST" onSubmit={(event) => myForm(event)}>
                    <div className="row justify-content-between">
                        <div className="col-md-10">
                        <input type="text" className="form-control" placeholder="say something to do" onChange={(event) => setValue(
                            event.target.value )}></input>
                        </div>
                        <div className="col-md-2">
                        <button type="button" className="btn btn-md bg-primary">save</button>
                        </div>
                    </div>
                  </form>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled">
                    
                        {
                            text.map((item, index) => <li className="mb-3 border-bottom d-flex justify-content-between" 
                            key={index}><input value={item} type="checkbox" /><span>{item}</span> <button type="button" 
                            className="btn btn-danger btn-md" onClick={() => remove(index)}>remove</button></li>)
                        }
                    
                    </ul>
                </div>
               </div>
            </div>
        </div>
       </div>
   
    </React.Fragment>

  )

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);