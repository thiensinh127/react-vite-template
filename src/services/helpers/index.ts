import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import type { IErrorItem, IErrorResponse } from '../models'

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown,
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error).message === 'string'
  )
}

export function isResponseError(
  response: unknown,
): response is { error: { message: string } } {
  return (
    typeof response === 'object' &&
    response != null &&
    'error' in response &&
    isErrorWithMessage(response.error)
  )
}

export function isApiError(
  obj: unknown
): obj is IErrorResponse<IErrorItem> {
  const { statusCode } = obj as IErrorResponse<unknown>
  return statusCode >= 400
}
