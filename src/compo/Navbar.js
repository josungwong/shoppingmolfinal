import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
function Navbar({authenticate,setAuthenticate}) {
    const [slidbar,setSlidbar] =useState(false)
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ]
    const nav = useNavigate()
    const toMain = () =>{
        nav('/')
    }
    const search = (event) =>{
        if(event.key==="Enter"){
            
            let keyWord = event.target.value
            console.log("keypress",keyWord)
            nav(`/?q=${keyWord}`)
        }
    }
    const makeLogout = ()=>{
        setAuthenticate(false)
    }
    const slidMenu = () => {
        setSlidbar(!slidbar)
    }
  return (
    <div>
        <div>
            <span className='ham-box' onClick={slidMenu}>
            <span className='ham-button'></span>
            <span className='ham-button'></span>
            <span className='ham-button'></span>
            </span>
            <div className='slid-menu' style={{left: slidbar?0:-300}}>
                <ul className='slid-list'>
                <spam onClick={slidMenu} className="pressxtopay">X</spam>
                {menuList.map(menu=>(<li>{menu}</li>))}
                </ul>
            </div>
            
            <div className='login-button'>
            {authenticate===false?<Link to="/login" className='login-login'><FontAwesomeIcon icon={faUser} />로그인</Link>:<Link to="/" className='login-login'  onClick={makeLogout}><FontAwesomeIcon icon={faUser}/>로그아웃</Link>}
            </div>
        </div>
        <div className='main-icon'>
            <img onClick={toMain} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtA9XSS-40ippEuRO7BNQmZrKorOktzBpAg&s' width={100} alt=''/>
        </div>
        <div className='thrd-area'>
            <div className='no'></div>
            <div className='menu-area'>
                <ul className='menu-list'>
                {menuList.map(menu=>(<li>{menu}</li>))}
                </ul>
            </div>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                <input placeholder='제품검색' className='jwvnarjator' onKeyUp={(event)=>search(event)}></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar
