# Create S3 bucket for Terraform state
resource "aws_s3_bucket" "tf_state" {
  bucket = "${var.project_name}-tf-state-${var.aws_region}"

  force_destroy = true  # Only for dev/testing. Remove in prod!

  tags = {
    Name        = "${var.project_name}-tf-state-bucket"
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

resource "aws_s3_bucket_versioning" "tf_state" {
  bucket = aws_s3_bucket.tf_state.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "tf_state" {
  bucket = aws_s3_bucket.tf_state.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Create DynamoDB table for state locking
resource "aws_dynamodb_table" "tf_state_lock" {
  name           = "${var.project_name}-tf-state-lock"
  billing_mode   = "PAY_PER_REQUEST"  # Serverless (no provisioned capacity)
  hash_key       = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }

  tags = {
    Name        = "${var.project_name}-tf-state-lock-table"
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

# Configure Terraform backend to use these resources
terraform {
  backend "s3" {
    bucket         = aws_s3_bucket.tf_state.bucket
    key            = var.tf_state_key
    region         = var.aws_region
    dynamodb_table = aws_dynamodb_table.tf_state_lock.name
    encrypt        = true
  }
}