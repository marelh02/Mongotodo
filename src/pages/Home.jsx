import { useState } from "react";
import { Grid, Header, Label, Statistic } from "semantic-ui-react";
import { getCurrentUser, getStats } from "../services";
import BarChartComponent from "../components/Barchart";
import { LineChart, ResponsiveContainer } from "recharts";
import LineChartComponent from "../components/Linechart";

const stats=await getStats()
const u=await getCurrentUser()

export default function Home(){
    const [l,setL]=useState([{"type":"To do","num":stats.todo,"color":"red"},
    {"type":"Doing","num":stats.doing,"color":"yellow"},
    {"type":"Done","num":stats.done,"color":"green"}])
    // console.log(l);
    // console.log(getCurrentUser());
    return(<>
        <Grid centered>
        <Grid.Row centered columns={1}>
      <Grid.Column textAlign="center">
      <Statistic size="huge">
      <Statistic.Value text>
        {u.nomComplet}
      </Statistic.Value>
      <Statistic.Label>{Object.values(stats).reduce((acc, val) => acc + val)||0} tasks</Statistic.Label>
    </Statistic>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={1}>
      <Header as={"h2"}>Tasks status bar chart</Header>
      <div className="centerer"><BarChartComponent data={stats}/></div>
    </Grid.Row>
    {/* <Grid.Row centered columns={1}>
      <Header as={"h2"}>Tasks statstic line chart</Header>
      <div className="centerer"><LineChartComponent/></div>
    </Grid.Row> */}
        </Grid>
        </>)
}