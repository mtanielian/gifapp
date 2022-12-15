import { Grid } from "@mui/material"
import { useFetchGifs } from "../hooks/useFetchGifs"
import ListItem from "./ListItem"

interface Props {
  term: string
}

const List = ({term} : Props) : JSX.Element => {
  const {gifs} = useFetchGifs({term})

  return (
    <>
      <Grid container sx={{display:"flex", flexDirection:'row', justifyContent:'space-between', backgroundColor: 'aliceblue', padding: '20px'}}>
        {gifs.map( ({id, title, url}) => { return (
          <ListItem key={id} title={title} url={url} />
        )})}
      </Grid>
    </>
  )
}

export default List