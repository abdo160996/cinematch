import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilterSearchType, } from '../slices/searchSlice';

function MediaType() {
    const FilterSearchType = useSelector((state) => state.searchBar.filterSearchType);
    const dispatch = useDispatch()
    function handleChange(e){
        dispatch(setFilterSearchType(e.target.value))
    }
  return (
    <FormControl size='large' sx={{width : {xs:"100%",md:'auto'}}}>
    <InputLabel id="demo-simple-select-label">Media</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={FilterSearchType}
      label="Media"
      onChange={handleChange}
    >
      <MenuItem value={"movie"}>Movies</MenuItem>
      <MenuItem value={"tv"}>TV</MenuItem>
  
    </Select>
  </FormControl>
  )
}

export default MediaType