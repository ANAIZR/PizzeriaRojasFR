import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function ImgMediaCard() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/pizza/v1/pizzas/')
            .then(response => response.json())
            .then(data => setPizzas(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <main className='p-2'>
            <section className='flex flex-wrap'>
                {pizzas.map(pizza => (
                    <Card key={pizza.id} sx={{ maxWidth: 220 }} className='m-2'>
                        <CardMedia
                            component="img"
                            alt={pizza.name}
                            height="140"
                            image={pizza.imagen}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className='text-center' sx={{ color: "brown" }}>
                                {pizza.name}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }} className='text-center'>
                                {pizza.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Link to={`/gestion-pizza/${pizza.id}`}>
                                <Button size="small">Gestionar</Button>
                            </Link>
                            <Link to={`/ver-pizza/${pizza.id}`}>
                                <Button size="small">Ver</Button>
                            </Link>
                        </CardActions>
                    </Card>
                ))}
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
