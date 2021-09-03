import React, { Component, useState } from 'react'


export const normalizeCnic = (value) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 5) {
    return onlyNums
  }
  if (onlyNums.length <= 12) {
    return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5)}`
  }
  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 12)}-${onlyNums.slice(12, 13)}`
}


export const normalizeNumber = (value) => {
  if (!value) return value
  const onlyNums = value.replace(/[^\d]/g, '')
  return onlyNums
}

export const normalizeFloat = (value) => {
  value = value
    .replace(/[^0-9.]/g, '')
  const sections = value.split('.')
  if (sections[0] !== '0' && sections[0] !== '00') {
    sections[0] = sections[0].replace(/^0+/, '')
  } else {
    sections[0] = '0'
  }
  if (sections[1]) {
    return sections[0] + '.' + sections[1].slice(0, 5)
  } else if (value.indexOf('.') !== -1) {
    return sections[0] + '.'
  } else {
    return sections[0]
  }
}
export const cnicFormat = (value) => {
  let st = JSON.stringify(value)
  const onlyNums = st.replace(/[^\d]/g, '')
  if (onlyNums.length <= 5) {
    return onlyNums
  }
  if (onlyNums.length <= 12) {
    return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5)}`
  }
  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 12)}-${onlyNums.slice(12, 13)}`
}
export const disabledField = ({ type, label, input, meta: { touched, error } }) => {
  return (
    <div className='inputform'> <input className='form-control input-box' {...input} type={type} placeholder={label} readOnly="readonly" ></input></div>)

}
export const renderField = ({ type, label, input, min, max, meta: { touched, error } }) => {

  const dateProps = type == 'date' ? { min, max } : null

  return (<div className='inputform'>
    <input className='form-control input-box' {...dateProps} {...input} type={type} placeholder={label} autoComplete='off' ></input>
    {touched && error &&
      <p className='price-box' >{error}</p>}
  </div>
  )
}

export const isRequired = value => value ? undefined : 'This Field is Required'
