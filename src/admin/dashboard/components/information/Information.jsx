import React from 'react'
import './Information.css'
import { Link } from 'react-router-dom'
import profile from '../../../../assets/images/profile.png'
import {BsFillCapslockFill, BsFillPersonPlusFill, BsChatDots} from 'react-icons/bs'

const Information = () => {
  return (
    <div className='information'>
        <div className='view-web is-flex is-align-items-center is-justify-content-space-between mb-5'>
            <div className='view-webpage'>
                <a href='/' className='button has-background-success has-text-white'> visit website </a>
            </div>
            <div className="view-profile">
                <span> 
                    <Link to="/">
                        <img src={profile} alt="" className='image profile-photo'/>
                    </Link>
                </span>
            </div>
        </div>
        <div className='info'>
            <div className="info-item">
                <h4> News </h4>
                <span> 16 </span>
                <BsFillCapslockFill />
            </div>
            <div className="info-item">
                <h4> Users </h4>
                <span> 8 </span>
                <BsFillPersonPlusFill />
            </div>
            <div className="info-item">
                <h4> Comments </h4>
                <span> 120 </span>
                <BsChatDots />
            </div>
        </div>
    </div>
  )
}

export default Information
