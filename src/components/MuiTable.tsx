import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Abdullah",
    last_name: "Yazji",
    email: "abdu@gmail.com",
  },
  {
    id: 2,
    first_name: "Yasmien",
    last_name: "Yasmin",
    email: "yasmin@gmail.com",
  },
  {
    id: 3,
    first_name: "Ahmed",
    last_name: "Ahmed",
    email: "ahmed@gmail.com",
  },
  {
    id: 4,
    first_name: "Ali",
    last_name: "kamal",
    email: "ali@gmail.com",
  },
  {
    id: 5,
    first_name: "Mohammed",
    last_name: "kamal",
    email: "mohammed@gmail.com",
  },
  {
    id: 6,
    first_name: "Sara",
    last_name: "Sara",
    email: "sara@gmail.com",
  },
  {
    id: 7,
    first_name: "Lobana",
    last_name: "Kamal",
    email: "lobana@gmail.com",
  },
];
