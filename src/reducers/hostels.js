import { ImManWoman, ImMan, ImWoman } from "react-icons/im";
import WifiIcon from "@material-ui/icons/Wifi";
import VideocamIcon from "@material-ui/icons/Videocam";

const HostelsReducers = (
  state = [
    {
      name: "Hostel 1",
      gender: <ImManWoman />,
      prize: 8000,
      amenities: [
        {
          name: "wifi",
          icon: <WifiIcon />,
        },
        {
          name: "cctv",
          icon: <VideocamIcon />,
        },
      ],
      description:
        "The 2-storey residence hostel at HIT is home to 200 students, 50 male and 150 female. Each room houses 2 students. All the rooms have en-suite facility.",
    },
    {
      name: "Hostel 2",
      gender: <ImMan />,
      prize: 6000,
      description:
        "The 2-storey residence hostel at HIT is home to 300 male students. Each room houses 2 students. Each  rooms student has his own wardrobe for all their storage needs.",
    },
    {
      name: "Hostel 3",
      gender: <ImMan />,
      prize: 6000,
      description:
        "The 2-storey residence hostel at HIT is home to 300 male students. Each room houses 2 students. Each  rooms student has his own wardrobe for all their storage needs.",
    },
    {
      name: "Hostel 4",
      gender: <ImWoman />,
      prize: 6000,
      description:
        "The 2-storey residence hostel at HIT is home to 300 female students. Each room houses 2 students. Each  rooms student has his own wardrobe for all their storage needs.",
    },
  ],
  action
) => {
  switch (action.type) {
    case 1:
      return state;
    case 2:
      return state;
    case 3:
      return state;
    case 4:
      return state;
    default:
      return state;
  }
};

export default HostelsReducers;
