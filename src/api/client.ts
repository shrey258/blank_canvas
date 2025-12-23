const API_BASE_URL = 'https://gist.githubusercontent.com/barbinbrad/13609dd592e31d8307dec955889e174d/raw/d9a29d9ff4053e5539e57bdd9e75c9fe527a0096/inbox.json'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

type ApiOptions = {
  method?: HttpMethod
  body?: unknown
}

export async function api<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', body } = options
  const headers = new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  })

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || `Request failed with status ${response.status}`)
  }

  return (await response.json()) as T
}
