"use client";
import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, Box, Container } from "@mui/material";

export default function PersonalDetailsForm({
  handleNext,
  onChange,
  formData,
  setFormData,
}: any) {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     dob: "",
  //     education: "",
  //     relationship: "",
  //   });
  const [errors, setErrors] = useState({
    name: "",
    dob: "",
    education: "",
    relationship: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    onChange({
      ...formData,
      [name]: value,
    });

    // Clear the error message when the user starts typing again
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors: any = {};

    if (formData.name.trim() === "") {
      newErrors.name = "This field is required";
    }
    if (formData.dob.trim() === "") {
      newErrors.dob = "This field is required";
    }
    if (formData.education.trim() === "") {
      newErrors.education = "This field is required";
    }
    if (formData.relationship.trim() === "") {
      newErrors.relationship = "This field is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the Form
      console.log("Particular Form Data:", formData);
      handleNext();
      setFormData(formData);
      localStorage.setItem("MultiForm1", JSON.stringify([formData]));
    }
  };

  return (
    <Container
      sx={{
        border: "1px solid #f1efef",
        borderRadius: "5px",
        marginTop: "2em",
        padding: "20px",
      }}
    >
      <Box marginBottom={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Particulars of Candidate
        </Typography>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              size="small"
            />
            <TextField
              name="dob"
              label="Date of Birth"
              variant="outlined"
              fullWidth
              placeholder="Ex. dd/mm/yyyy"
              value={formData.dob}
              onChange={handleChange}
              error={!!errors.dob}
              helperText={errors.dob}
              size="small"
            />

            <TextField
              name="education"
              label="Education Qualification"
              variant="outlined"
              fullWidth
              value={formData.education}
              onChange={handleChange}
              error={!!errors.education}
              helperText={errors.education}
              size="small"
            />
            <TextField
              name="relationship"
              label="Relationship Status"
              variant="outlined"
              fullWidth
              value={formData.relationship}
              onChange={handleChange}
              error={!!errors.relationship}
              helperText={errors.relationship}
              size="small"
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginTop: "20px",
              }}
            >
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
