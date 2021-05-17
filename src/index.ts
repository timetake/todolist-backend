import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
var cors = require('cors');

// Start the server
const port = Number(8000);
app.listen(port, () => {
  logger.info('Express server started on port: ' + port);
});
