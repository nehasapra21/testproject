import React, { useState } from 'react'

function SidemenuOne() {
  const [logIn, setName] = useState(false)
  return (
    <>
      <div id='mySidenadv' className='sidednav'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-lg-12'>
                  <p className='side-menu-heading'>
                    &nbsp;
                    <button className='closebtn' onclick='backToHome()'>
                      Back To Home
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='hr'></div>

          <div className='row options'>
            <div className='col-lg-12 col-xs-12 col-sm-12'>
              <ul className='fa-ul-authen'>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_invite_friend.png' />
                    Invite a friend <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_get_personal.png' />
                    Get Support<i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>

                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_about.png' />
                    About <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_our_story.png' />
                    Our Story <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_blog.png' />
                    Blogs <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_faq.png' />
                    FAQs <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_how_to_play.png' />
                    How to play <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className='col-sm-12'>
            <button className='logout' onclick='Login()'>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SidemenuOne
