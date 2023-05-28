import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function BarChartComponent({data}){
  const filledData = [
    { name: 'todo', value:data?.todo, fill:"red" },
    { name: 'doing', value:data?.doing, fill:"yellow" },
    { name: 'done', value:data?.done, fill:"green" },
  ];
  return (
    <BarChart width={600} height={300} data={filledData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="fill" />
    </BarChart>
  );
};
