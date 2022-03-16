import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PlayButton() {

  const navigate = useNavigate();

  return <button className='play' onClick={()=>navigate("/mode")}>PLAY</button>
}
