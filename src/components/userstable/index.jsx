import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styles } from "./style";
import { format } from "date-fns";

const UsersTable = (props) => {
  const { data } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({user}) => (
            <TableRow key={user.username} sx={styles.tableRow}>
              <TableCell component="th" scope="row">
                {`${user.name.title} ${user.name.first} ${user.name.last}`}
              </TableCell>
              <TableCell align="right">{user.gender}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{format(new Date(user.dob), 'MM/dd/yyyy')}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
