import {
  Container,
  Grid,
  TextField,
  Button,
  styled,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import OfficerDetailForm from "../components/Forms/OfficerDetailForm";

const page = () => {
  return (
    <Container>
      <OfficerDetailForm />
    </Container>
  );
};

export default page;
