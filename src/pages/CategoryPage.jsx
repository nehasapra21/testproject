import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import CategoryCard from '../components/Cards/CategoryCard'

import { getQuestions, getQuestionsByUserId } from '../API/CategoryAPI'
import { toast } from 'react-toastify'
import CategoryPageSkeleton from '../components/Skeletons/CategoryPageSkeleton'

import InfiniteScroll from 'react-infinite-scroll-component'

const CategoryPageComponent = () => {
  const [data, setData] = useState([])
  const [showSkel, setShowSkel] = useState(true)
  const [offset, setOffset] = useState(0)
  const [userCat, setUserCat] = useState([])
  const [count, setCount] = useState(0)

  const history = useHistory()

  useEffect(() => {
    const userData = Cookies.get('fakeNewsUserDetail')
      ? JSON.parse(Cookies.get('fakeNewsUserDetail'))
      : null

    const fetchData = async () => {
      let tempCat = []
      if (userData) {
        try {
          let response = await getQuestionsByUserId(userData.Id)
          response.data.data.forEach((cat) => {
            tempCat.push(cat.Id.toString())
          })
          if (tempCat && tempCat.length !== 0) {
            setUserCat([...tempCat])
            fetchCat(tempCat)
          } else {
            history.push('/complete-profile')
          }
        } catch {
          toast.error('Unable to fetch questions.')
          setShowSkel(false)
        }
      } else {
        fetchCat([])
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (offset !== 0) {
      fetchCat([...userCat])
    }
  }, [offset])

  const fetchCat = async (catArray) => {
    let temp = [...data]

    try {
      const res = await getQuestions({
        categoryIds: [...catArray],
        offset: offset,
        limit: 10
      })
      const { data } = res
      setData([...temp, ...data.data])
      if (offset === 0) {
        setCount(data.data[0].TotalCategoryQuestions)
      }

      setShowSkel(false)
    } catch {
      toast.error('Unable to fetch Category Questions.')
      setShowSkel(false)
    }
  }

  const handleOffset = () => {
    setOffset(offset + 10)
  }

  return (
    <Container className='cat-page-cont'>
      <h1 className='category-header'>
        Let's Play a game
        and give your opinion, is this Fake
        or NOT
      </h1>
      {!showSkel ? (
        <Row style={{ margin: '0' }} className='cat-ques-row'>
          {data && data.length !== 0 ? (
            <InfiniteScroll
              dataLength={data.length} //This is important field to render the next data
              next={handleOffset}
              hasMore={count === data.length ? false : true}
              loader={
                <div
                  className='spinner-div'
                  style={{
                    display: 'flex',
                    margin: '20px 0',
                    justifyContent: 'center'
                  }}
                >
                  <Spinner animation='grow' variant='dark' />
                </div>
              }
              style={{
                overflowX: 'hidden',
                overflowY: 'auto'
              }}
              className='cat-infinit-scroll'
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <Row className='infinte-row'>
                {data.map((quesData, index) => {
                  if (
                    quesData?.ThumbImageUrl &&
                    quesData.ThumbImageUrl !== ''
                  ) {
                    return (
                      <Col xs={12} md={6}>
                        <CategoryCard data={quesData} key={index} />
                      </Col>
                    )
                  } else {
                    return null
                  }
                })}
              </Row>
            </InfiniteScroll>
          ) : null}
        </Row>
      ) : (
        <CategoryPageSkeleton />
      )}
    </Container>
  )
}

export default CategoryPageComponent
