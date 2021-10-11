/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
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
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mr: '8px', fontWeight: 'bold' }}
  >
    •
  </Box>
);

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    <Card sx={{ maxWidth: 345, mt: 10 }}>
      <CardMedia
        component="img"
        image={infosTeste.image}
        height="200"
        alt="House image"
      />
      <CardHeader
        title={infosTeste.address}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          <Box sx={{ mr: '4px', display: 'inline' }}>
            Área útil de
          </Box>
          {infosTeste.usableArea}
          m²
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: '#FF149C' }} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph sx={{ my: 0, py: 0 }}>
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
            Quartos
          </Typography>
          <Typography paragraph sx={{ my: 0, py: 0 }}>
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
          <Typography paragraph sx={{ my: 0, py: 0 }}>
            {bull}
            <Box sx={{
              display: 'inline',
              mr: '4px',
              fontWeight: 'bold',
              color: '#FF149C',
            }}
            >
              {infosTeste.parkingSpaces}
            </Box>
            Vagas
          </Typography>
          <Typography paragraph>
            {bull}
            <Box sx={{
              display: 'inline',
              mr: '4px',
              fontWeight: 'bold',
              color: '#FF149C',
            }}
            >
              {infosTeste.price}
            </Box>
            R$
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
