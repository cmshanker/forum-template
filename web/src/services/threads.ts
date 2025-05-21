import { SERVER_URL, Thread } from '../utils/types'

const threadsUrl = `${SERVER_URL}/threads`

export const GetThreads = async (): Promise<Thread[]> => {
  try {
    const response = await fetch(threadsUrl, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    console.log(json)
    return []
  } catch (error) {
    throw error
  }
}
