import React from 'react'

function AdminPage(props) {


  return (
    <div className='container'>
      <h1>Admin Page</h1>
      <h5 className='text-center'>{props.login} welcome to the admin page</h5>
    </div>
  )
}

export default AdminPage