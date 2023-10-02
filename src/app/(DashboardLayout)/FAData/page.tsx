"use client";
import React from "react";
import {
  Paper,
  Button,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Box,
  Typography,
  Container,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

interface EmployeeData {
  srNo: number;
  detailsOfDecreasedEmployee: {
    column1: string;
    column2: string;
  }[];
  detailsOfApplicant: {
    column1: string;
    column2: string;
  }[];
  regNo: string;
  familyPension: number;
  terminalBenefits: number;
  numberOfDependents: number;
  numberOfUnmarriedDaughters: number;
  numberOfMinorChildren: number;
  monthlyIncome: number;
  movableImmovableAssets: number;
  leftOverService: string;
  ageOfCase: number;
  totalPoints: number;
  // edit: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  border: "1px solid black",
  padding: "5px",
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  border: "1px solid black",
}));

const dummyData: EmployeeData[] = [
  {
    srNo: 1,
    detailsOfDecreasedEmployee: [
      { column1: "Name", column2: "JP SHARMA" },
      { column1: "Designation", column2: "DEO GRADE-D" },
      { column1: "DOB", column2: "31/12/1954" },
      { column1: "DOD", column2: "02/06/2007" },
      { column1: "DOR", column2: "31/01/1970" },
    ],
    detailsOfApplicant: [
      { column1: "Name", column2: "LALIT KUMAR SHARMA" },
      { column1: "Relation", column2: "DEO GRADE-D" },
      { column1: "DOB", column2: "31/12/1954" },
      { column1: "AGE", column2: "38 Yrs" },
      { column1: "EQ", column2: "10th" },
    ],
    regNo: "REG001",
    familyPension: 13277,
    terminalBenefits: 66000,
    numberOfDependents: 1,
    numberOfUnmarriedDaughters: 0,
    numberOfMinorChildren: 0,
    monthlyIncome: 5000,
    movableImmovableAssets: 150000,
    leftOverService: "5 Years",
    ageOfCase: 40,
    totalPoints: 85,
    // edit: <Button>Edit</Button>,
  },
  {
    srNo: 2,
    detailsOfDecreasedEmployee: [
      { column1: "Name", column2: "MUKH RAM" },
      { column1: "Designation", column2: "FARASH" },
      { column1: "DOB", column2: "01/02/1954" },
      { column1: "DOD", column2: "15/06/2010" },
      { column1: "DOR", column2: "31/01/1999" },
    ],
    detailsOfApplicant: [
      { column1: "Name", column2: "KULDEEP" },
      { column1: "Relation", column2: "Son" },
      { column1: "DOB", column2: "18/08/1996" },
      { column1: "AGE", column2: "27 Yrs" },
      { column1: "EQ", column2: "10th" },
    ],
    regNo: "REG002",
    familyPension: 1000,
    terminalBenefits: 2000,
    numberOfDependents: 2,
    numberOfUnmarriedDaughters: 1,
    numberOfMinorChildren: 1,
    monthlyIncome: 20000,
    movableImmovableAssets: 0,
    leftOverService: "20 Years",
    ageOfCase: 10,
    totalPoints: 60,
    // edit: <Button>Edit</Button>,
  },
  // Add more rows as needed
];

const EmployeeTable: React.FC = () => {
  return (
    <Box width="100%">
      <Typography>2021/2022</Typography>

      <TableContainer
        sx={{ width: "100%", overflow: "scroll" }}
        component={Paper}
      >
        <Table aria-label="Employee Table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#c8c8c83d" }}>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Sr No.
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Details of Decreased Employee
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Details of Applicant
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Reg No.
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Family Pension
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Terminal Benefits
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                No. of Dependents
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                No. of Unmarried Daughters
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                No. of Minor Children
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Monthly Income
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Movable/Immovable Assets
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Left Over Service
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Age of Case
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Total Points
              </TableCell>
              <TableCell sx={{ border: "1px solid black", fontWeight: "bold" }}>
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <TableRow key={row.srNo}>
                <StyledTableCell sx={{ textAlign: "center" }}>
                  {row.srNo}
                </StyledTableCell>
                <StyledTableCell>
                  <Table sx={{ width: "300px" }}>
                    <TableBody>
                      {row.detailsOfDecreasedEmployee.map((item, index) => (
                        <TableRow key={index}>
                          <StyledTableCell width="100px">
                            {item.column1}
                          </StyledTableCell>
                          <StyledTableCell width="250px">
                            {item.column2}
                          </StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableCell>

                <StyledTableCell>
                  <Table sx={{ width: "300px" }}>
                    <TableBody>
                      {row.detailsOfApplicant.map((item, index) => (
                        <TableRow key={index}>
                          <StyledTableCell width="100px">
                            {item.column1}
                          </StyledTableCell>
                          <StyledTableCell width="250px">
                            {item.column2}
                          </StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </StyledTableCell>
                <StyledTableCell>{row.regNo}</StyledTableCell>
                <StyledTableCell>{row.familyPension}</StyledTableCell>
                <StyledTableCell>{row.terminalBenefits}</StyledTableCell>
                <StyledTableCell>{row.numberOfDependents}</StyledTableCell>
                <StyledTableCell>
                  {row.numberOfUnmarriedDaughters}
                </StyledTableCell>
                <StyledTableCell>{row.numberOfMinorChildren}</StyledTableCell>
                <StyledTableCell>{row.monthlyIncome}</StyledTableCell>
                <StyledTableCell>{row.movableImmovableAssets}</StyledTableCell>
                <StyledTableCell>{row.leftOverService}</StyledTableCell>
                <StyledTableCell>{row.ageOfCase}</StyledTableCell>
                <StyledTableCell>{row.totalPoints}</StyledTableCell>
                <StyledTableCell>
                  <Button color="primary" variant="contained">
                    Edit
                  </Button>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeTable;
