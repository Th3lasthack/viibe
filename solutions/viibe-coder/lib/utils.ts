import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export async function shareCode(code: string, language: string, title?: string) {
  try {
    const response = await fetch('/api/share', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, language, title }),
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error sharing code:', error)
    throw error
  }
}

export async function getSharedCode(id: string) {
  try {
    const response = await fetch(`/api/share?id=${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching shared code:', error)
    throw error
  }
}
