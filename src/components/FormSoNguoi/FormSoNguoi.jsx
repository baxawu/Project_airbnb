import React, {  useState } from 'react';
import ModalComponent from '../ModalComponent/modal';

// Khai báo UserContext ở ngoài hàm component
export const Context = React.createContext()

export default function FormSoNguoi() {
  const [count, setCount] = useState(0);

  const handleTru = () => {
    setCount(prev => prev - 1);
  }

  return (
    <Context.Provider value={count}>
      <div>
        <button onClick={handleTru}>-</button> {count} <button onClick={() => { setCount(prev => prev + 1) }}>+</button>
      </div>
    </Context.Provider>
  );
}

