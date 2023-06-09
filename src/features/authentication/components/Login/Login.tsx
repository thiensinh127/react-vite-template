import React from 'react'

import HrosButton from '@/components/common/HrosButton'
import HrosInput from '@/components/common/HrosInput'
import type { ILoginRequest } from '@/services/models/authentication/ILoginRequest'

type LoginProps = {
  onLogin: (credentials: ILoginRequest) => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [formState, setFormState] = React.useState<ILoginRequest>({
    email: '',
    password: '',
  })

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

  return (
    <div>
      <h2>Login</h2>
      <div>
        <HrosInput
          onChange={handleChange}
          name='email'
          placeholder='Email'
          classes='mr-2'
        />
        <HrosInput
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='Password'
        />
      </div>

      <HrosButton classes='mt-2' onClick={() => onLogin(formState)}>
        Login
      </HrosButton>
    </div>
  )
}

export default Login
