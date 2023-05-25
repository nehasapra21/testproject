import React, { useState } from 'react'

function SidemenuTwo() {
  const [logIn, setName] = useState(false)
  return (
    <>
      <div id='mySidegnav' className='sidendav'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-sm-12 col-xs-12'>
              <div className='row'>
                <div className='col-lg-12'>
                  <p className='side-menu-heading'>
                    <span>My Account</span>
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
                <a href='leader-board'>
                  <li>
                    <img src='./image/side-bar/ic_leaderboard.png' />
                    Leaderboard<i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_invite_friend.png' />
                    Invite a friend <i class='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_get_personal.png' />
                    Get Support<i class='fa fa fa-chevron-right'></i>
                  </li>
                </a>

                <a href='update-profile'>
                  <li>
                    <img src='./image/side-bar/ic_personal.png' />
                    Personal Details
                    <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='update-categories'>
                  <li>
                    <img src='./image/side-bar/ic_interested.png' />
                    Interested Category
                    <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='report'>
                  <li>
                    <img src='./image/side-bar/ic_report.png' />
                    Report <i className='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_about.png' />
                    About <i class='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_our_story.png' />
                    Our Story <i class='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_blog.png' />
                    Blogs <i class='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_faq.png' />
                    FAQs <i class='fa fa fa-chevron-right'></i>
                  </li>
                </a>
                <a href='javascript:void(0);'>
                  <li>
                    <img src='./image/side-bar/ic_how_to_play.png' />
                    How to play <i class='fa fa fa-chevron-right'></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className='col-sm-12'>
            <button className='logout' onclick='Logout()'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SidemenuTwo
