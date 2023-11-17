import React from 'react'

function Input({id,title,type,name,handelData ,customClasses,error}) {
  return (
   <div className='mb-3'>
    <label htmlFor={id} className='form-label'>{title}</label>
        <input type={type} name={name} className={`form-control ${customClasses}`} id={id} onClick={handelData}
        />
        {error[name] && <p className='text-danger'>{error[name]}</p>} 
   
   </div>
  )
}

export default Input