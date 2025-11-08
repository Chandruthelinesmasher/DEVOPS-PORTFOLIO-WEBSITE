import { Code, Cloud, Server, Activity } from 'lucide-react';

export const skillsData = {
  'CI/CD': {
    icon: Code,
    skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD', 'CircleCI']
  },
  'Cloud': {
    icon: Cloud,
    skills: ['AWS', 'Azure', 'GCP', 'Digital Ocean']
  },
  'Containers': {
    icon: Server,
    skills: ['Docker', 'Kubernetes', 'Helm', 'Podman']
  },
  'IaC': {
    icon: Activity,
    skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi']
  },
  'Monitoring': {
    icon: Activity,
    skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic']
  },
  'Scripting': {
    icon: Code,
    skills: ['Python', 'Bash', 'PowerShell', 'Go']
  }
};