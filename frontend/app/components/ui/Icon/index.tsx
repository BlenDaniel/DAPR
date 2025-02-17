import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

/* add any additional icon to the library */
library.add(
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane
);

export type IconProps = FontAwesomeIconProps["icon"];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => (
  <FontAwesomeIcon {...props} />
);

export default Icon;
