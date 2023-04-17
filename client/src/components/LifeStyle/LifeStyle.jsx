import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const LifeStyle = () => {
    return (
        <div>
            <Box>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Typography component='h1' sx={{
                                fontFamily: "arial",
                                fontSize: "4rem",
                                textAlign: "center",
                                margin: "4rem 0px"
                            }}>
                                Comming Soon .....
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default LifeStyle