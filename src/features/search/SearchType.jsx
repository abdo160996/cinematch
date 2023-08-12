import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Box, ListItemButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchType } from './slices/searchSlice';

const options = [
  'movie',
  'tv',
  'multi',

];

export default function SearchType() {
   const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    dispatch(setSearchType(options[index]))
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box >
      <List
        
        aria-label="Search Type"
        sx={{ bgcolor: 'custom.primary',boxShadow:"theme.shadows[1]",outline:"1px dashed #777",
        outlineOffset:"-4px",p:0 }}
      >
        <ListItemButton
          
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="movie or tv"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary=""
            secondary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
 
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}