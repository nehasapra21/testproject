import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import { mostTrendIcon, mostPlayedIcon } from '../../assets/svg'

import { IMG_URL } from '../../constants'
import { toast } from 'react-toastify'

import { getQuizTime } from '../../API/QuizAPI'

const CategoryCard = ({ data }) => {
  const { ThumbImageUrl } = data
  const history = useHistory()

  const isLogged = Cookies.get('fakeNewsUserStatus') ? true : false

  const imgUrl = ThumbImageUrl.replaceAll('\\', '/')

  const userData = Cookies.get('fakeNewsUserDetail')
    ? JSON.parse(Cookies.get('fakeNewsUserDetail'))
    : null

  const checkTime = async (id) => {
    try {
      const res = await getQuizTime({
        catId: id,
        userId: userData.Id
      })

      const noOfDaysToAdd = 1

      let playTime = res?.data?.data?.ExpireTimeSpan
      playTime = new Date(playTime)
      let afterDate = new Date()
      playTime.setDate(playTime.getDate() + noOfDaysToAdd)

      if (playTime.getTime() > afterDate.getTime()) {
        toast.error('You cannot play this category upto 24 hours.')
      } else {
        history.push({
          pathname: '/rules',
          state: {
            id: data.CategoryId
          }
        })
      }
    } catch (err) {
      history.push({
        pathname: '/rules',
        state: {
          id: data.CategoryId
        }
      })
    }
  }

  return (
    <div className='cat-card'>
      <div className='cat-card-body'>
        <div className='image-wrapper'>
          <img src={`${IMG_URL}${imgUrl}`} alt='' />
        </div>

        <div className='cat-card-content'>
          <div className='info-sec'>
            <div>
              <h2 className='card-title'>{data?.CategoryName || ''}</h2>
              <p className='user-played'>
                {data?.UserCategoryCount || 0} Users Played
              </p>
            </div>
          </div>
          <div
            className='cat-type'
            style={
              data.StatusColour && data.StatusColour !== ''
                ? { backgroundColor: data.StatusColour }
                : { backgroundColor: 'aqua' }
            }
          >
            <h2 className='cat-head'>
              <span className='icon'>
                {data?.StatusName && data?.StatusName === 'MostPlayed'
                  ? mostPlayedIcon
                  : mostTrendIcon}
              </span>
              {data?.StatusName || ''}
            </h2>
          </div>
        </div>
      </div>
      <div className='cat-footer'>
        <p className='card-footer-txt'>{data?.Title || ''}</p>
        <Button
          className='cat-play-btn'
          onClick={() => {
            if (isLogged) {
              checkTime(data.CategoryId)
            } else {
              history.push({
                pathname: '/login'
              })
            }
          }}
        >
          Play Now
        </Button>
      </div>
    </div>
  )
}

export default CategoryCard
