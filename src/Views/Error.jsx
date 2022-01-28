import React from 'react';
import { useNavigate } from 'react-router-dom';
export const Error = () => {
  const navigate = useNavigate()
  return (
    <div className='container-home'>
        <div className='container-error'>
            <h2>You sure you got the name right?</h2>
            <button onClick={()=> navigate('/pokedex')}>Back to Home View</button>
        </div>
    </div>
  )
};
