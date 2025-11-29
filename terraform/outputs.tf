output "acr_name" {
  description = "ACR Name"
  value       = azurerm_container_registry.acr.name
}

output "acr_login_server" {
  description = "ACR Login Server"
  value       = azurerm_container_registry.acr.login_server
}

output "aks_cluster_name" {
  description = "AKS Cluster Name"
  value       = azurerm_kubernetes_cluster.aks.name
}

output "aks_rg" {
  description = "AKS Resource Group"
  value       = azurerm_resource_group.rg.name
}
