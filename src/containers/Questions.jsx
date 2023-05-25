import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

import { getCategoryQUestionById } from '../API/CategoryAPI'

import QuestionsPage from '../pages/QuestionsPage'

import {
  saveAnswer,
  saveTotalPoints,
  saveQuizTime,
  getQuizTime
} from '../API/QuizAPI'
import { uid } from 'uid'
class Questions extends PureComponent {
  constructor() {
    super()
    this.state = {
      questions: [],
      noOfQues: 0,
      question: {},
      next: 0,
      userAnswers: {},
      catId: 0,
      userId: 0,
      playId: '',
      play: true,
      isDisabled: false,
      totalPoints: 0,
      correctAnswer: 0
    }
  }

  componentDidMount = () => {
    const { match } = this.props
    const { params } = match
    const { id } = params

    let paramsArray = window.location.pathname.split('/')
    this.checkTime(paramsArray[paramsArray.length - 1])

    this.setState({ catId: id })
    this.generatePlayId(id)
    this.fetchQuestions(id)
  }

  generatePlayId = (id) => {
    let userData = Cookies.get('fakeNewsUserDetail')
      ? JSON.parse(Cookies.get('fakeNewsUserDetail'))
      : {}

    let date = new Date()
    const uidd = uid()
    let playId = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${uidd}_${
      userData.Id
    }_${id}`
    this.setState({ playId: playId, userId: userData.Id })
  }

  fetchQuestions = async (id) => {
    const res = await getCategoryQUestionById(id)
    if (res.data.length !== 0) {
      this.setState({
        questions: [...res.data],
        noOfQues: parseInt(res.data.length),
        question: { ...res.data[0] }
      })
    } else {
      toast.error('No Questions for this category.')
      this.props.history.push('/categories')
    }
  }

  handleNext = () => {
    let temp = this.state.next
    temp = Math.min(temp + 1, this.state.noOfQues)
    if (temp === this.state.noOfQues) {
      setTimeout(() => this.submitFinal(), 1000)
    } else {
      this.setState({ next: temp, question: { ...this.state.questions[temp] } })
    }
  }

  handleAnswer = (ans, ques, time) => {
    this.setState({ play: false, isDisabled: true })

    let points = 0
    let rightAnswer = 0
    let total = this.state.totalPoints

    if (ans === 0 || ans === 3) {
      if (ans === 0 && this.state.question.Answer === 'No') {
        points = 100
        rightAnswer = 1
        this.setState({ correctAnswer: this.state.correctAnswer + 1 })
      } else {
        points = 0
      }
    } else if (ans === 1) {
      if (this.state.question.Answer === 'YES') {
        points = 100
        rightAnswer = 1
        this.setState({
          correctAnswer: this.state.correctAnswer + 1
        })
      } else {
        points = 0
      }
    } else {
      points = 0
    }

    this.setState({ totalPoints: total + points })

    const data = {
      UserId: this.state.userId,
      PlayId: this.state.playId,
      CategoryQuestionsId: ques.Id,
      CategoryId: parseInt(this.state.catId),
      TimeTaken: 45 - time,
      Point: points,
      UserAnswer: ans,
      ActualAnswer: ques.Answer === 'YES' ? 1 : 0,
      AnswerRight: rightAnswer
    }

    this.submitAnswer(data)
    this.handleNext()
  }

  submitAnswer = async (data) => {
    try {
      const res = await saveAnswer(data)

      this.setState({ play: true, isDisabled: false })
    } catch {
      toast.error('Ques not submitted.')
      this.setState({ play: true, isDisabled: false })
    }
  }

  submitFinal = async () => {
    let data = {
      TotalPoint: this.state.totalPoints,
      UserId: this.state.userId
    }
    try {
      const res = await saveTotalPoints({ ...data })
      const response = await saveQuizTime({
        UserId: this.state.userId,
        CategoryId: parseInt(this.state.catId),
        ExpireTimeSpan: new Date(),
        PlayId: this.state.playId
      })

      this.props.history.push({
        pathname: '/score',
        state: {
          scoreData: {
            totalPoints: this.state.totalPoints,
            correctAnswer: this.state.correctAnswer,
            noOfQues: this.state.noOfQues,
            playId: this.state.playId
          }
        }
      })
    } catch (err) {
      toast.error('Unable to save points.')
    }
  }

  checkTime = async (id) => {
    const data = JSON.parse(Cookies.get('fakeNewsUserDetail'))

    try {
      const res = await getQuizTime({
        catId: id,
        userId: data.Id
      })
      const noOfDaysToAdd = 1
      let playTime = res?.data?.data?.ExpireTimeSpan
      playTime = new Date(playTime)
      let afterDate = new Date()
      playTime.setDate(playTime.getDate() + noOfDaysToAdd)
      if (playTime.getTime() > afterDate.getTime()) {
        this.props.history.push('/categories')
      }
    } catch (err) {
      //err goes here
    }
  }

  render() {
    return (
      <QuestionsPage
        question={this.state.question}
        noOfQues={this.state.noOfQues}
        next={this.state.next}
        handleAnswer={this.handleAnswer}
        handleNext={this.handleNext}
        updateTime={this.updateTime}
        play={this.state.play}
        isDisabled={this.state.isDisabled}
      />
    )
  }
}

export default withRouter(Questions)
