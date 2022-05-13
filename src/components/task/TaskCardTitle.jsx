import React, { useState } from 'react';

export const TaskCardTitle = () => {
  const [ isClick, setIsClick ] = useState(false);
  const [ inputCardTitle, setInputCardTItle ] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (event) => {
    setInputCardTItle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={ handleClick } className='taskCardTitleInputArea'>
      {isClick ? (
      <form onSubmit={ handleSubmit }>
        <input 
        className='taskCardTitleInput'
        autoFocus
        type="text" 
        onChange={handleChange} 
        onBlur={handleBlur} 
        value={inputCardTitle}
        maxLength="20"
        ></input>
      </form>
      ) : (
      <h3>{ inputCardTitle }</h3>
      )}
    </div>
  );
};
