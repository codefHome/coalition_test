import  { useState, } from 'react';
import { Box,  FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

const DropDownField = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option');

  const options: Option[] = [
    { value: 'option', label: 'Last 6 month' },
 
  ];

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <Box className='w-auto'>
      <FormControl fullWidth>
       
        <Select
     
          labelId="select-label"
          id="select"
          value={selectedValue}
          onChange={handleChange}
          fullWidth
          sx={{'& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          }}}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDownField;