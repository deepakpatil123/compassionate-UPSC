import React, { useState } from "react";
import { Button, TextField, Typography, Box, Container } from "@mui/material";

export default function PersonalDetailsForm({
  handleNext,
  onChange,
  formData1,
  setFormData1,
  formData,
  formData2,
}: any) {
  //   const [formData1, setFormData] = useState({
  //    name: "",
  // designation: "",
  // dod: "",
  // dob: "",
  //   });
  const [errors, setErrors] = useState({
    name1: "",
    designation: "",
    dod: "",
    dob1: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    onChange({
      ...formData1,
      [name]: value,
    });

    setFormData1({
      ...formData1,
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

    if (formData1.name1?.trim() === "") {
      newErrors.name = "This field is required";
    }
    if (formData1.designation?.trim() === "") {
      newErrors.designation = "This field is required";
    }
    if (formData1.dod?.trim() === "") {
      newErrors.dod = "This field is required";
    }
    if (formData1.dob1?.trim() === "") {
      newErrors.dob = "This field is required";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the Form
      console.log("Particular of Deceased Form Data:", formData1);
      handleNext();
      setFormData1(formData1);
      localStorage.setItem("MultiForm2", JSON.stringify([formData1]));
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
          Particulars of deceased Govt. servant
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
              name="name1"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData1.name1}
              onChange={handleChange}
              error={!!errors.name1}
              helperText={errors.name1}
              size="small"
            />
            <TextField
              name="designation"
              label="Designation"
              variant="outlined"
              fullWidth
              value={formData1.designation}
              onChange={handleChange}
              error={!!errors.designation}
              helperText={errors.designation}
              size="small"
            />

            <TextField
              name="dod"
              label="Date of death"
              variant="outlined"
              fullWidth
              placeholder="Ex. dd/mm/yyyy"
              value={formData1.dod}
              onChange={handleChange}
              error={!!errors.dod}
              helperText={errors.dod}
              size="small"
            />
            <TextField
              name="dob1"
              label="Date of birth"
              variant="outlined"
              fullWidth
              placeholder="Ex. dd/mm/yyyy"
              value={formData1.dob1}
              onChange={handleChange}
              error={!!errors.dob1}
              helperText={errors.dob1}
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
