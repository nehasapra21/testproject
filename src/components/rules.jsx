import React from 'react'
function gameRule() {
  return (
    <>
      <div className='container-fluid rules'>
        <div className='container p-sm-0'>
          <div className='row'>
            <div className='col-lg-12'>
              <h4>
                <strong>Games rules and Instructions</strong>
              </h4>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 p-sm-0'>
              <ul className='list-game'>
                <li>
                  <p>
                    <img src='./image/point.png' /> Every person playing the
                    game will have to login through one of his three social
                    media profiles, Google, Facebook or Twitter.{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <img src='./image/point.png' /> After reading the
                    instructions, the person has to click on one of the topics
                    of his/her interest.
                  </p>
                </li>
                <li>
                  <p>
                    <img src='./image/point.png' /> Once selected, he can begin
                    his game by clicking on “Start”.
                  </p>
                </li>
                <li>
                  <p>
                    <img src='./image/point.png' /> The person will be posed 15
                    questions, to which, he/she has to respond by selecting any
                    of the three proposed answers. All the questions will have
                    to be answered in 30 seconds each.{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <img src='./image/point.png' /> For every correct answer
                    youll get 1,00 points. For “I havent come across it”, one
                    will get 50 or lower points depending on how fast he/she has
                    answered. For every incorrect answer or a skipped question,
                    the player would score a zero.{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <img src='./image/point.png' /> After you have answered all
                    the questions, your result will appear on the scoreboard.
                  </p>
                </li>
                <li>
                  <p>
                    <img src='./image/point.png' /> Your score shall depend on
                    the number of questions answered correctly and on how fast
                    you have completed the test. This score will also reflect
                    your FQ.{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <img src='./image/point.png' /> After this, all the
                    questions with their correct answers and news links will be
                    shown chronologically. All the fake news will have links
                    where they have been debunked. The player/user will have the
                    option of downloading the PDF and watch a video/tutorial on
                    fake news and its identification.
                  </p>
                </li>
                <li>
                  <p>
                    <img src='./image/point.png' /> On the same page, you will
                    have the option of sharing your score on social media and
                    inviting your friends for playing the game.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <center className='play-game'>
            {' '}
            <button className='insturction-btn' onclick='playGame()'>
              Let's Start
            </button>
          </center>
        </div>
      </div>
    </>
  )
}
export default gameRule
