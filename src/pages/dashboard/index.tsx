import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'


const Dashboard = () => {
    const [ searchParams ] = useSearchParams()
  console.log([...searchParams]);
  
  return (
    <div>
        <h1>Dashboard</h1>
        {searchParams.get('payment_intent') ? 'Resume has been paid.' : 'Something went wrong.'}
    </div>
  )
}

export default Dashboard