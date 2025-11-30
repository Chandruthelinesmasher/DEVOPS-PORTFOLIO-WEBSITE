locals {
  project_clean = lower(
    replace(
      replace(
        replace(
          replace(var.project_name, " ", "-"),
        "_", "-"),
      "/", "-"),
    "-")
  )
}

resource "azurerm_resource_group" "rg" {
  name     = "${local.project_clean}-rg"
  location = var.location
}
