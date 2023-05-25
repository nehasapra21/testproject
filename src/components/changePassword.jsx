import React from 'react'
function changePassword() {
  return (
    <div className='container py-md-2 edit-profile'>
      <ul className='nav nav-tabs mb-2'>
        <li
          className='text-center active w-sm-50'
          href='javascript:void(0);'
          data-toggle='tab'
          id='profile'
        >
          Change Password{' '}
        </li>
      </ul>
      <hr />
      <div className='col-sm-12 col-lg-8 col-md-10 mx-auto'>
        <h2 className='my-4 heading'>Change your password</h2>
        <div className='form-group'>
          <div className='row mb-4'>
            <div className='col-md-7 col-sm-7'>
              <label>Enter old password</label>
              <input
                type='text'
                name='First name'
                id='oldPassword'
                className='form-control'
                placeholder=''
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-7 col-sm-7'>
              <label>Enter New password</label>
              <input
                type='text'
                name='last name'
                id='newPassword'
                className='form-control'
              />
            </div>
          </div>
        </div>
        <div className='py-3 text-sm-left'>
          <button className='btn blue-btn mr-3' onclick='goToHome()'>
            Cancel
          </button>
          <button className='btn blue-btn' onclick='save()'>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
export default changePassword
