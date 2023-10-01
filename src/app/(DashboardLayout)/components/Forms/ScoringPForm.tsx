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
  formData2,
  setFormData2,
  formData,
  formData1,
}: any) {
  // const [formData, setFormData] = useState({
  //   familyPension: "",
  //   parameter1: "",
  //   terminalBenefit: "",
  //   parameter2: "",
  //   monthlyIncome: "",
  //   parameter3: "",
  //   movAndImmAss: "",
  //   parameter4: "",
  //   noOfDep: "",
  //   noOfUnmarr: "",
  //   noOfMinChildren: "",
  //   unknown: "",
  //   remark: "",
  // });
  const [errors, setErrors] = useState({
    familyPension: "",
    parameter1: "",
    terminalBenefit: "",
    parameter2: "",
    monthlyIncome: "",
    parameter3: "",
    movAndImmAss: "",
    parameter4: "",
    noOfDep: "",
    noOfUnmarr: "",
    noOfMinChildren: "",
    unknown: "",
    remark: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData2.familyPension) {
      newErrors.familyPension = "Family Pension is required";
      valid = false;
    }
    if (!formData2.parameter1) {
      newErrors.parameter1 = "Parameter1 is required";
      valid = false;
    }

    if (!formData2.terminalBenefit) {
      newErrors.terminalBenefit = "terminal benefits is required";
      valid = false;
    }
    if (!formData2.parameter1) {
      newErrors.parameter2 = "Parameter2 is required";
      valid = false;
    }

    if (!formData2.monthlyIncome) {
      newErrors.familyPension = "monthly income is required";
      valid = false;
    }
    if (!formData2.parameter3) {
      newErrors.parameter3 = "Parameter3 is required";
      valid = false;
    }

    if (!formData2.movAndImmAss) {
      newErrors.movAndImmAss = "This field is required";
      valid = false;
    }
    if (!formData2.parameter3) {
      newErrors.parameter4 = "Parameter4 is required";
      valid = false;
    }

    if (!formData2.noOfDep) {
      newErrors.noOfDep = "No. of dependents is required";
      valid = false;
    }
    if (!formData2.noOfUnmarr) {
      newErrors.noOfUnmarr = "No. of unmarried daughter is required";
      valid = false;
    }
    if (!formData2.noOfMinChildren) {
      newErrors.noOfMinChildren = "No. of minor children is required";
      valid = false;
    }
    if (!formData2.unknown) {
      newErrors.unknown = "unknown is required";
      valid = false;
    }
    if (!formData2.remark) {
      newErrors.remark = "remark is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Scoring parameters data:", formData2);
      handleNext();
      setFormData2(formData2);
      localStorage.setItem("MultiForm3", JSON.stringify([formData2]));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      ...formData2,
      [name]: value,
    });

    setFormData2({
      ...formData2,
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
                value={formData2.familyPension}
                onChange={handleChange}
                error={!!errors.familyPension}
                helperText={errors.familyPension}
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <TextField
                name="parameter1"
                label="Parameter"
                variant="outlined"
                fullWidth
                select
                size="small"
                value={formData2.parameter1}
                onChange={handleChange}
                error={!!errors.parameter1}
                helperText={errors.parameter1}
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
                name="terminalBenefit"
                label="Terminal Benefits"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData2.terminalBenefit}
                onChange={handleChange}
                error={!!errors.terminalBenefit}
                helperText={errors.terminalBenefit}
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <TextField
                name="parameter2"
                label="Parameter"
                variant="outlined"
                fullWidth
                select
                size="small"
                value={formData2.parameter2}
                onChange={handleChange}
                error={!!errors.parameter2}
                helperText={errors.parameter2}
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
                name="monthlyIncome"
                label="Monthly Income"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData2.monthlyIncome}
                onChange={handleChange}
                error={!!errors.monthlyIncome}
                helperText={errors.monthlyIncome}
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <TextField
                name="parameter3"
                label="Parameter"
                variant="outlined"
                fullWidth
                select
                size="small"
                value={formData2.parameter3}
                onChange={handleChange}
                error={!!errors.parameter3}
                helperText={errors.parameter3}
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
                name="movAndImmAss"
                label="Movable and Immovable assets"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData2.movAndImmAss}
                onChange={handleChange}
                error={!!errors.movAndImmAss}
                helperText={errors.movAndImmAss}
              />
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <TextField
                name="parameter4"
                label="Parameter"
                variant="outlined"
                fullWidth
                select
                size="small"
                value={formData2.parameter4}
                onChange={handleChange}
                error={!!errors.parameter4}
                helperText={errors.parameter4}
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
                name="noOfDep"
                label="Number of dependents"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData2.noOfDep}
                onChange={handleChange}
                error={!!errors.noOfDep}
                helperText={errors.noOfDep}
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
                name="noOfUnmarr"
                label="Number of unmarried daughter"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData2.noOfUnmarr}
                onChange={handleChange}
                error={!!errors.noOfUnmarr}
                helperText={errors.noOfUnmarr}
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
                name="noOfMinChildren"
                label="Number of minor children"
                variant="outlined"
                fullWidth
                size="small"
                type="number"
                value={formData2.noOfMinChildren}
                onChange={handleChange}
                error={!!errors.noOfMinChildren}
                helperText={errors.noOfMinChildren}
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
                // type="number"
                value={formData2.unknown}
                onChange={handleChange}
                error={!!errors.unknown}
                helperText={errors.unknown}
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
                // type="number"
                value={formData2.remark}
                onChange={handleChange}
                error={!!errors.remark}
                helperText={errors.remark}
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
