locals {
  # Remove all characters that aren't alphanumeric, dash, underscore, parentheses, or period
  project_clean = lower(replace(var.project_name, "/[^a-zA-Z0-9-_().]/", "-"))
}

resource "azurerm_resource_group" "rg" {
  name     = "${local.project_clean}-rg"
  location = var.location
}