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

import { GetBoards } from '../services/boards'
import { Board } from '../utils/types'

const Boards = (): React.ReactElement => {
  const [boards, setBoards] = useState<Board[]>([])

  useEffect(() => {
    const fetchBoards = async () => {
      const data = await GetBoards()
      setBoards(data)
    }

    console.log('hello???')
    fetchBoards().catch(console.error)
  }, [])
  console.log('hiiiiiii')
  console.log(boards)

  return (
    <Box sx={{ display: 'flex' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {boards.map((b) => (
              <TableRow
                key={b.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {b.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Boards
