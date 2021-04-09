import React, {useState} from 'react';

const Input: React.FC = () => {

  type StateTypes = {
    name: string,
    age: number
  }

  const [state, setState] = useState<StateTypes>({
    name: 'Bill',
    age: 23,
  });

  const changeState = () => {
    setState({ 
      ...state, 
      name: 'Jim', 
      age: 25,
    })
  }
  return (
    <div className="home-grid">
      <div>
        <p>Name: {state.name}</p>
        <p>Age: {state.age}</p>
        <hr/>
        <input type="text" value={state.name} onChange={changeState} /><br/>
        <input type="number" value={state.age} onChange={changeState}/><br/>
        <button onClick = {changeState}>Update State</button>
      </div>
    </div>
  );
}

export default Input;