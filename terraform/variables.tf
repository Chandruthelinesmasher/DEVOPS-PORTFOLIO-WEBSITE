variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name prefix (used for naming resources)"
  type        = string
  default     = "portfolio-website"
}

variable "environment" {
  description = "Environment name (e.g., prod, staging)"
  type        = string
  default     = "prod"
}

# Optional: If you want to use remote state with S3
variable "tf_state_bucket" {
  description = "S3 bucket name for Terraform state (optional)"
  type        = string
  default     = ""
}

variable "tf_state_key" {
  description = "S3 key for Terraform state file (optional)"
  type        = string
  default     = "portfolio-website.tfstate"
}
variable "tf_state_key" {
  description = "S3 key for Terraform state file"
  type        = string
  default     = "portfolio-website.tfstate"
}

variable "tf_state_bucket" {
  description = "S3 bucket name for Terraform state (optional, auto-generated if empty)"
  type        = string
  default     = ""
}