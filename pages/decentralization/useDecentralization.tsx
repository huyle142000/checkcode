import React, { ChangeEvent, FormEvent, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import BlockIcon from "@mui/icons-material/Block";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import styled from "styled-components";
const StyledVisibilityIcon = styled(VisibilityIcon)`
  color: #11ae11;
`;
const StyledControlPointIcon = styled(ControlPointIcon)`
  color: orange;
`;
const StyledEditIcon = styled(EditIcon)`
  color: blue;
`;
const StyledDeleteIcon = styled(DeleteIcon)`
  color: red;
`;
const StyledBlockIcon = styled(BlockIcon)`
  color: red;
`;
const StyledEqualizerIcon = styled(EqualizerIcon)`
  color: red;
`;
const StyledFindInPageIcon = styled(FindInPageIcon)`
  color: #008e00;
`;
type Props = {};
let initialArr = [
  {
    subject: "user",
    action: [
      { create: false },
      { read: false },
      { update: false },
      { delete: false },
      { statistic: false },
      { lock: false },
    ],
  },
  {
    subject: "order",
    action: [
      { create: false },
      { read: false },
      { update: false },
      { delete: false },
      { statistic: false },
      { payment: false },
    ],
  },
  {
    subject: "plan",
    action: [
      { create: false },
      { read: false },
      { update: false },
      { delete: false },
      { statistic: false },
    ],
  },
  {
    subject: "product",
    action: [
      { create: false },
      { read: false },
      { update: false },
      { delete: false },
    ],
  },
  {
    subject: "customer",
    action: [
      { create: false },
      { read: false },
      { update: false },
      { delete: false },
    ],
  },
  {
    subject: "notification",
    action: [
      { create: false },
      { read: false },
      { update: false },
      { delete: false },
    ],
  },
  {
    subject: "label",
    action: [
      { create: false },
      { read: false },
      { update: false },
      { delete: false },
    ],
  },
  {
    subject: "categories",
    action: [
      { create: false },
      { read: false },
      { update: false },
      { delete: false },
    ],
  },
];

const useDecentralization = () => {
  let [arrPermission, setPermisson] = useState(initialArr);

  //   Change Value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value, name } = event.target;
    let newArrPermission = [...arrPermission];
    newArrPermission = newArrPermission.map((permission) => {
      if (permission.subject === name) {
        permission.action.map((action: any) => {
          let keyOfAction: any = Object.keys(action)[0];
          if (keyOfAction == value) {
            action[value] = !action[value];
          }
        });
        return permission;
      }
      return permission;
    });
    setPermisson(newArrPermission);
  };

  // Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(arrPermission, "arrPermission");
  };
  //    HANLDE checkAll
  const handleCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    let { name, checked } = e.target;
    let newPermission = [...arrPermission];

    newPermission = newPermission.map((permission) => {
      if (permission.subject === name) {
        permission.action.map((action: any) => {
          let keyOfAction: any = Object.keys(action)[0];
          action[keyOfAction] = checked;
        });
        return permission;
      }
      return permission;
    });
    console.log(newPermission, "newPermission");
    setPermisson(newPermission);
  };
  const IconCheck = (value: string) => {
    switch (value) {
      case "create":
        return <ControlPointIcon />;

      case "read":
        return <VisibilityIcon />;

      case "update":
        return <EditIcon />;

      case "delete":
        return <DeleteIcon />;

      case "statistic":
        return <EqualizerIcon />;

      case "lock":
        return <BlockIcon />;

      case "payment":
        return <FindInPageIcon />;

      default:
      // code block
    }
  };
  const IconChecked = (value: string) => {
    switch (value) {
      case "create":
        return <StyledControlPointIcon />;

      case "read":
        return <StyledVisibilityIcon />;

      case "update":
        return <StyledEditIcon />;

      case "delete":
        return <StyledDeleteIcon />;

      case "statistic":
        return <StyledEqualizerIcon />;

      case "lock":
        return <StyledBlockIcon />;

      case "payment":
        return <StyledFindInPageIcon />;
      default:
      // code block
    }
  };
  return {
    IconCheck,
    IconChecked,
    arrPermission,
    handleChange,
    handleSubmit,
    handleCheckAll,
  };
};

export default useDecentralization;
