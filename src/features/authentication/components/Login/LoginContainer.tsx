'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useLoginMutation } from '@/services/api/auth'
import { isResponseError } from '@/services/helpers'
import type { ILoginRequest } from '@/services/models/authentication/ILoginRequest'
import useAuth from '@/utils/hooks/useAuth'
import useNotify from '@/utils/hooks/useNotify'

import Auth from './Login'

const LoginContainer = () => {
  const { show } = useNotify()
  const [login, { isLoading }] = useLoginMutation()
  const router = useRouter()

  const handleLogin = async (credentials: ILoginRequest) => {
    const response = await login(credentials)
    if (isResponseError(response))
      show({ type: 'error', message: response.error.message })
  }

  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) router.push('/')
  }, [isAuthenticated])

  return (
    <div>
      <Auth onLogin={handleLogin} />
      {isLoading && <div>Loading...</div>}
    </div>
  )
}

export default LoginContainer
