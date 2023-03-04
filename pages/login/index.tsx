import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
interface FormRegister {
  userName: string;
  birth: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
let defaultValues: FormRegister = {
  email: "",
  password: "",
  userName: "",
  birth: "",
  phone: "",
  passwordConfirmation: "",
};

export const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  background-color: #fff;
`;
export const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 0 2px #a9a8a83a;
`;

type Props = {};
function formatDate(date: any) {
  return new Date(date).toLocaleDateString();
}
const LoginPage = (props: Props) => {
  // VAlidateForm
  const schema = yup.object().shape(
    {
      email: yup
        .string().trim()
        .email("Trường này không phải Email")
        .required("Yêu cầu buộc nhập trường này"),
      userName: yup
        .string()
        .required("Yêu cầu buộc nhập trường này").trim()
        .min(3, "Nhập ít nhất 3 kí tự")
        .matches(
          /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/,
          "Trường này không được chứa kí tự số"
        ),
      password: yup
        .string().trim()
        .required("Yêu cầu buộc nhập trường này")
        .min(5, "Nhập ít nhất 5 kí tự"),
      passwordConfirmation: yup
        .string().trim()
        .required("Mật khẩu không trùng khớp")
        .oneOf([yup.ref("password")], "Mật khẩu không trùng khớp"),
      birth: yup.string().when("birth", (val: any, schema) => {
        if (val?.toString().replace(/^\s+|\s+$/gm, "").length > 0) {
          return yup.date().typeError("Không đúng định dạng Ngày tháng năm");
        } else {
          return yup.string().notRequired();
        }
      }),

      phone: yup.string().trim().when("phone", (val: any, schema) => {
        if (val?.toString().replace(/^\s+|\s+$/gm, "").length > 0) {
          return yup
            .string()
            .min(5, "Nhập ít nhất 10 kí tự số")
            .matches(/^-?\d+\.?\d*$/, "Không chứa kí tự chữ");
        } else {
          return yup.string().notRequired();
        }
      }),
    },
    [
      ["birth", "birth"],
      ["phone", "phone"],
    ]
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormRegister) => {
    console.log(data, "data");
    toast("🦄 Đăng kí thành công", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <StyledContainer>
      <StyledLoginContainer>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="userName"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  autoFocus
                  label="Họ và tên "
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.userName)}
                  placeholder="Nhập Họ và Tên (Bắt buộc)"
                />
              )}
            />
            {errors.userName && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.userName.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="birth"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label="Ngày sinh"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.birth)}
                  placeholder="Nhập ngày sinh (Không bắt buộc)"
                />
              )}
            />
            {errors.birth && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.birth.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="phone"
              control={control}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label="Số điện thoại"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.phone)}
                  placeholder="Nhập Số điện thoại (Không bắt buộc)"
                />
              )}
            />
            {errors.phone && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.phone.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextField
                  label="Email"
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.email)}
                  placeholder="admin@materialize.com"
                />
              )}
            />
            {errors.email && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <InputLabel
              htmlFor="auth-login-v2-password"
              error={Boolean(errors.password)}
            >
              Mật khẩu
            </InputLabel>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <OutlinedInput
                  value={value}
                  onBlur={onBlur}
                  label="Password"
                  onChange={onChange}
                  id="auth-login-v2-password"
                  error={Boolean(errors.password)}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.password && (
              <FormHelperText sx={{ color: "error.main" }} id="">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <InputLabel
              htmlFor="auth-login-v2-password"
              error={Boolean(errors.passwordConfirmation)}
            >
              Nhập lại mật khẩu
            </InputLabel>
            <Controller
              name="passwordConfirmation"
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <OutlinedInput
                  value={value}
                  onBlur={onBlur}
                  label="passwordConfirmation"
                  onChange={onChange}
                  id="auth-login-v2-password"
                  error={Boolean(errors.passwordConfirmation)}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
            {errors.passwordConfirmation && (
              <FormHelperText sx={{ color: "error.main" }} id="">
                {errors.passwordConfirmation.message}
              </FormHelperText>
            )}
          </FormControl>
          <Button fullWidth type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </StyledLoginContainer>
    </StyledContainer>
  );
};

export default LoginPage;
