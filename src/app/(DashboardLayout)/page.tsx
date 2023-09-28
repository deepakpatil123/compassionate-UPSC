"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconManageUser from "./components/icons/IconManageUser";
import IconOfficers from "./components/icons/IconOfficers";
import IconAuthority from "./components/icons/IconAuthority";
import IconViewPass from "./components/icons/IconViewPass";
import IconReports from "./components/icons/IconReports";
import IconBulkApproval from "./components/icons/IconBulkApproval";
import { useAuth } from "@/context/JWTContext/AuthContext.provider";
import PageContainer from "./components/container/PageContainer";
import DashboardCard from "./components/shared/DashboardCard";

import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import styled from "@emotion/styled";
import DashboardNew from "./components/shared/DashboardNew";
import { useEffect } from "react";
const dashboardLinks = [
  {
    name: "Received in current year",
    // href: "/EmployeeDetails",
    icon: <IconManageUser />,
    count: "100",
  },
  {
    name: "Carried forward from previous year",
    // href: "/Officer/ShowOfficer",
    icon: <IconOfficers />,
    count: "69",
  },
  {
    name: "Appointments issued in current year",
    // href: "/Authority/ShowAuthority",
    icon: <IconAuthority />,
    count: "0",
  },
  {
    name: "Appointments issued in till date",
    // href: "/Report/DailyPassReport",
    icon: <IconViewPass />,
    count: "50",
  },
];

const PaperWrapper = styled(Box)(() => ({
  marginTop: "40px",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 200px)",
  gap: "60px",
}));

const Dashboard = () => {
  const auth: any = useAuth();

  const router = useRouter();

  // useEffect(() => {
  // auth.user?"":router.push("/login");

  // }, [auth, router]);

  return (
    <PageContainer
      title="Welcome to Dashboard"
      description="You can navigate the website from here"
    >
      <DashboardNew
        title="Welcome to the Compassionate Appointment"
        titleVariant="h1"
      >
        {auth?.user?.role?.name === "Employee" ? (
          <></>
        ) : (
          <PaperWrapper>
            {dashboardLinks.map((link, i) => (
              <Box sx={{ margin: "5px auto" }}>
                <Link key={i} href={"#"} style={{ textDecoration: "none" }}>
                  <Paper
                    elevation={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      height: "100%",
                      width: "400px",
                      gap: "2rem",
                    }}
                  >
                    {/* <Box mt={2}>{link.icon}</Box> */}

                    <Box
                      component="span"
                      sx={{ fontSize: "40px", fontWeight: "bold" }}
                    >
                      {link.count}
                    </Box>

                    <Typography
                      mb={2}
                      variant="h5"
                      textAlign="center"
                      fontWeight={500}
                    >
                      {link.name}
                    </Typography>
                  </Paper>
                </Link>
              </Box>
            ))}
          </PaperWrapper>
        )}
      </DashboardNew>
    </PageContainer>
  );
};

export default Dashboard;
