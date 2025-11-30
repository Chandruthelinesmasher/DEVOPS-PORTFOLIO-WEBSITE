locals {
  # Step-by-step sanitization
  project_clean_step1 = replace(var.project_name, " ", "-")
  project_clean_step2 = replace(local.project_clean_step1, "_", "-")
  project_clean_step3 = replace(local.project_clean_step2, "/", "-")

  # Final lowercase sanitized name
  project_clean = lower(local.project_clean_step3)
}


resource "azurerm_resource_group" "rg" {
  name     = "${local.project_clean}-rg"
  location = var.location
}

