import { Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [terms, setTerms] = useState<string[]>([])
  const handleResponseGif = (query:string) => {
    setTerms(prev => [query, ...prev])
  }
  return (
    <Container>
      <h2>GigExpertApp</h2>
      <Grid container xs={6} md={12}>
        <Grid item xs={12} mb={10}>
          <Form handleResponseGif={handleResponseGif} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="div">Listado de Gifs</Typography>
          {terms.map(term => 
            <>
            <Typography 
              variant='h4' component='h4'
              style={{padding: '10px', backgroundColor: 'darkgray', textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}
            > {term} </Typography>
            <List key={term} term={term} />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
