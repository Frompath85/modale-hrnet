import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import './ModaleHRnet.css'
import { NavLink } from 'react-router-dom'

const  ModaleHRnet = ({closeMoldal,textModal, linkModal, linkTo})=> {

  return (
    <div className='ModaleContainer'>
      <div className='GreyBackgroung'>  
      </div>
      <div className='MyModale'> 
          <button className='CloseButton' onClick={() => { closeMoldal(false)} }> 
            <FontAwesomeIcon className='CloseIcon' icon={faCircleXmark} />
          </button>
          <p className='TextOfModal'> {textModal} </p>
          <NavLink className='LinkOfModal' to={linkTo}> {linkModal} </NavLink>
      </div>
    </div>
  )
}

export default ModaleHRnet