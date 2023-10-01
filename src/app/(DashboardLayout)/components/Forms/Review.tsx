import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const Review = ({ formData1, formData2 }: any) => {
  let form1Data: any;
  // useEffect(() => {
  form1Data = localStorage.getItem("MultiForm1");
  // }, []);

  const handleSubmitForm = () => {};

  return (
    <Container>
      <Box mb={1}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ margin: "20px 0" }}
        >
          Review
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          textAlign: "left",
          justifyContent: "left",
          margin: "20px 0",
        }}
      >
        <Typography variant="h6">Particulars of Candidate</Typography>
        {/* {JSON.parse(form1Data).map((e: any) => {
          return (
            <Box>
              <Typography variant="body2">Name: {e.name}</Typography>
              <Typography variant="body2">Date of birth: {e.dob}</Typography>
              <Typography variant="body2">Education: {e.education}</Typography>
              <Typography variant="body2">
                Relationship status: {e.relationship}
              </Typography>
            </Box>
          );
        })} */}
        <Typography>{JSON.parse(form1Data)?.name}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          textAlign: "left",
          justifyContent: "left",
          margin: "20px 0",
        }}
      >
        <Typography variant="h6">
          Particulars of deceased Govt. servant
        </Typography>
        {/* {JSON.parse(form2Data).map((e: any) => {
          return (
            <Box>
              <Typography variant="body2">Name: {e.name1}</Typography>
              <Typography variant="body2">
                Designation: {e.designation}
              </Typography>
              <Typography variant="body2">Date of death: {e.dod}</Typography>
              <Typography variant="body2">Date of birth: {e.dob1}</Typography>
            </Box>
          );
        })} */}
        <Typography>{formData1.name1}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          textAlign: "left",
          justifyContent: "left",
          margin: "20px 0",
        }}
      >
        <Typography variant="h6">Particulars of Candidate</Typography>
        {/* {JSON.parse(form3Data).map((e: any) => {
          return (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                }}
              >
                <Typography variant="body2">
                  Family Pension: {e.familyPension}
                </Typography>
                <Typography variant="body2">
                  Parameter: {e.parameter1}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                }}
              >
                <Typography variant="body2">
                  Terminal benefits: {e.terminalBenefit}
                </Typography>
                <Typography variant="body2">
                  Parameter: {e.parameter2}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                }}
              >
                <Typography variant="body2">
                  Monthly Income: {e.monthlyIncome}
                </Typography>
                <Typography variant="body2">
                  Parameter: {e.parameter3}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1em",
                }}
              >
                <Typography variant="body2">
                  Movable and immovable assets: {e.movAndImmAss}
                </Typography>
                <Typography variant="body2">
                  Parameter: {e.parameter4}
                </Typography>
              </Box>

              <Typography variant="body2">
                Number of dependents: {e.noOfDep}
              </Typography>
              <Typography variant="body2">
                Number of unmarried daughter: {e.noOfUnmarr}
              </Typography>
              <Typography variant="body2">
                Number of minor children: {e.noOfMinChildren}
              </Typography>
              <Typography variant="body2">unknown: {e.unknown}</Typography>
              <Typography variant="body2">Remark: {e.remark}</Typography>
            </Box>
          );
        })} */}
        <Typography>{formData2.familyPension}</Typography>
      </Box>
      <Button
        sx={{
          marginTop: "20px",
        }}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmitForm}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Review;
