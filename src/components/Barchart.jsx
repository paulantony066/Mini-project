'use client';

import {
  BarChart,
  Bar,
  XAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: 'Jan',
    revenue: 4000,
    profit: 2400,
  },
  {
    name: 'Feb',
    revenue: 3000,
    profit: 1398,
  },
  {
    name: 'Mar',
    revenue: 9800,
    profit: 2000,
  },
  {
    name: 'Apr',
    revenue: 3908,
    profit: 2780,
  },
  {
    name: 'May',
    revenue: 4800,
    profit: 1890,
  },
  {
    name: 'Jun',
    revenue: 3800,
    profit: 2390,
  },
];

const Barchart = () => {
    return (
        <div className="border-2 border-gray-800 rounded-lg p-3 pb-8  h-64 w-[90%]">
        <h1>Task completion rate</h1>
        <h1>Jun 21 - Jun 25</h1>
        
        <ResponsiveContainer width="85%" height="100%">
        <BarChart
          width={100}
          height={100}
          data={salesData}
          margin={{
            left: 10,
            top: 20,
            right: 800,
            bottom: 20,
          }}
        >
          <XAxis dataKey="name" axisLine={false} tick={{ fill: "white" }}   />
          <Bar dataKey="revenue" fill="#2563eb" barSize={20} stroke="none" 
            strokeWidth={0}  />
        </BarChart>
      </ResponsiveContainer>
 </div>
  );
};

export default Barchart;
