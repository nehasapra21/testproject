/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useLayoutEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import '../../assets/sidemenu.css'
import logo from '../../assets/images/LOGO-YELLOW.png'
import MyAccount from '../../pages/MyAccount'
import ButtonComponent from '../../components/Button'
import { BASE_URL } from '../../constants'

import getMyAccountDetail from '../../API/GetMyAccount'

import { useSelector, useDispatch } from 'react-redux'

import { setUpdateData } from '../../redux/loginLogout'

const Header = () => {
  const [showmenu, setmenu] = useState(false)
  const history = useHistory()

  const { isLoggedIn, data } = useSelector((state) => state.loginLogout)
  const dispatch = useDispatch()

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useLayoutEffect(() => {
    setWindowSize(window.innerWidth)
  }, [window.innerWidth])

  const closeNav = () => {
    setmenu(false)
    document.getElementById('mySidenav').style.transform = 'translateX(100vw)'
  }
  const openNav = async () => {
    try {
      const res = await getMyAccountDetail()
      dispatch(setUpdateData(res.data))
    } catch {
      //err goes here
    }
    setmenu(true)
    document.getElementById('mySidenav').style.transform = 'translateX(0)'
  }

  return (
    <>
      <Navbar collapseOnSelect expand='lg' className='common-header'>
        <Container fluid>
          <Navbar.Brand href='/categories' className='logo-brand'>
            <img src={logo} alt='logo' className='logo-image' />
          </Navbar.Brand>
          {windowSize < 600 ? (
            isLoggedIn === false ? (
              showmenu ? (
                <a
                  href='javascript:void(0)'
                  className='closebtn'
                  onClick={() => closeNav()}
                >
                  &times;
                </a>
              ) : (
                <img
                  className='profile-icon-hedaer open-nav mobile-hide'
                  alt='nav-control'
                  onClick={() => openNav()}
                  src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
                />
              )
            ) : (
              <div className='user-img-div'>
                {data && data.ProfileImage && data.ProfileImage !== '' ? (
                  !showmenu ? (
                    <img
                      className='profile-icon-hedaer open-nav'
                      onClick={() => openNav()}
                      src={`${BASE_URL}${data.ProfileImage}`}
                      alt='user-img'
                    />
                  ) : (
                    <a
                      href='javascript:void(0)'
                      className='closebtn'
                      onClick={() => closeNav()}
                    >
                      &times;
                    </a>
                  )
                ) : (
                  <img
                    className='profile-icon-hedaer open-nav mobile-hide'
                    alt='nav-control'
                    onClick={() => openNav()}
                    src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
                  />
                )}
              </div>
            )
          ) : null}

          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <div className='nav-btns'>
                {isLoggedIn === false ? (
                  <>
                    <ButtonComponent
                      text='Login'
                      variant='white nav-button'
                      onClick={() => history.push('/login')}
                    />
                    <ButtonComponent
                      text='SignUp'
                      variant='purple nav-button'
                      onClick={() => history.push('/sign-up')}
                    />
                  </>
                ) : (
                  <div className='user-img-div'>
                    <p className='user'>{data?.Name || ''}</p>
                    {data && data.ProfileImage && data.ProfileImage !== '' ? (
                      showmenu ? (
                        <a
                          href='javascript:void(0)'
                          className='closebtn'
                          onClick={() => closeNav()}
                        >
                          &times;
                        </a>
                      ) : (
                        <img
                          className='profile-icon-hedaer open-nav'
                          onClick={() => openNav()}
                          src={`${BASE_URL}${data.ProfileImage}`}
                          alt='user-img'
                        />
                      )
                    ) : showmenu ? (
                      <a
                        href='javascript:void(0)'
                        className='closebtn'
                        onClick={() => closeNav()}
                      >
                        &times;
                      </a>
                    ) : (
                      <img
                        className='profile-icon-hedaer open-nav'
                        onClick={() => openNav()}
                        src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
                        alt='user-img'
                      />
                    )}
                  </div>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id='mySidenav' className='sidenav'>
        <MyAccount setmenu={setmenu} />
      </div>
    </>
  )
}

export default Header
