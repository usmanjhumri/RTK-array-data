import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'

const Fashion = () => {
    const [addcard, setAddcard] = useState(false);
    const HandleAdd = () => {
        setAddcard(true);
    };
    const handleAddClose = () => {
        setAddcard(false);
    };
    const HandleNewCard = () => {

    }
    return (
        <div>
            <Box mt={12} mb={12}>
                <Button onClick={() => HandleAdd()}>Add Card</Button>
                <Dialog open={addcard} onClose={handleAddClose}>
                    <DialogTitle>Add New Card</DialogTitle>
                    <form onSubmit={HandleNewCard}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                name="name"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Age"
                                type="number"
                                fullWidth
                                variant="standard"
                                required
                                name="age"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Dese"
                                type="text"
                                fullWidth
                                variant="standard"
                                required
                                name="description"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleAddClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </Box>
        </div>
    )
}

export default Fashion