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

const OfficerDetailForm = () => {
  const [formData, setFormData] = useState({
    financialYear: "",
    chairman: "",
    welOff1: "",
    welOff2: "",
    welOff3: "",
    welOff4: "",
  });

  const [errors, setErrors] = useState({
    financialYear: "",
    chairman: "",
    welOff1: "",
    welOff2: "",
    welOff3: "",
    welOff4: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing again
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: any = {};

    if (!/^\d{4}\/\d{4}$/.test(formData.financialYear)) {
      newErrors.year = "Year must be in the format YYYY/YYYY";
    }
    if (formData.chairman.trim() === "") {
      newErrors.chairman = "This field is required";
    }
    if (formData.welOff1.trim() === "") {
      newErrors.welOff1 = "This field is required";
    }
    if (formData.welOff2.trim() === "") {
      newErrors.welOff2 = "This field is required";
    }
    if (formData.welOff3.trim() === "") {
      newErrors.welOff3 = "This field is required";
    }
    if (formData.welOff4.trim() === "") {
      newErrors.welOff4 = "This field is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log("Form submitted:", formData);
      setFormData({
        financialYear: "",
        chairman: "",
        welOff1: "",
        welOff2: "",
        welOff3: "",
        welOff4: "",
      });
      alert("Submitted!");
    }
  };
  return (
    <>
      <Heading variant="h2">Set Chairman and Welfare officer</Heading>
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
          onSubmit={handleSubmit}
        >
          <TextField
            name="financialYear"
            label="Set financial year"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Ex. 2020/2021"
            value={formData.financialYear}
            onChange={handleChange}
            error={!!errors.financialYear}
            helperText={errors.financialYear}
          />
          <TextField
            name="chairman"
            label="Chairman"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.chairman}
            onChange={handleChange}
            error={!!errors.chairman}
            helperText={errors.chairman}
          />
          <TextField
            name="welOff1"
            label="Welfare Officer"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.welOff1}
            onChange={handleChange}
            error={!!errors.welOff1}
            helperText={errors.welOff1}
          />
          <TextField
            name="welOff2"
            label="Welfare Officer"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.welOff2}
            onChange={handleChange}
            error={!!errors.welOff2}
            helperText={errors.welOff2}
          />
          <TextField
            name="welOff3"
            label="Welfare Officer"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.welOff3}
            onChange={handleChange}
            error={!!errors.welOff3}
            helperText={errors.welOff3}
          />
          <TextField
            name="welOff4"
            label="Welfare Officer"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.welOff4}
            onChange={handleChange}
            error={!!errors.welOff4}
            helperText={errors.welOff4}
          />
          <Button type="submit" variant="contained" color="primary">
            Set
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

export default OfficerDetailForm;
