"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  styled,
  Box,
  Typography,
} from "@mui/material";

const AppointmentDetailForm = () => {
  return (
    <>
      <Heading variant="h2">Appointment Details</Heading>
      <Grid
        sx={{
          border: "1px solid #f1efef",
          padding: "30px",
          borderRadius: "5px",
        }}
        sm={12}
      >
        <form
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexDirection: "column",
          }}
          //   onSubmit={handleSubmit}
        >
          <TextField
            name="employeeName"
            label="Employee Name"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Ex. 2020/2021"
            // value={formData.financialYear}
            // onChange={handleChange}
            // error={!!errors.financialYear}
            // helperText={errors.financialYear}
          />
          <TextField
            name="appoDat"
            // label="Appointment Date"
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            // value={formData.chairman}
            // onChange={handleChange}
            // error={!!errors.chairman}
            // helperText={errors.chairman}
          />
          <TextField
            name="appoYear"
            label="Appointment Year"
            variant="outlined"
            size="small"
            fullWidth
            type="number"
            // value={formData.welOff1}
            // onChange={handleChange}
            // error={!!errors.welOff1}
            // helperText={errors.welOff1}
          />

          <TextField
            name="appoYear"
            variant="outlined"
            size="small"
            fullWidth
            type="file"
            // value={formData.welOff1}
            // onChange={handleChange}
            // error={!!errors.welOff1}
            // helperText={errors.welOff1}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
    </>
  );
};

const Heading = styled(Typography)`
  fontsize: 20px;
  fontweight: 600;
  margin: 12px 0;
`;

export default AppointmentDetailForm;
