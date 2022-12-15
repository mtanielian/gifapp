import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

interface Props {
  url: string,
  title: string
}

const ListItem = ({ url, title }: Props): JSX.Element => {
  return (
    <Grid item xs={3} style={{display: "flex"}}>
      <Card sx={{ width: 250, height: 'auto', mb:2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={url}
            alt={title}
          />
          <CardContent sx={{textAlign:'center'}}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ListItem