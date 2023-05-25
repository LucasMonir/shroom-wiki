import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from '../css/ShroomCard.module.css'

function ShroomCard({ title, description, img }) {

    return (
        <Card sx={{ width: 250 }} className={style.card_info}>
            <CardMedia
                sx={{ height: 140 }}
                image={img}
                title={title}
            />
            <CardContent sx={{}}>
                <Typography gutterBottom variant="h6" component="div">
                    {title.split(' ')[0]} <small>{title.split(' ')[1]}</small>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description.slice(0, 110)}...
                </Typography>
            </CardContent>
            <CardActions className={style.card_actions}>
                <Button className={style.card_button} size="small" color='primary'>Share</Button>
                <Button className={style.card_button} size="small" color='primary'>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default ShroomCard;