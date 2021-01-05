const copy = require('copy-dynamodb-table').copy

const globalAWSConfig = { // AWS Configuration object http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  accessKeyId: 'AKID',
  secretAccessKey: 'SECRET',
  region: 'eu-west-1'
}

const sourceAWSConfig = {
  region: 'us-west-2'
}

const destinationAWSConfig = {
  region: 'us-east-1' // support cross zone copying
}

copy({
    config: globalAWSConfig,
    source: {
      tableName: 'FosterStudent', // required
      config: sourceAWSConfig // optional , leave blank to use globalAWSConfig
    },
    destination: {
      tableName: 'FosterStudent', // required
      config: destinationAWSConfig // optional , leave blank to use globalAWSConfig
    },
    log: true,// default false
    create : false // create destination table if not exist
  },
  function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log(result)
  })