export interface IErrorResponse<T> {
  data: T[]
  message: string
  status: string
  statusCode: number
}

export interface ISuccessResponse<T> {
  data: T | T[]
  statusCode: number
  message: string
}

export interface IErrorItem {
  defaultMessage: string
  id: string
}

export interface IErrorMessage {
  message: string
  status: string | number
}
