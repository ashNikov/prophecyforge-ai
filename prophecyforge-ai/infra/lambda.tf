data "archive_file" "backend_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../backend"
  output_path = "${path.module}/../build/prophecyforge-backend.zip"
}

resource "aws_lambda_function" "prophecyforge_backend" {
  function_name = "prophecyforge-backend"

  filename         = data.archive_file.backend_zip.output_path
  source_code_hash = data.archive_file.backend_zip.output_base64sha256

  handler = "index.handler"
  runtime = "nodejs18.x"
  role    = aws_iam_role.lambda_exec.arn

  environment {
    variables = {
      # AWS_REGION is reserved in Lambda, so we don't set it here.
      # Lambda will provide AWS_REGION automatically.
      SCRIPTS_BUCKET = aws_s3_bucket.scripts.id
    }
  }

  tags = {
    Project     = "prophecyforge-ai"
    Environment = "dev"
  }
}
