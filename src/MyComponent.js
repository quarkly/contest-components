import React from "react";
import atomize from "@quarkly/atomize";
// some component
const ComponentWithYourCustomLogic = props => (
  <div {...props}>Hi there! 2 + 2 = {2 + 2}</div>
);

export default atomize(ComponentWithYourCustomLogic)(
  {
    effects: { hover: ":hover" },
    description: {
      en: "Some component description"
    },
    propInfo: {
      src: {
        control: "image",
        description: {
          en: "Some props description"
        }
      },
      alt: {
        type: "string",
        description: {
          en: "Some props description"
        }
      },
      title: {
        type: "string",
        description: {
          en: "Some props description"
        }
      }
    }
  }, // configuration
  {
    // default props
    cursor: "pointer",
    bgc: "--light",
    "sm-bgc": "--indigo",
    "lg-bgc": "--secondary",
    "md-bgc": "--red",
    "hover-bgc": "--darkL2",
    height: "--cmp-box-height-default",
    "hover-height": "50vh",
    "hover-box-shadow": "--xxl",
    transition: "--backgroundInOut, --heightInOut",
    border: "--border-dark"
  }
);
