export const SERVER_URL = process.env.SERVER_URL ?? 'localhost:3000'

export type Board = {
  id: number
  name: string
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
