import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import Header from '../components/Layout/header'
import PrivateRoute from './PrivateRoute'

import SignUp from '../containers/Signup'
import Login from '../containers/Login'
import ProfileUpdate from '../containers/ProfileUpdate'
import CategoryPageComponent from '../pages/CategoryPage'
import LeaderBoard from '../pages/LeaderBoard'
import Welcome from '../pages/Welcome'
import CompleteInfo from '../containers/CompleteInfo'
import CategorySelectPage from '../pages/CategorySelectPage'
import GameRules from '../pages/GameRules'
import ScoreCard from '../pages/ScoreCard'
import Reports from '../pages/Reports'
import Questions from '../containers/Questions'
import ViewAnswer from '../pages/ViewAnswers'
import NewHome from '../pages/NewHome'
import TermsAndConditions from '../pages/TermsAndConditions'

import { useSelector } from 'react-redux'
import AboutUs from '../pages/aboutUs'
import OurStory from '../pages/OurStory'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import FAQ from '../pages/FAQ'
import VerifyEmail from '../pages/VerifyEmail'
import ForgetPassword from '../pages/ForgetPassword'

const Routes = (props) => {
  const { data } = useSelector((state) => state.loginLogout)
  const location = useLocation()

  return (
    <>
      {location.pathname === '/' ? null : <Header />}
      <Switch>
        <Route exact path='/' component={NewHome} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/categories' component={CategoryPageComponent} />
        <Route exact path='/login' component={Login} />
        <Route
          exact
          path='/terms-and-conditions'
          component={TermsAndConditions}
        />
        <Route exact path='/verify-email' component={VerifyEmail} />
        <Route exact path='/changepassword/:id' component={ForgetPassword} />
        <PrivateRoute exact path='/about-us' component={AboutUs} />
        <PrivateRoute exact path='/our-story' component={OurStory} />
        <PrivateRoute exact path='/privacy-policy' component={PrivacyPolicy} />
        <PrivateRoute exact path='/faq' component={FAQ} />
        <PrivateRoute
          exact
          path='/select-category'
          component={CategorySelectPage}
        />
        <PrivateRoute exact path='/view-answer/:id' component={ViewAnswer} />
        <PrivateRoute exact path='/reports' component={Reports} />
        <PrivateRoute exact path='/leaderboard' component={LeaderBoard} />
        <PrivateRoute exact path='/profile-update' component={ProfileUpdate} />
        <PrivateRoute exact path='/rules' component={GameRules} />
        <PrivateRoute exact path='/score' component={ScoreCard} />
        <PrivateRoute exact path='/questions/:id' component={Questions} />
        {data?.CategoryIds && data?.CategoryIds.length === 0 ? (
          <>
            <PrivateRoute exact path='/welcome' component={Welcome} />
            <PrivateRoute
              exact
              path='/complete-profile'
              component={CompleteInfo}
            />{' '}
          </>
        ) : null}
      </Switch>
    </>
  )
}

export default Routes
