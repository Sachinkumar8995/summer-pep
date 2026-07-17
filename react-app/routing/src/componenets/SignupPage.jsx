import React from 'react'

function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" /><br></br>
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" /><br></br>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" /><br></br>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" /><br></br>
      <button type="submit">Sign Up</button>
    </div>
  )
}

export default SignupPage
