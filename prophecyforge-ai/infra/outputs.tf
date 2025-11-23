output "http_api_endpoint" {
  description = "Base URL of the ProphecyForge HTTP API"
  value       = aws_apigatewayv2_api.http_api.api_endpoint
}

output "frontend_website_endpoint" {
  description = "Public website endpoint for the React frontend"
  value       = aws_s3_bucket_website_configuration.frontend.website_endpoint
}

output "api_gateway_url" {
  description = "API Gateway URL (same as http_api_endpoint)"
  value       = aws_apigatewayv2_api.http_api.api_endpoint
}

output "frontend_bucket" {
  description = "Name of the S3 bucket that hosts the frontend"
  value       = aws_s3_bucket.frontend.bucket
}

output "lambda_name" {
  description = "Deployed Lambda function name"
  value       = aws_lambda_function.prophecyforge_backend.function_name
}

