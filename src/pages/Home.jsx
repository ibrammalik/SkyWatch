import { Container, Typography, Button } from "@mui/material";

const Home = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Welcome to My PWA!
    </Typography>
    <Button variant="contained" color="primary">
      Get Started
    </Button>
  </Container>
);

export default Home;
