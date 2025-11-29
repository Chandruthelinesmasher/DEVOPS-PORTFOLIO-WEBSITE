resource "azurerm_kubernetes_cluster" "aks" {
  name                = "${var.project_name}-aks"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  dns_prefix = "${var.project_name}-dns"

  default_node_pool {
    name                = "default"
    node_count          = 1
    vm_size             = "Standard_DC2s_v3"
    type                = "VirtualMachineScaleSets"
    vnet_subnet_id      = azurerm_subnet.private[0].id
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin     = "azure"
    network_policy     = "azure"
    service_cidr       = "10.100.0.0/16"
    dns_service_ip     = "10.100.0.10"
    # Remove docker_bridge_cidr - deprecated and not needed
    # Remove pod_cidr - not compatible with network_plugin = "azure"
  }
}