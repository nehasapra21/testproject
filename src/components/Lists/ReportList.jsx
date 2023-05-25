import React from 'react'
import pdfIcon from '../../assets/images/ic_pdf.png'
import moment from 'moment'
import { Link } from 'react-router-dom'
const ReportList = ({ data, serialNo }) => {
  //07,May 22

  return (
    <tr key={serialNo}>
      <td>{moment(data.PlayDate).format('LL')}</td>
      <td>{data.Name}</td>
      <td>{data.Point}</td>
      <td>{data.AnswerRight}</td>
      <td>
        <Link
          to={{
            pathname: `view-answer/${data.PlayId}`
          }}
        >
          <img src={pdfIcon} alt='ic_pdf' className='report-pdf-icon' />
        </Link>
      </td>
    </tr>
  )
}

export default ReportList
