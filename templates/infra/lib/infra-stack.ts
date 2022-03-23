import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_cloudfront as cloudfront, aws_s3, aws_cloudfront_origins as origins} from 'aws-cdk-lib';

export default class {{project_name|to_camel}}Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new aws_s3.Bucket(this, '{{project_name|to_camel}}-main-bucket');

    new cloudfront.Distribution(this, '{{project_name|to_camel}}-cloudfront-dist', {
      defaultBehavior: { 
        origin: new origins.S3Origin(bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html'
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html'
        }
      ]
    });
  }
}
