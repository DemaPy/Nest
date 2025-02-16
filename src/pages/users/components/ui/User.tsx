import React from 'react'
import { UserInterface } from '../../types'

interface UserProps {
  user: UserInterface | undefined;
}

export const User = ({ user }: UserProps) => {
  return (
    <div>User: {user.email} {user.name} {user.id}</div>
  )
}