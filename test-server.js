const express = require('express');
const app = express();
app.use(express.static('dist/apps/config-naming-bug-example'));
app.listen(4500);
console.log('listening on port 4500');
