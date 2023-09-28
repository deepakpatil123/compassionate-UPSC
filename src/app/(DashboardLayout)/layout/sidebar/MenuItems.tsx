import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";
import PageviewIcon from "@mui/icons-material/Pageview";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { uniqueId } from "lodash";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";

const Menuitems =
  // auth.user.role==="Employee"?[

  // ]:
  [
    {
      navlabel: true,
      subheader: "Home",
      present: "yes",
    },

    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/",
      present: "yes",
    },
    {
      id: uniqueId(),
      title: "Officer Details",
      icon: EditNoteIcon,
      href: "/OfficerD",
      present: "yes",
    },
    {
      id: uniqueId(),
      title: "Entry Form",
      icon: EditNoteIcon,
      href: "/EntryForm",
      present: "yes",
    },
    {
      id: uniqueId(),
      title: "FA-Data",
      icon: PageviewIcon,
      href: "/FAData",
      present: "yes",
    },
    {
      id: uniqueId(),
      title: "Scoring Minutes",
      icon: PageviewIcon,
      href: "/ScoringMin",
      present: "yes",
    },
    {
      id: uniqueId(),
      title: "Report",
      icon: AddHomeWorkIcon,
      href: "/Report",
      present: "no",
    },
    {
      id: uniqueId(),
      title: "Scoring Sheet",
      icon: PageviewIcon,
      href: "/ScoringSheet",
      present: "no",
    },
    {
      id: uniqueId(),
      title: "Appointment Details",
      icon: AddHomeWorkIcon,
      href: "/AppointmentDetails",
      present: "no",
    },
    {
      id: uniqueId(),
      title: "About",
      icon: PageviewIcon,
      href: "/About",
      present: "no",
    },
  ];

export default Menuitems;
