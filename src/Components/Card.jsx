import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo_pizza from '../assets/logo_pizza.png'
import { Link } from "react-router-dom";

export default function ImgMediaCard() {
    return (
        <main className='p-2'>
            <section className='flex '>

                <Card sx={{ maxWidth: 220 }} className='m-2'>
                    <CardMedia
                        component="img"
                        alt="pizza americana"
                        height="140"
                        image={logo_pizza}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='text-center' sx={{color:"brown"}}>
                            Americana
                        </Typography>
                        <Typography variant="body2"  sx={{color:"gray"}} className='text-center'>
                            Jamón y Queso.
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Link to={'/gestion-pizza'}>
                        <Button size="small">Gestionar</Button>
                        </Link>
                        
                    </CardActions>
                </Card>

            </section>
            <section className='p-1 flex items-center justify-center'>
                <Link to={'/forms-pizza'}>
                    <Button variant='contained' color="success">
                        Agregar Pizza
                    </Button>
                </Link>
            </section>

        </main>



    );
}