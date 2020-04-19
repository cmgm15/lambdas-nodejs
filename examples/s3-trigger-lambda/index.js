const AWS = require("aws-sdk");

const s3 = new AWS.S3();

exports.handler = async (event) => {
    const params = {
        Bucket: event.Records[0].s3.bucket.name, 
        Key: event.Records[0].s3.object.key,
    }
    const s3Object = await s3.getObject(params).promise()
    // If file is JSON
    console.log(JSON.parse(s3Object.Body))
    const response = {
        statusCode: 200,
        body: JSON.stringify('Nice!'),
    };
    return response;
};
