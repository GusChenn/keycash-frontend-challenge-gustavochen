/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import {
  Box,
  Paper,
  Select,
  FormControl,
  Divider,
  MenuItem,
  ListItemIcon,
  Typography,
  Slider,
  Grid,
} from '@mui/material';
import Ballot from '@mui/icons-material/Ballot';
import Search from '@mui/icons-material/Search';
import Bathtub from '@mui/icons-material/Bathtub';
import Hotel from '@mui/icons-material/Hotel';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Superscript from '@mui/icons-material/Superscript';
import LocationOn from '@mui/icons-material/LocationOn';
import ShowcaseGrid from './ShowcaseGrid';

export default function Options() {
  const [state, setState] = useState({ quantity: '5' });
  const handleChange = (e) => {
    setState({ quantity: e.target.value });
  };
  return (
    <Box>
      <Paper
        sx={{
          maxWidth: '100vw',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <ListItemIcon sx={{ minWidth: '40px' }}>
            <Ballot sx={{ color: '#FF149C' }} />
          </ListItemIcon>
          <Typography
            paragraph
            sx={{ display: 'inline', m: 0 }}
          >
            Imóveis por página:
          </Typography>
          <FormControl variant="standard" sx={{ m: 1 }}>
            <Select
              labelId="cards-per-page-quantity"
              value={state.quantity}
              sx={{
                margin: '0',
                padding: '1px',
              }}
              onChange={handleChange}
            >
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="15">15</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            my: 2,
          }}
        >
          <ListItemIcon sx={{ minWidth: '40px' }}>
            <Search sx={{ color: '#FF149C' }} />
          </ListItemIcon>
          <Typography
            paragraph
            sx={{ display: 'inline', m: 0 }}
          >
            Filtros:
          </Typography>
        </Box>
        <Paper sx={{ boxShadow: 0, border: 'solid 1px #dddddd' }}>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            sx={{
              xs: 1,
              sm: 2,
              md: 3,
              p: 2,
            }}
          >
            <Grid item xs={1}>
              <AttachMoney sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                Preço:
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider defaultVaue={50} aria-label="Price slider" sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={1}>
              <LocationOn sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                Endereço:
              </Typography>
            </Grid>
            <Grid item xs={7}>
              asid
            </Grid>
            <Grid item xs={1}>
              <Superscript sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                Área útil:
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider defaultVaue={50} aria-label="Area slider" sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={1}>
              <DirectionsCar sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                Vagas:
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider defaultVaue={50} aria-label="Car slider" sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={1}>
              <Bathtub sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                Banheiros:
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider defaultVaue={50} aria-label="Bath slider" sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={1}>
              <Hotel sx={{ color: '#FF149C' }} />
            </Grid>
            <Grid item xs={4}>
              <Typography>
                Dormitórios:
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Slider defaultVaue={50} aria-label="Room slider" sx={{ color: '#FF149C' }} />
            </Grid>
          </Grid>
        </Paper>
      </Paper>
      <ShowcaseGrid quantity={state.quantity} />
    </Box>
  );
}
