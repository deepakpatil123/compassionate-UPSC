"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import ParticularForm from "../components/Forms/ParticularForm";
import ParticularOfDecForm from "../components/Forms/ParticularOfDecForm";
import ScoringPForm from "../components/Forms/ScoringPForm";
import Review from "../components/Forms/Review";

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    "Particulars of Candidate",
    "Particulars of deceased Govt. servant",
    "Scoring parameters",
    "Review",
  ];
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    education: "",
    relationship: "",
  });
  const [formData1, setFormData1] = useState({
    name: "",
    designation: "",
    dod: "",
    dob: "",
  });

  const handleFormChange = (newFormData: any) => {
    setFormData(newFormData);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <ParticularForm
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            onChange={handleFormChange}
          />
        );
      case 1:
        return (
          <ParticularOfDecForm
            formData1={formData1}
            setFormData1={setFormData1}
            handleNext={handleNext}
            onChange={handleFormChange}
          />
        );
      case 2:
        return (
          <ScoringPForm
            formData1={formData1}
            setFormData1={setFormData1}
            handleNext={handleNext}
            onChange={handleFormChange}
          />
        );
      case 3:
        return <Review />;
      default:
        return "Unknown step";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        align="center"
        sx={{ marginBottom: "50px" }}
        gutterBottom
      >
        Compassionate Appointment-Scoring Program
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === steps.length ? (
          <Box>
            <Typography variant="h5" align="center">
              Thank you for submitting the form.
            </Typography>
          </Box>
        ) : (
          <Box mb={2}>
            <Typography variant="h6" align="center" gutterBottom>
              {getStepContent(activeStep)}
            </Typography>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                Back
              </Button>
              {/* <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button> */}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
