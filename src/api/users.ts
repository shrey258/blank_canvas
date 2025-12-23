import { api } from './client'

export type User = {
  id: string
  from: string,
  address : string,
  time: string,
  message: string,
  subject: string,
  tag: string,
  read : string
}

export function getUsers(): Promise<User[]> {
  return api<User[]>('/')
}

export function createUser(name: string): Promise<User> {
  return api<User>('/users', {
    method: 'POST',
    body: { name },
  })
}
