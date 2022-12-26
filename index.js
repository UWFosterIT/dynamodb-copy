/* eslint-disable sort-keys */
/* eslint-disable no-inline-comments */
const copy = require('copy-dynamodb-table').copy;

const globalAWSConfig = { // AWS Configuration object http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: 'eu-west-1'
};

const sourceAWSConfig = { region: 'us-west-2' };

const destinationAWSConfig = { region: 'us-west-1' };

function promiseCopy(data) {
  return new Promise((resolve, reject) => {
    copy(data, function (err, result) {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}

(async () => {
  await promiseCopy({
    config: globalAWSConfig,
    source: {
      tableName: 'mbaPreRegRanked-prod', // required
      config: sourceAWSConfig // optional , leave blank to use globalAWSConfig
    },
    destination: {
      tableName: 'mbaPreRegRanked-gabugabu', // required
      config: destinationAWSConfig // optional , leave blank to use globalAWSConfig
    },
    log: true, // default false
    create: true // create destination table if not exist
  });
})();