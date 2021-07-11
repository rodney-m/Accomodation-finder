import { ImManWoman, ImMan, ImWoman} from "react-icons/im";
import WifiIcon from '@material-ui/icons/Wifi';
import VideocamIcon from '@material-ui/icons/Videocam';

const HostelsReducers = (state = [
    {
      name: "Hostel 1",
      gender: <ImManWoman/>,
      prize: 8000,
      amenities: [
        {
          name: "wifi", 
          icon : <WifiIcon />,
        }, 
        {
          name: "cctv",
          icon : <VideocamIcon />,
        }
      ]
    
    },
    {
      name: "Hostel 2",
      gender: <ImMan />,
      prize: 6000,
    },
    {
      name: "Hostel 3",
      gender: <ImMan />,
      prize: 6000,
    },
    {
      name: "Hostel 4",
      gender: <ImWoman/>,
      prize: 6000,
    },
  ], action) => {
    switch(action.type){
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
  }

  export default HostelsReducers;