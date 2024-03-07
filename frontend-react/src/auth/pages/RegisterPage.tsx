import React from 'react'
import { AuthLayout, RegisterPageInfo } from '..'

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title='Registro' children={<RegisterPageInfo/>}/>
    </>
  )
}
