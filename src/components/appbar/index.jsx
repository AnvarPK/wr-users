import { AppBar as MuiAppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const AppBar = () => {
    return (
        <MuiAppBar position="static" >
            <Container maxWidth="xl">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2 }}
                        >
                            WR Users
                        </Typography>
                    </Toolbar>
                </Box>
            </Container>
        </MuiAppBar>
    )
}

export default AppBar
