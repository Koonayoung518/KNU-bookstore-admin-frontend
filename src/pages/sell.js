import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/sell/budget";
import { LatestOrders } from "../components/sell/latest-orders";
import { LatestProducts } from "../components/sell/latest-products";
import { Sales } from "../components/sell/sales";
import { TasksProgress } from "../components/sell/tasks-progress";
import { Money } from "../components/sell/money";
import { TotalCustomers } from "../components/sell/total-customers";
import { TotalProfit } from "../components/sell/total-profit";
import { TrafficByDevice } from "../components/sell/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { creditCard } from "../components/sell/creditcard";

const Dashboard = () => (
  <>
    <Head>
      <title>Dashboard | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={6} sm={6} xs={12}>
            <TotalProfit sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgress />
          </Grid> */}
          {/* <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid> */}
          <Grid item lg={12} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
          <Grid item xl={3} lg={6} sm={6} xs={12}>
            <Money sx={{ height: "100%" }} />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>

          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <creditCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
