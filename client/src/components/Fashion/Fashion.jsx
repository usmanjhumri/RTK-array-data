import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { product } from '../../RTK/slice/userSlice'
const Fashion = () => {
    const dispatch = useDispatch()
    const { user, products } = useSelector((store) => store.userSlice)
    const [addcard, setAddcard] = useState(false);
    const HandleAdd = () => {
        setAddcard(true);
    };
    const handleAddClose = () => {
        setAddcard(false);
    };
    const HandleNewCard = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const name = formData.get('name')
        const age = formData.get('age')
        const description = formData.get('description')
        const newProduct = { name, age, description }
        console.log(newProduct, ' my products');
        dispatch(product({ user, product: newProduct }));
        handleAddClose();



    }

    return (
        <div>
            <Box mt={12} mb={12}>
                <Button onClick={() => HandleAdd()}>Add Product</Button>
                <Dialog open={addcard} onClose={handleAddClose}>
                    <DialogTitle>Add Product</DialogTitle>
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

            <Box sx={{
                margin: "1rem auto"
            }}>
                {
                    products.map((item, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <p>Name: {item.name}</p>
                                    <p>Age: {item.age}</p>
                                    <p>Description: {item.description}</p>
                                </div>
                            </>
                        )
                    })
                }
            </Box>
        </div>
    )
}

export default Fashion