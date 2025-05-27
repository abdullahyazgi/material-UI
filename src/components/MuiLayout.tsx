import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

export const MuiLayout = () => {
  return (
    <Paper>
      <Stack
        sx={{ border: "1px solid " }}
        // direction= "column-reverse"
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Learn Material UI
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      <Grid container my={4}>
        <Grid>
          <Box bgcolor="primary.light" p={2}>
            item 1
          </Box>
        </Grid>
        <Grid>
          <Box bgcolor="primary.light" p={2}>
            item 2
          </Box>
        </Grid>
        <Grid>
          <Box bgcolor="primary.light" p={2}>
            item 3
          </Box>
        </Grid>
        <Grid>
          <Box bgcolor="primary.light" p={2}>
            item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
