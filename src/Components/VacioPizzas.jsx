import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

export const VacioPizzas = () => {
  return (
    <div className='flex flex-col items-center justify-center h-96 '>
      <Stack sx={{ width: '100%' }} spacing={2} className='p-1 '>
        <Alert variant="outlined" severity="warning">
          Actualmente no cuentas con pizzas registradas.
        </Alert>
      </Stack>
      <div className='mt-2 border-2'>
        <Link to={'/forms-pizza'}>
          <Button variant='contained' color="success">
            Agregar Pizza
          </Button>
        </Link>

      </div>

    </div>

  )
}
