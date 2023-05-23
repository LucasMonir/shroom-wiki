import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function ShroomCard({ title, subtitle, img }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#8b7aff',
            }
        },
    });

    return (
        <Card sx={{ width: 250 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title.split(' ')[0]}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {title.split(' ')[1]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {subtitle}
                </Typography>
            </CardContent>
            <CardActions>
                <ThemeProvider theme={theme}>
                    <Button size="small" color='primary'>Share</Button>
                    <Button size="small" color='primary'>Learn More</Button>
                </ThemeProvider>
            </CardActions>
        </Card>
    );
}

export default ShroomCard;