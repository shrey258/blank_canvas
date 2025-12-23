import { api } from './client'

export type User = {
  id: string
  name: string
}

export function getUsers(): Promise<User[]> {
  return api<User[]>('/users')
}

export function createUser(name: string): Promise<User> {
  return api<User>('/users', {
    method: 'POST',
    body: { name },
  })
}
