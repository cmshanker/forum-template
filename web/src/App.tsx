import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import Graph from './components/Graph'

const App = (): React.ReactElement => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
        <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
          Overview
        </Typography>
        <Grid container spacing={4}>
          <Grid size={6}>
            <Graph />
          </Grid>
          <Grid size={6}>
            <Stack
              spacing={4}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              <Box sx={{ width: '100%' }}></Box>
              <Box sx={{ width: '100%' }}></Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App
