variable "project_name" {
  type = string
}

variable "environment" {
  type    = string
  default = "dev"
}

variable "location" {
  type    = string
  default = "eastus"
}
variable "project_name" {
  type = string
  validation {
    condition     = length(var.project_name) >= 3
    error_message = "project_name must be at least 3 characters."
  }
}
