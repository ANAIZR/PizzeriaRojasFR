/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ModalSuccess({ show, handleClose }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Éxito
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    ¡La pizza ha sido registrada con éxito!
                </Typography>
                <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Cerrar
                </Button>
            </Box>
        </Modal>
    );
}
