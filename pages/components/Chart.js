import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ResponsiveContainer } from 'recharts';
import { Grid, Paper, Select, MenuItem} from '@mui/material';
import Title from './Title';
import ViewCoin from './ViewCoin';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Chart({xs, md, lg}) {

  return (
    <Grid container spacing={3}>
      <Grid item xs={xs} md={md} lg={lg}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <ResponsiveContainer width="100%" height="100%" >
            <ViewCoin/>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>

  );
}

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import { Grid, Paper, Select, MenuItem} from '@mui/material';
// import Title from './Title';
// import ViewCoin from './ViewCoin';

// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

// export default function Chart({xs, md, lg}) {

//   return (
//     <Grid item xs={xs} md={md} lg={lg}>
//       <Paper
//         sx={{
//           p: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100%',
//         }}
//       >
//         <Title>Today </Title>
//          <ResponsiveContainer width="100%" height="100%" >
//           {/* <LineChart
//             data={data}
//             margin={{
//               top: 16,
//               right: 16,
//               bottom: 0,
//               left: 24,
//             }}
//           >
//             <XAxis
//               dataKey="time"
//               stroke={theme.palette.text.secondary}
//               style={theme.typography.body2}
//             />
//             <YAxis
//               stroke={theme.palette.text.secondary}
//               style={theme.typography.body2}
//             >
//               <Label
//                 angle={270}
//                 position="left"
//                 style={{
//                   textAnchor: 'middle',
//                   fill: theme.palette.text.primary,
//                   ...theme.typography.body1,
//                 }}
//               >
//                 Sales ($)
//               </Label>
//             </YAxis>
//             <Line
//               isAnimationActive={false}
//               type="monotone"
//               dataKey="amount"
//               stroke={theme.palette.primary.main}
//               dot={false}
//             />
//           </LineChart> */}
//           <ViewCoin/>
//         </ResponsiveContainer>
//       </Paper>
//     </Grid>

//   );
// }
