import { Dimensions } from 'react-native';
import { ResponsiveSize } from './Responsive';
import { Colors } from './Color';
export const WindowWidth = Dimensions.get('window').width;
export const WindowHeight = Dimensions.get('window').height;

export const theme_colour = '#102E60';
export const default_language = 'en';
export const appVersion = '1.0';



export const buttonTextSize = ResponsiveSize(18);
export const titleTextSize = ResponsiveSize(16);
export const statusTextSize = ResponsiveSize(14);
export const descriptionTextSize = ResponsiveSize(14);
export const headingTextSize = ResponsiveSize(18);
export const inputTextSize = ResponsiveSize(16);
export const numberTextSize = ResponsiveSize(14);



export const formatAMPM = (date) => {
  let dateArr = date.split(':')
  console.log("adtearry", dateArr)

  let hours = dateArr[0];
  let minutes = dateArr[1]
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0' + hours : hours;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;

}

export const searchBox = {
  width: (WindowWidth * 90) / 100,
  alignSelf: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderColor: Colors.borderColor,
  borderRadius: 15,
  paddingVertical: (WindowWidth * 3.5) / 100,
  backgroundColor: Colors.lightGray,
  alignItems: 'center'
}

export const announcementIcon = {
  width: WindowWidth * 25 / 100,
  height: WindowHeight * 25 / 100,
  alignSelf: "center",
 
}
export const Icon = {
  width: (WindowWidth * 4) / 100,
  height: (WindowWidth * 4) / 100,
}