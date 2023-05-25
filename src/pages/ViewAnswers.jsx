import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ViewAnswerAPI } from '../API/ReportsAPI'
import { useParams } from 'react-router-dom'
import Pdf from 'react-to-pdf'

import pdfIcon from '../assets/images/ic_pdf.png'
import ViewAnswerList from '../components/Lists/ViewAnswerList'

const ref = React.createRef()

const ViewAnswer = () => {
  const [data, setData] = useState([])
  const playid = useParams()
  const fileName = `view_answer_${playid.id}`

  useEffect(() => {
    const fetchData = async () => {
      const resdata = await ViewAnswerAPI(playid.id)
      setData([...resdata.data])
    }

    fetchData()
  }, [playid])

  return (
    <Container className='gameRule-Container cont-top-margin-Rule mobile-view-margin'>
      <Row>
        <Col xs={12} md={12}>
          <Row>
            <div className='user-lead-info'>
              <Col
                xs={12}
                md={12}
                lg={12}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <h1 className='heading-view-answer'>View Your Answers</h1>
                <Pdf
                  targetRef={ref}
                  filename={fileName}
                  x={0.5}
                  y={0.5}
                  scale={0.6}
                >
                  {({ toPdf }) => (
                    <button onClick={toPdf} className='pdfButton'>
                      <img src={pdfIcon} alt='pdf-icon' /> Download
                    </button>
                  )}
                </Pdf>
              </Col>
              <Col xs={6} md={8} lg={8}></Col>
            </div>
          </Row>
        </Col>
        <Col xs={12} md={12} lg={12} ref={ref}>
          <ul className='view-list'>
            {data.map((item, index) => (
              <ViewAnswerList data={item} serialNo={index} key={index} />
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default ViewAnswer
