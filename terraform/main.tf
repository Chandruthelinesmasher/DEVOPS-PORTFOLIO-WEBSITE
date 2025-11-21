# VPC Module
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.12.0"

  name = "${var.project_name}-vpc"
  cidr = "10.0.0.0/16"

  azs             = [for i in range(2) : "${var.aws_region}${i + 1}"]
  public_subnets  = [for i in range(2) : "10.0.${i}.0/24"]
  private_subnets = [for i in range(2) : "10.0.${i + 10}.0/24"]

  enable_nat_gateway   = true
  single_nat_gateway   = true
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "${var.project_name}-vpc"
  }
}

# EKS Cluster Module
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "20.17.0"

  cluster_name    = "${var.project_name}-cluster"
  cluster_version = "1.30"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  # Enable OIDC for IRSA
  enable_irsa = true

  # Managed Node Group
  node_groups = {
    general = {
      desired_capacity = 2
      max_capacity     = 3
      min_capacity     = 1

      instance_types = ["t3.medium"]
      capacity_type  = "ON_DEMAND"

      k8s_labels = {
        "node-group" = "general"
      }

      additional_tags = {
        "Name" = "${var.project_name}-node"
      }
    }
  }

  cluster_endpoint_private_access = true
  cluster_endpoint_public_access  = true

  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}