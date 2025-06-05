export const SERVER_URL = 'http://localhost:3000'

export type BoardGroup = {
  id: number
  name: string
}

export type Board = {
  id: number
  name: string
  boardGroupId: number
  parentId?: number
}

export type Thread = {
  id: number
  name: string
  createdAt: Date
  createdBy: number
  lastPostedIn: Date
  lastPostBy: number
  boardId: number
}
