import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
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
  return (
    <div>
        <div>
            <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
            </div>
        </div>
        <div className='main-icon'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtA9XSS-40ippEuRO7BNQmZrKorOktzBpAg&s' width={100} alt='' />
        </div>
        <div className='thrd-area'>
            <div className='no'></div>
            <div className='menu-area'>
                <ul className='menu-list'>
                {menuList.map(menu=>(<li>{menu}</li>))}
                </ul>
            </div>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch}/>
                <input placeholder='제품검색' className='jwvnarjator'></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar
