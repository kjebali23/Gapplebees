import React from 'react'

const FormInput = (props) => {

    const {label , onChange , id , ...inputProps } = props;

  return (
    <div className='form-section-container'>
                {/* <label> {props.label} :</label> */}
                <input {...inputProps} onChange={onChange}
                // required
                />
    </div>
  )
}

export default FormInput