resource "azurerm_kubernetes_cluster" "aks" {
  name                = "${var.project_name}-aks"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  dns_prefix = "${var.project_name}-dns"

  default_node_pool {
    name                = "default"
    node_count          = 1
    vm_size             = "Standard_DC2s_v3"   # ✅ allowed
    type                = "VirtualMachineScaleSets"
    vnet_subnet_id      = azurerm_subnet.private[0].id
    orchestrator_version = "1.29.0"
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin = "azure"
    network_policy = "azure"
  }
}
