import { BoardGroup, SERVER_URL } from '../utils/types'

const boardGroupsUrl = `${SERVER_URL}/board_groups`

export const GetBoardGroups = async (): Promise<BoardGroup[]> => {
  try {
    const response = await fetch(boardGroupsUrl, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    return json as BoardGroup[]
  } catch (error) {
    throw error
  }
}

export const GetBoardGroup = async (id: number): Promise<BoardGroup> => {
  try {
    const response = await fetch(`${boardGroupsUrl}?id=${String(id)}`, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    console.log(json)
    return json as BoardGroup
  } catch (error) {
    throw error
  }
}

export const CreateBoard = async (
  boardGroup: BoardGroup,
): Promise<BoardGroup> => {
  try {
    const response = await fetch(boardGroupsUrl, {
      method: 'POST',
      body: JSON.stringify(boardGroup),
    })
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
    console.log(json)
    return json as BoardGroup
  } catch (error) {
    throw error
  }
}

export const DeleteBoardGroup = async (id: number): Promise<number> => {
  try {
    const response = await fetch(`${boardGroupsUrl}?id=${String(id)}`, {
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
