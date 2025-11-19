locals {
  project_name = "prophecyforge-ai"
}

resource "aws_s3_bucket" "scripts" {
  bucket = "${local.project_name}-scripts-${data.aws_caller_identity.current.account_id}"

  tags = {
    Name        = "${local.project_name}-scripts"
    Environment = "dev"
    Project     = local.project_name
  }
}

resource "aws_s3_bucket_public_access_block" "scripts_block" {
  bucket = aws_s3_bucket.scripts.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "scripts_versioning" {
  bucket = aws_s3_bucket.scripts.id

  versioning_configuration {
    status = "Enabled"
  }
}
