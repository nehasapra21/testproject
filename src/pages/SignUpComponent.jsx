import React, { useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import SocialLoginComponent from '../pages/SocialLoginComponent'
import ButtonComponent from '../components/Button'
import Card from '../components/Cards/Card'
import FormComponents from '../components/FormComponents'

import signUpImg from '../assets/images/sign-up.png'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
const SignUpComponent = (props) => {
    let isUserLogged = Cookies.get('fakeNewsUserStatus') ? true : false
  useEffect(() => {
    let body = document.getElementsByTagName('body')

    if (window.innerWidth < 552) {
      body[0].style.backgroundColor = '#EDEFF4'
    } else {
      body[0].style.backgroundColor = '#fff'
    }
    const setBodyBack = () => {
      body[0].style.backgroundColor = '#EDEFF4'
    }

    return setBodyBack
  }, [])

  const {
    responseGoogle,
    submitResponse,
    data,
    handleChange,
    responseFacebook
  } = props

  const { Name, EmailAddress, Password, ConfirmPassword } = data

  return (
        isUserLogged === true ? (
         <Redirect
            to={{ pathname: '/categories', state: { from: props.location } }}
          />
        ) : (
    <Container className='cont-top-margin'>
      <div className='hide-lg'>
        <h2 className='Register-heading'>Register</h2>
      </div>
      <Row>
        <Col className='signup-img' xs={12} md={7}>
          <img src={signUpImg} alt='login-img' />
        </Col>
        <Col className='login-form' xs={12} md={5}>
          <Card>
            <Form onSubmit={submitResponse} autoComplete={false}>
              <FormComponents
                type='text'
                value={Name}
                onChange={handleChange}
                name='Name'
                label='Name'
                control='input'
              />
              <FormComponents
                type='email'
                value={EmailAddress}
                onChange={handleChange}
                name='EmailAddress'
                label='Email'
                control='input'
              />

              <FormComponents
                type='password'
                value={Password}
                onChange={handleChange}
                name='Password'
                label='Password'
                control='input'
              />

              <FormComponents
                type='password'
                value={ConfirmPassword}
                onChange={handleChange}
                name='ConfirmPassword'
                label='Confirm Password'
                control='input'
              />

              <ButtonComponent
                style={{ width: '100%', margin: '10px 0 25px' }}
                variant='purple'
                text='Sign Up'
                onClick={submitResponse}
              />
              <p className='forget-txt'>
                Already have an account?{' '}
                <Link className='redirect-link' to={{ pathname: '/login' }}>
                  Login
                </Link>
              </p>
              <p className='forget-txt'>or</p>
              <p
                className='forget-txt'
                style={{ fontFamily: 'Avenir Black', marginBottom: '1rem' }}
              >
                Sign Up with Social
              </p>
              <SocialLoginComponent
                responseGoogle={responseGoogle}
                responseFacebook={responseFacebook}
              />
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
  )
}
export default SignUpComponent

// <>
//   <section className='signup-form'>
//     <div className='container-fluid'>
//       <div className='row d-sm-flex d-md-flex align-center'>
//         <div className='col-lg-6 d-sm-none d-md-block d-none d-sm-block bg-img'>
//           <img className='' src='./image/register.png' />
//         </div>

//         <div className='col-lg-6 col-sm-12 col-xs-12 p-sm-0'>
//           <div className='d-md-none d-sm-hide d-xs-block align-center'>
//             <img
//               src='./image/ic_back.svg'
//               alt='ic_back'
//               className='back_arrow'
//               onclick='history.back()'
//             />
//             <h3 className='text-center'>Register</h3>
//           </div>
//           <div className='col-lg-8 col-md-10 register-form form-wrapper input-card'>
//             <div className='row'>
//               <form onSubmit={props.submitResponse}>
//                 <div className='input-form col-lg-11 col-md-12 col-sm-12'>
//                   <div className='form-group'>
//                     <label for='name' className='pt-xs-0'>
//                       Name
//                     </label>
//                     <input
//                       type='text'
//                       className='form-control'
//                       id='name'
//                       name='Name'
//                       required
//                       onChange={props.handleChange}
//                       aria-describedby='emailHelp'
//                       placeholder='Jhone smith'
//                     />
//                   </div>
//                   <div className='form-group'>
//                     <label for='email'>Email</label>
//                     <input
//                       type='email'
//                       className='form-control'
//                       id='email'
//                       name='EmailAddress'
//                       required
//                       onChange={props.handleChange}
//                       placeholder='demo@gmail.com'
//                     />
//                   </div>
//                   <div className='form-group'>
//                     <label for='Password'>Password</label>
//                     <div className='show-password'>
//                       <input
//                         type='Password'
//                         className='form-control'
//                         id='password'
//                         required
//                         onChange={props.handleChange}
//                         name='Password'
//                         placeholder='******'
//                       />
//                       <img
//                         src='./image/ic_see-password.svg'
//                         alt='ic_see-password'
//                         id='togglePassword'
//                       />
//                     </div>
//                   </div>
//                   <div className='form-group'>
//                     <label for='cPassword'>Confirm Password</label>
//                     <div className='show-password'>
//                       <input
//                         type='Password'
//                         className='form-control'
//                         id='cPassword'
//                         required
//                         onChange={props.handleChange}
//                         name='ConfirmPassword'
//                         placeholder='******'
//                       />
//                       <img
//                         src='./image/ic_see-password.svg'
//                         alt='ic_see-password'
//                         id='toggleConfirmedPassword'
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type='submit'
//                     className='btn-block signup-btn center-block d-block mx-auto'
//                   >
//                     Sign up
//                   </button>
//                   <br />
//                   <p className='text-center'>
//                     Already have an account ? <a href='login'>Login</a>
//                   </p>
//                   <p className='text-center'>or</p>
//                   <h4>Sign Up with Social</h4>
//                   <SocialLoginComponent
//                     responseGoogle={props.responseGoogle}
//                   />
//                 </div>{' '}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </>
