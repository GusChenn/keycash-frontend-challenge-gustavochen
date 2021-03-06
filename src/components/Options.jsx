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
  TextField,
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
    <Grid
      className="all-container"
      container
      spacing={1}
      direction="row"
      alignItems="flex-start"
      alignContent="center"
      justifyContent="space-evenly"
      wrap="wrap"
      sx={{
        width: '100vw',
      }}
    >
      <Grid
        className="options-container"
        item
        xs={12}
        sm={12}
        md={12}
        lg={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <Paper
          sx={{
            maxWidth: {
              xs: '100vw',
              sm: '100vw',
              md: '300px',
              lg: '300px',
            },
            p: 2,
            ml: {
              xs: 1,
              ms: 0,
              md: 0,
              lg: 2,
            },
            display: 'flex',
            flexDirection: 'column',
            position: {
              lg: 'fixed',
            },
          }}
        >
          <Box
            className="mobileHidden"
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
              },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <Ballot sx={{ color: '#FF149C' }} />
              </ListItemIcon>
              <Typography
                paragraph
                sx={{ display: 'inline', m: 0, fontSize: '13px' }}
              >
                Im??veis por p??gina:
              </Typography>
              <FormControl variant="standard" sx={{ m: 1 }}>
                <Select
                  labelId="cards-per-page-quantity"
                  value={state.quantity}
                  sx={{
                    margin: '0',
                    padding: '1px',
                    fontSize: '15px',
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
          </Box>
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
              sx={{ display: 'inline', m: 0, fontSize: '13px' }}
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
                xs: 3,
                sm: 3,
                md: 3,
                lg: 3,
                p: 1,
              }}
            >
              <Grid item xs={1}>
                <AttachMoney sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={2}>
                <Typography sx={{ fontSize: '13px' }}>
                  Pre??o:
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  min
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Slider defaultVaue={50} aria-label="Price slider" sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  max
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <LocationOn sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={2}>
                <Typography sx={{ fontSize: '13px' }}>
                  Endere??o:
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField id="standard-basic" variant="standard" sx={{ pl: 3 }} />
              </Grid>
              <Grid item xs={1}>
                <Superscript sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={2.5}>
                <Typography sx={{ fontSize: '13px' }}>
                  ??rea ??til:
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  min
                </Typography>
              </Grid>
              <Grid item xs={6.5}>
                <Slider defaultVaue={50} aria-label="Area slider" sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  max
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <DirectionsCar sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={2.5}>
                <Typography sx={{ fontSize: '13px' }}>
                  Vagas:
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  min
                </Typography>
              </Grid>
              <Grid item xs={6.5}>
                <Slider defaultVaue={50} aria-label="Car slider" sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  max
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Bathtub sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{ fontSize: '13px' }}>
                  Banheiros:
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  min
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Slider defaultVaue={50} aria-label="Bath slider" sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  max
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Hotel sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={3.5}>
                <Typography sx={{ fontSize: '13px' }}>
                  Dormit??rios:
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  min
                </Typography>
              </Grid>
              <Grid item xs={5.5}>
                <Slider defaultVaue={50} aria-label="Room slider" sx={{ color: '#FF149C' }} />
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '10px' }}>
                  max
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={8}
      >
        <ShowcaseGrid quantity={state.quantity} />
      </Grid>
    </Grid>
  );
}
