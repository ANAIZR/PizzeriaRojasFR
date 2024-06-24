import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo_pizza from '../assets/logo_pizza.png'
export default function ImgMediaCard() {
    return (
        <div className='flex p-2'>
            <Card sx={{ maxWidth: 220 }} className='m-2'>
                <CardMedia
                    component="img"
                    alt="pizza americana"
                    height="140"
                    image={logo_pizza}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Americana
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Jamón y Queso.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Ver</Button>
                    <Button size="small">Añadir</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 220 }} className='m-2'>
                <CardMedia
                    component="img"
                    alt="pizza americana"
                    height="140"
                    image={logo_pizza}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Americana
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Jamón y Queso.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Ver</Button>
                    <Typography variant='body2' color="text.secondary">15</Typography>
                    <Button size="small">Añadir</Button>
                </CardActions>
            </Card>
        </div>


    );
}