import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  MenuItem,
  Grid,
  FormControl,
} from "@mui/material";

export default function PersonalDetailsForm({
  handleNext,
  onChange,
  formData1,
  setFormData1,
}: any) {
  const [formData, setFormData] = useState({
    familyPension: "",
    parameter: "",
  });
  const [errors, setErrors] = useState({
    familyPension: "",
    parameter: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.familyPension) {
      newErrors.familyPension = "Family Pension is required";
      valid = false;
    }

    if (!formData.parameter) {
      newErrors.parameter = "Parameter is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form data submitted:", formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
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
      <Box mb={1}>
        <Typography variant="h4" align="center" gutterBottom>
          Scoring parameters
        </Typography>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="familyPension"
                label="Family Pension"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <TextField
                name="parameter"
                label="Parameter"
                variant="outlined"
                fullWidth
                select
                size="small"
                value={formData.parameter}
                onChange={handleChange}
                error={!!errors.parameter}
                helperText={errors.parameter}
              >
                <MenuItem value="">Select </MenuItem>
                <MenuItem value="Parameter1">Parameter 1</MenuItem>
                <MenuItem value="Parameter2">Parameter 2</MenuItem>
                <MenuItem value="Parameter3">Parameter 3</MenuItem>
              </TextField>
            </FormControl>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="familyPension"
                label="Family Pension"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <TextField
                name="parameter"
                label="Parameter"
                variant="outlined"
                fullWidth
                select
                size="small"
                value={formData.parameter}
                onChange={handleChange}
                error={!!errors.parameter}
                helperText={errors.parameter}
              >
                <MenuItem value="">Select </MenuItem>
                <MenuItem value="Parameter1">Parameter 1</MenuItem>
                <MenuItem value="Parameter2">Parameter 2</MenuItem>
                <MenuItem value="Parameter3">Parameter 3</MenuItem>
              </TextField>
            </FormControl>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="familyPension"
                label="Family Pension"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <TextField
                name="parameter"
                label="Parameter"
                variant="outlined"
                fullWidth
                select
                size="small"
                value={formData.parameter}
                onChange={handleChange}
                error={!!errors.parameter}
                helperText={errors.parameter}
              >
                <MenuItem value="">Select </MenuItem>
                <MenuItem value="Parameter1">Parameter 1</MenuItem>
                <MenuItem value="Parameter2">Parameter 2</MenuItem>
                <MenuItem value="Parameter3">Parameter 3</MenuItem>
              </TextField>
            </FormControl>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="familyPension"
                label="Family Pension"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <TextField
                name="parameter"
                label="Parameter"
                variant="outlined"
                fullWidth
                select
                size="small"
                value={formData.parameter}
                onChange={handleChange}
                error={!!errors.parameter}
                helperText={errors.parameter}
              >
                <MenuItem value="">Select </MenuItem>
                <MenuItem value="Parameter1">Parameter 1</MenuItem>
                <MenuItem value="Parameter2">Parameter 2</MenuItem>
                <MenuItem value="Parameter3">Parameter 3</MenuItem>
              </TextField>
            </FormControl>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="noOfDependent"
                label="Number of dependents"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="noOfDauter"
                label="Number of unmarried daughter"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="noOfChildren"
                label="Number of minor children"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="unknown"
                label="unknown"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "10px",
            }}
            sm={12}
          >
            <FormControl fullWidth>
              <TextField
                name="remark"
                label="Remark"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
          </Grid>

          <Button
            sx={{
              marginTop: "20px",
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </Box>
    </Container>
  );
}
