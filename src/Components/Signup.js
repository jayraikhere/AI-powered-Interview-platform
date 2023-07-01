import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { signup } from "../Api/index";
import { useState } from "react";
import { Navigate, Link} from "react-router-dom";

export default function Signup() {

  const [email, setemail] = useState(false);
  const [pass, setpass] = useState(false);
  const [name, setname] = useState(false);
  const [redirect, setredirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signup({
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name"),
    })
      .then((res) => {
        console.log(res);
        if(res.err)
        console.log(res?.err?.message)
        else
        {setredirect(true)}
      })
  };

  const handleChange = (e) => {
    if (e.target.name === "email" && e.target.value.length > 0) {
      setemail(true);
    }
    else if (e.target.name === "email") setemail(false);

    if (e.target.name === "password" && e.target.value.length > 0) {
      setpass(true);
    }
    else if (e.target.name === "password") setpass(false);

    if (e.target.name === "name" && e.target.value.length > 0) {
      setname(true);
    }
    else if (e.target.name === "name") setpass(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} onChange={handleChange}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            id="name"
            autoComplete="name"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!name || !email || !pass}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Link to="/login" variant="body2">
                {"Already have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {redirect && (
        <Navigate to="/login" replace={true} />
      )}
    </Container>
  );
}