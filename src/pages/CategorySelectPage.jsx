import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import FormComponents from '../components/FormComponents'
import ButtonComponent from '../components/Button'
import {
  getAllCategory,
  getQuestionsByUserId,
  saveUserCategory
} from '../API/CategoryAPI'
import { IMG_URL } from '../constants'
import { toast } from 'react-toastify'

import CategorySelectSkeleton from '../components/Skeletons/CategorySelectSkeleton'

const CategorySelectPage = () => {
  const [data, setData] = useState([])
  const [ids, setIds] = useState([])
  const [showSkel, setShowSkel] = useState(true)

  const history = useHistory()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let userData = Cookies.get('fakeNewsUserDetail')
      ? JSON.parse(Cookies.get('fakeNewsUserDetail'))
      : null

    try {
      let userCatData = await getQuestionsByUserId(userData.Id)

      if (userCatData?.data?.data && userCatData?.data?.data.length !== 0) {
        let temp = []
        userCatData?.data?.data?.forEach((data) => {
          if (!temp.includes(data.Id.toString())) temp.push(data.Id.toString())
        })
        setIds([...temp])
      }
      let res = await getAllCategory()
      setShowSkel(false)
      setData([...res])
    } catch {
      //err goes here
    }
  }

  const selectCat = (e) => {
    let temp = [...ids]
    if (temp.includes(e.target.value)) {
      const index = temp.indexOf(e.target.value)
      if (index > -1) {
        temp.splice(index, 1)
      }
      setIds([...temp])
    } else {
      temp.push(e.target.value)
      setIds([...temp])
    }
  }

  const submitCat = async (e) => {
    e.preventDefault()
    const userData = JSON.parse(Cookies.get('fakeNewsUserDetail'))

    try {
      const res = await saveUserCategory({
        UserId: userData?.Id,
        CategoryList: [...ids]
      })

      if (res) {
        history.push('/categories')
      }
    } catch {}
  }

  return (
    <Container className='cont-top-margin'>
      <h1 className='cat-page-head'>Pick some topics You are interested in</h1>
      {!showSkel ? (
        <Row className='select-cat-box'>
          {data &&
            data.map((item, index) => {
              if (item?.ImageUrlpath && item.ImageUrlpath !== '') {
                let url = item.ImageUrlpath.replaceAll('\\', '/')
                return (
                  <Col xs={4} sm={3} md={3} lg={2} key={index}>
                    <FormComponents
                      img={`${IMG_URL}${url}`}
                      label={item?.Name || ''}
                      value={item?.Id}
                      onChange={selectCat}
                      control='img-check'
                      checked={ids.includes(item.Id.toString()) ? true : false}
                    />
                  </Col>
                )
              }
              return null
            })}
        </Row>
      ) : (
        <CategorySelectSkeleton />
      )}

      <div className='down-btn-wrapper'>
        <ButtonComponent
          variant='purple select-cat-btn'
          text='Save'
          onClick={(e) => {
            if (ids.length !== 0) {
              submitCat(e)
            } else {
              toast.error('Please Select atleast one category.')
            }
          }}
        />
      </div>
    </Container>
  )
}

export default CategorySelectPage
