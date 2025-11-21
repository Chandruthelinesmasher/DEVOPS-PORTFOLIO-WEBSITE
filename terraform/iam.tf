# Policy to allow EKS nodes to pull from ECR
resource "aws_iam_policy" "ecr_readonly" {
  name        = "${var.project_name}-ecr-readonly"
  description = "Allow EKS nodes to pull images from ECR"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage"
      ]
      Resource = "*"
    }]
  })
}

# Attach policy to EKS node group role
resource "aws_iam_role_policy_attachment" "ecr_readonly" {
  policy_arn = aws_iam_policy.ecr_readonly.arn
  role       = module.eks.node_groups["general"].iam_role_name
}