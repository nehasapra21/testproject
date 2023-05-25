import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '../../constants'
const LeaderBoardList = ({ data, serialNo }) => {
  return (
    <div className='leads'>
      <div className='users-info'>
        <p className='user-rank'>{serialNo + 1}</p>
        {data.ProfileImage && data.ProfileImage !== '' ? (
          <img
            src={BASE_URL + data.ProfileImage}
            className='ranking-img'
            alt=''
          />
        ) : (
          <div className='user-icon'>
            <FontAwesomeIcon icon={faUser} />
          </div>
        )}
        <p className='user-name'>{data.Name}</p>
      </div>
      <div className='leads-points'>
        <p>{data.TotalPoint}</p>
      </div>
    </div>
  )
}

export default LeaderBoardList
