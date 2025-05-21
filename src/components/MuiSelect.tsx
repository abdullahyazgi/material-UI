// import { Box, TextField, MenuItem, Stack } from "@mui/material";
import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  console.log({ country });
  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  // const [languages, setLanguages] = useState<string[]>([]);
  // console.log({ languages });
  // const handlelanguages = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setLanguages(typeof value === "string" ? value.split(",") : value);
  // };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="select-country">Select Country</InputLabel>
        <Select
          labelId="select-country"
          id="selected-counrty"
          value={country}
          label="Select Country"
          onChange={handleChange}
        >
          <MenuItem value="SY">Syria</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </Select>
      </FormControl>
    </div>

    // <Stack spacing={2}>
    //   <Box width="250px">
    //     <TextField
    //       label="Select Country"
    //       select
    //       value={country}
    //       onChange={handleChange}
    //       fullWidth
    //     >
    //       <MenuItem value="SY">Syria</MenuItem>
    //       <MenuItem value="USA">USA</MenuItem>
    //       <MenuItem value="AU">Australia</MenuItem>
    //     </TextField>
    //   </Box>
    //   <Box width="250px">
    //     <TextField
    //       label="Select Languags Programing"
    //       select
    //       value={languages}
    //       onChange={handlelanguages}
    //       fullWidth
    //       SelectProps={{
    //         multiple: true,
    //       }}
    //     >
    //       <MenuItem value="JA">Java</MenuItem>
    //       <MenuItem value="JS">JavaScript</MenuItem>
    //       <MenuItem value="PY">Python</MenuItem>
    //     </TextField>
    //   </Box>
    // </Stack>
  );
};

export default MuiSelect;
