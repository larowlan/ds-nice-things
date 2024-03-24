import React, {useState} from 'react';

const Expando = ({children, title= '✨'}) => {
  const [open, setIsOpen] = useState(false);
  if (!open) {
    return <button onClick={() => setIsOpen(true)}>{title}</button>
  }
  return (
    <div style={{paddingTop: '3rem'}}>{children}</div>
  );
}

export default Expando;
