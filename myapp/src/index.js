import React from 'react';
import ReactDOM from 'react-dom/client';


const App = () =>{
  return(
    <div>
      This my first app
    </div>
  )
}

// ReactDOM.render(<App/>, document.getElementById('root') )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
