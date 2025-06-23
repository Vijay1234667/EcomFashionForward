import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
    <div className='text-center'>
    <h4 className='text-danger'>404 Page Not Found</h4>
    <Link to="/" className='btn btn-dark mb-2'>Go To Homepage</Link>
    </div>
    </>
  )
}

export default ErrorPage
