import { Button, Typography, AppBar, Toolbar, Container } from "@mui/material";

const App = () => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My PWA App</Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to My PWA!
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  </>
);

export default App;
