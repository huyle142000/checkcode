import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import styled from "styled-components";
import useDecentralization from "./useDecentralization";
type Props = {};

let a = { create: "true" };
const DecentralizationPage = (props: Props) => {
  let {
    IconCheck,
    IconChecked,
    arrPermission,
    handleChange,
    handleSubmit,
    handleCheckAll,
  } = useDecentralization();
  return (
    <Box>
      <h4>Phân quyền chức năng</h4>
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          border: "1px solid #ccc",
        }}
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <FormControl fullWidth sx={{ mb: 2 }}>
            {arrPermission.map((permission, index) => {
              return (
                <Grid
                  container
                  key={index}
                  justifyContent="flex-start"
                  alignItems="center"
                  display="flex"
                  p={3}
                >
                  <Grid item xs={3}>
                    <p>Quản lí {permission.subject}</p>
                  </Grid>
                  <Grid item xs={8}>
                    <Box textAlign="left">
                      {permission.action.map((action: any, i) => {
                        let keyOfAction: any = Object.keys(action)[0];
                        return (
                          <Checkbox
                            key={i}
                            onChange={(e) => handleChange(e)}
                            name={permission.subject}
                            value={keyOfAction}
                            checked={action[keyOfAction]}
                            icon={IconCheck(keyOfAction)}
                            checkedIcon={IconChecked(keyOfAction)}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        );
                      })}
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <Checkbox
                      name={permission.subject}
                      onChange={(e) => {
                        handleCheckAll(e);
                      }}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </FormControl>
          <Box textAlign="center">
            <Button
              type="submit"
              sx={{
                color: "white",
                backgroundColor: "darkblue",
                "&:hover": {
                  backgroundColor: "darkblue",
                  opacity: 0.8,
                },
              }}
            >
              Xác nhận
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default DecentralizationPage;


// 