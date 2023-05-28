import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const todoData = [
  { date: new Date('2023-05-27'), tasks: 1 },
  // add more data here
];

const doingData = [
  { date: new Date('2023-05-27'), tasks: 2 },
  // add more data here
];

const doneData = [
  { date: new Date('2023-05-27'), tasks: 3 },
  // add more data here
];

export default function LineChartComponent(){
  return (
    <LineChart width={600} height={300}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="tasks" stroke="#8884d8" />
    </LineChart>
  );
};