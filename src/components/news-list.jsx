import React from 'react'
function newsList() {
  return (
    <div className='news-list'>
      <div className='container '>
        <div className='heading-container'>
          <div className='row '>
            <div className='col-lg-12'>
              <p className='heading-top'>
                <span>Let's Play a game</span> and give your opinion,is this
                <span>Fake or Not</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container categories'>
        <div className='row'>
          <div className='col-lg-6 col-sm-12 col-xs-12 col-md-6 px-md-5 box-wrapper'>
            <div className='wrapper-news'>
              <div className='row image-card'>
                <div className='col-lg-12 col-sm-12 col-md-12 col-xs-12'>
                  <div className='img-wrapper'>
                    <img
                      className='image-size-news'
                      src='<%= questionData[j].thumbnailUrl %>'
                      className='img-responsive'
                      alt='thumbnail'
                    />
                  </div>
                </div>
                <div className='row text-categorires'>
                  <div className='col-lg-8 col-md-8 col-xs-8 col-sm-8'>
                    <div className='highlight'>
                      <img className='cat-img' src='./image/stethoscope.png' />
                      <div>
                        <p>
                          <strong></strong>
                        </p>

                        <span>39 Users played</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-xs-4 col-sm-4 px-0'>
                    <div className='chips'></div>
                  </div>
                </div>
              </div>
              <div className='col-lg-12 col-sm-12 col-md-12 col-xs-12 news-box'>
                <p className='news-line'></p>
                <button
                  className='play-row-btn'
                  type='button'
                  data-id='<%= questionData[j].categoryId._id %>'
                >
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default newsList
