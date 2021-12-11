import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styles } from "./style";

const UsersTable = (props) => {
  const { data } = props;
  console.log(data)
  return (<></>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>User</TableCell>
    //         <TableCell align="right">Gender</TableCell>
    //         <TableCell align="right">Email</TableCell>
    //         <TableCell align="right">Username</TableCell>
    //         <TableCell align="right">DOB</TableCell>
    //         <TableCell align="right">Phone</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {data.map((row) => (
    //         <TableRow key={row.username} sx={styles.tableRow}>
    //           <TableCell component="th" scope="row">
    //             {`${row.title} ${row.first} ${row.last}`}
    //           </TableCell>
    //           <TableCell align="right">{row.gender}</TableCell>
    //           <TableCell align="right">{row.email}</TableCell>
    //           <TableCell align="right">{row.username}</TableCell>
    //           <TableCell align="right">{row.dob}</TableCell>
    //           <TableCell align="right">{row.phone}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default UsersTable;
