import { Board, SERVER_URL } from '../utils/types'

const boardsUrl = `${SERVER_URL}/boards`

export const GetBoards = async (): Promise<Board[]> => {
  try {
    const response = await fetch(boardsUrl, {
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

export const GetBoard = async (id: number): Promise<Board> => {
  try {
    const response = await fetch(`${boardsUrl}?id=${String(id)}`, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    console.log(json)
    return json as Board
  } catch (error) {
    throw error
  }
}

export const CreateBoard = async (board: Board): Promise<Board> => {
  try {
    const response = await fetch(boardsUrl, {
      method: 'POST',
      body: JSON.stringify(board),
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
    console.log(json)
    return json as Board
  } catch (error) {
    throw error
  }
}

export const DeleteBoard = async (id: number): Promise<number> => {
  try {
    const response = await fetch(`${boardsUrl}?id=${String(id)}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    return id
  } catch (error) {
    throw error
  }
}
