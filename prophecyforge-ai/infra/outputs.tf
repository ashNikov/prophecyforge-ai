output "http_api_endpoint" {
  description = "Base URL of the ProphecyForge HTTP API"
  value       = aws_apigatewayv2_api.http_api.api_endpoint
}

output "frontend_website_endpoint" {
  description = "Public website endpoint for the React frontend"
  value       = aws_s3_bucket_website_configuration.frontend.website_endpoint
}
