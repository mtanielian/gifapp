import { ChangeEvent, FormEvent, useState } from "react"
import { TextField } from "@mui/material"

interface Props {
  placeholder?: string,
  handleResponseGif: (query:string) => void
}

const Form = ({ placeholder = 'Buscar gifs', handleResponseGif }: Props): JSX.Element => {
  const[query, setQuery] = useState<string>('')

  const hanldeSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (query.trim().length > 3) {
      handleResponseGif(query)
    }
  }
  
  return (
    <form onSubmit={hanldeSubmit} aria-label="formularioBuscador">
      <TextField  
        name='gifTerm'
        value={query}
        onChange={(event:ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
        size="small" fullWidth hiddenLabel id="outlined-basic" 
        placeholder={placeholder} variant="outlined" 
      />
    </form>
  )
}

export default Form