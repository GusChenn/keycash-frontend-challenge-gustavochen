/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  IconButton,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Funcao que altera icone de expandir
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
// Funcao que altera estado 'expanded'
export default function ProductCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Infos mock para testes
  const infosTeste = {
    address: 'Rua Tabapuã, 56 Itaim Bibi - SP',
    image: 'https://i.imgur.com/q1Mj5mf.jpg',
    price: 99999,
    bathrooms: 4,
    bedrooms: 2,
    parkingSpaces: 3,
    usableArea: 320,
    publish: true,
  };
  return (
    <Card
      sx={{
        width: '90%',
        my: 1,
        mx: 0,
      }}
    >
      <CardMedia
        component="img"
        image={infosTeste.image}
        alt="House image"
      />
      <CardHeader
        title={infosTeste.address}
      />
      <Typography variant="body1" color="text.secondary">
        <Box
          sx={{
            mr: '0.3em',
            display: 'inline',
            ml: '5%',
          }}
        >
          Área útil de
        </Box>
        <Box sx={{ color: '#FF149C', display: 'inline' }}>
          {infosTeste.usableArea}
          m²
        </Box>
      </Typography>
      <CardActions
        sx={{
          justifyContent: 'center',
          padding: 0,
          width: '58%',
          mt: '5%',
        }}
      >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ fontSize: '40px', color: '#FF149C' }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            sx={{
              xs: 1,
              sm: 2,
              md: 3,
              flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
              },
            }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                paragraph
                sx={{
                  mb: 2,
                  py: 0,
                  px: 2,
                  mx: 1,
                  borderRadius: '7%',
                  justifyContent: 'center',
                  boxShadow: '1',
                }}
              >
                <Box sx={{
                  display: 'inline',
                  mr: '4px',
                  fontWeight: 'bold',
                  color: '#FF149C',
                  fontSize: '50px',
                  mb: '0',
                }}
                >
                  {infosTeste.bedrooms}
                </Box>
                Dormitórios
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                paragraph
                sx={{
                  mb: 2,
                  py: 0,
                  px: 2,
                  mx: 1,
                  borderRadius: '7%',
                  justifyContent: 'center',
                  boxShadow: '1',
                }}
              >
                <Box sx={{
                  display: 'inline',
                  mr: '4px',
                  fontWeight: 'bold',
                  color: '#FF149C',
                  fontSize: '50px',
                }}
                >
                  {infosTeste.bathrooms}
                </Box>
                Banheiros
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12}>
              <Typography
                paragraph
                sx={{
                  mb: 3,
                  py: 0,
                  px: 2,
                  mx: 1,
                  borderRadius: '7%',
                  justifyContent: 'center',
                  boxShadow: '1',
                }}
              >
                <Box sx={{
                  display: 'inline',
                  mr: '4px',
                  fontWeight: 'bold',
                  color: '#FF149C',
                  fontSize: '50px',
                }}
                >
                  {infosTeste.parkingSpaces}
                </Box>
                Vagas para veiculos
              </Typography>
            </Grid>
            <Typography
              paragraph
              sx={{
                mt: 2,
                mb: 2,
                py: 0,
                px: 2,
                mx: 1,
                justifyContent: 'center',
              }}
            >
              <Divider />
              <Box sx={{ mt: 4 }}>
                Valor:
              </Box>
              <Box sx={{
                display: 'inline',
                mr: '4px',
                fontWeight: 'bold',
                color: '#FF149C',
                fontSize: '50px',
              }}
              >
                {infosTeste.price}
              </Box>
              R$
            </Typography>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
