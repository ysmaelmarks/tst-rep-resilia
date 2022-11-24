import * as React from 'react';
import { useEffect, useState } from 'react';
import blogFetch from "../hooks/axios";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState();

  const getProducts = async () => {
    try {
      const response = await blogFetch.get("/produtos");
      const data = response.data;
      console.log("working")
      setProducts(data);
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getProducts();

  }, [])

  return (
    <div>

      <br />
      <Stack spacing={2} sx={{ width: 500 }}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue()
        }}
          id="free-solo-demo"
          options={products.map((product) => `${product.nome}`)}
          renderInput={(params) => 
          <>
          <TextField {...params} label="Nome do item"/>
            <div className="mt-5">{`Item: ${value}`}</div>
          </>
          } />
      </Stack>

    </div>
  );
}
