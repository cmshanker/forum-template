import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'

import { GetBoardGroups } from '../services/board_groups'
import { GetBoards } from '../services/boards'
import { Board, BoardGroup } from '../utils/types'

const Home = (): React.ReactElement => {
  const [boards, setBoards] = useState<Board[]>([])
  const [boardGroups, setBoardGroups] = useState<BoardGroup[]>([])

  useEffect(() => {
    const fetchBoardGroups = async () => {
      const data = await GetBoardGroups()
      setBoardGroups(data)
    }
    const fetchBoards = async () => {
      const data = await GetBoards()
      setBoards(data)
    }

    fetchBoardGroups().catch(console.error)
    fetchBoards().catch(console.error)
  }, [])
  console.log(boardGroups)
  console.log(boards)

  return (
    <Box sx={{ display: 'flex' }}>
      {boardGroups.map((bg) => (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{bg.name}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {boards.map((b) => {
                console.log(b, bg)
                if (b.boardGroupId === bg.id) {
                  return (
                    <TableRow
                      key={b.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {b.name}
                      </TableCell>
                    </TableRow>
                  )
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </Box>
  )
}

export default Home
