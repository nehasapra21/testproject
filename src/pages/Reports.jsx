import React, { useEffect, useState } from 'react'

import { Table, Col, Container, Row } from 'react-bootstrap'
import { getReportsList } from '../API/ReportsAPI'

import ReportList from '../components/Lists/ReportList'

const Reports = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resdata = await getReportsList()
      setData(resdata.data)
    }

    fetchData()
  }, [])

  return (
    <Container className='cont-top-margin gameRule-Container cont-top-margin-Rule'>
      <Row>
        <Col xs={12} md={12}>
          <div className='user-lead-info'>
            <h1 className='lead-head'>View Reports</h1>
          </div>
        </Col>

        <Col xs={12} md={12}>
          <Table responsive id='report-table'>
            <tr className='heading-table' style={{ fontWeight: 'bolder' }}>
              <td className='br-left'>Date</td>
              <td>Category</td>
              <td> Score</td>
              <td>Right Answer</td>
              <td className='br-right'></td>
            </tr>

            <tbody className='report-body-table'>
              {data.map((item, index) => (
                <ReportList
                  data={item}
                  key={index}
                  serialNo={index}
                ></ReportList>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Reports
