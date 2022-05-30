import Head from "next/head";
import NextLink from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import { UpdateBookProfile } from "../components/updatebook/update-book-profile";
import { UpdateBookDetails } from "../components/updatebook/update-book-details";
import { DashboardLayout } from "../components/dashboard-layout";

const Account = () => (
  <>
    <Head>
      <title>KNU-BookStore</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          책 정보
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <UpdateBookProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <UpdateBookDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
