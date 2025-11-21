output "cluster_endpoint" {
  value = module.eks.cluster_endpoint
}

output "kubeconfig" {
  description = "kubectl config for connecting to EKS cluster"
  value       = module.eks.kubeconfig
  sensitive   = true
}

output "ecr_repo_url" {
  value = aws_ecr_repository.portfolio.repository_url
}

output "region" {
  value = var.aws_region
}

output "node_group_role_arn" {
  value = module.eks.node_groups["general"].iam_role_arn
}