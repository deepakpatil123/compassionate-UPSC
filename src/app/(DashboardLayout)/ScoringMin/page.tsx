"use client";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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
  // edit: any;
}

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
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filterData = (data: EmployeeData[], term: string): EmployeeData[] => {
    return data.filter((row) => {
      const fieldsToSearch = Object.values(row)
        .flatMap((value) => {
          if (Array.isArray(value)) {
            return value.flatMap((innerValue) => Object.values(innerValue));
          }
          return [value];
        })
        .filter((value) => typeof value === "string");

      return fieldsToSearch.some((value) =>
        value.toLowerCase().includes(term.toLowerCase())
      );
    });
  };

  const filteredData = filterData(dummyData, searchTerm);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "16px" }}
      />
      <TableContainer component={Paper}>
        <Table aria-label="Employee Table">
          <TableHead>
            <TableRow>
              <TableCell>Sr No.</TableCell>
              <TableCell>Details of Decreased Employee</TableCell>
              <TableCell>Details of Applicant</TableCell>
              <TableCell>Reg No.</TableCell>
              <TableCell>Family Pension</TableCell>
              <TableCell>Terminal Benefits</TableCell>
              <TableCell>No. of Dependents</TableCell>
              <TableCell>No. of Unmarried Daughters</TableCell>
              <TableCell>No. of Minor Children</TableCell>
              <TableCell>Monthly Income</TableCell>
              <TableCell>Movable/Immovable Assets</TableCell>
              <TableCell>Left Over Service</TableCell>
              <TableCell>Age of Case</TableCell>
              <TableCell>Total Points</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.srNo}>
                <TableCell>
                  {row.srNo}
                  <Button variant="contained" color="success">
                    Disposed
                  </Button>
                  <Button variant="contained" color="primary">
                    CArry Fwd
                  </Button>
                </TableCell>
                <TableCell>
                  <Table>
                    <TableBody>
                      {row.detailsOfDecreasedEmployee.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.column1}</TableCell>
                          <TableCell>{item.column2}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
                <TableCell>
                  <Table>
                    <TableBody>
                      {row.detailsOfApplicant.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.column1}</TableCell>
                          <TableCell>{item.column2}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
                <TableCell>{row.regNo}</TableCell>
                <TableCell>{row.familyPension}</TableCell>
                <TableCell>{row.terminalBenefits}</TableCell>
                <TableCell>{row.numberOfDependents}</TableCell>
                <TableCell>{row.numberOfUnmarriedDaughters}</TableCell>
                <TableCell>{row.numberOfMinorChildren}</TableCell>
                <TableCell>{row.monthlyIncome}</TableCell>
                <TableCell>{row.movableImmovableAssets}</TableCell>
                <TableCell>{row.leftOverService}</TableCell>
                <TableCell>{row.ageOfCase}</TableCell>
                <TableCell>{row.totalPoints}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeTable;
