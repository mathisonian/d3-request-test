
import { json } from 'd3-request';

json('/data/my-data.json', (err, data) => {
  console.log(err, data);
});

