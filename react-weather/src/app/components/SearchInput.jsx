import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Box } from "@mui/material";

export default function SearchInput({ onChange, inputValue, onClick }) {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <TextField
        size="normal"
        onChange={onChange}
        value={inputValue}
        aria-label="Search"
        InputProps={{
          sx: {
            borderRadius: "1rem",
            width: "60rem", // Responsive width
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={onClick} aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
