import React from 'react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

// ==========================
// Experience Data
// ==========================
const experienceData = [
  {
    id: 1,
    role: 'DevOps Engineer',
    company: 'HCLTech',
    period: 'July 2022 – Present',
    achievements: [
      'Designed and implemented end-to-end CI/CD pipelines using Azure DevOps (YAML & Classic), Jenkins, and GitHub Actions for .NET, Java, and Node.js applications — reducing release cycles from weekly to daily.',
      'Automated infrastructure provisioning with Terraform and ARM templates for AKS, App Services, and Azure Storage, enabling consistent, version-controlled deployments.',
      'Managed Azure Kubernetes Service (AKS) clusters, implemented autoscaling (HPA), and deployed Dockerized microservices via Azure Container Registry (ACR).',
      'Developed Helm charts to standardize configuration management across Dev, QA, and Production environments, improving deployment consistency by 40%.',
      'Configured Azure Repos with branch policies and integrated SonarQube and Trivy in pipelines to enforce code quality and security standards, achieving 35% higher compliance.',
      'Set up Azure Monitor, Log Analytics, and Application Insights dashboards for proactive monitoring, improving performance visibility and reducing downtime by 40%.',
      'Containerized legacy monolithic applications into Docker-based microservices, reducing infrastructure costs and resource utilization by 25%.',
      'Collaborated cross-functionally with development and infrastructure teams to troubleshoot build and deployment issues, driving 99.9% uptime and reducing deployment failures by 60%.',
    ],
  },
  {
    id: 2,
    role: 'TechBee Trainee',
    company: 'HCLTech',
    period: 'July 2021 – July 2022',
    achievements: [
      'Completed one-year intensive training in Cloud and DevOps fundamentals as part of HCLTech’s TechBee program.',
      'Gained hands-on experience with Microsoft Azure and AWS core services including Compute, Storage, Networking, and IAM.',
      'Developed foundational skills in Linux system administration, Bash scripting, and automation workflows.',
      'Learned programming fundamentals using Python for automation and data handling.',
      'Worked with Git for version control and Docker for containerization of applications.',
      'Collaborated in lab-based projects simulating real-world DevOps environments, reinforcing CI/CD and cloud deployment concepts.',
    ],
  },
];

// ==========================
// Certifications Data (updated)
// ==========================
export const certificationsData = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_aws-cloudcomputing-awscertified-activity-7256139346573942785-f4Mq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1UrjsBd781c5ps2QWqkXx17x-L4kLjJ2M',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_im-excited-to-announce-my-aws-cloud-practioner-activity-7129371155634782210-GQeZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1UrjsBd781c5ps2QWqkXx17x-L4kLjJ2M',
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_cloud-microsoftcertified-activity-7076547224935043072-QF6g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1UrjsBd781c5ps2QWqkXx17x-L4kLjJ2M',
  },
  {
    name: 'Microsoft Certified: Azure Network Engineer Associate',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_hi-connections-im-glad-to-share-with-activity-7086720826141540352-6aYF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1UrjsBd781c5ps2QWqkXx17x-L4kLjJ2M',
  },
  {
    name: 'Microsoft Certified: Azure DevOps Engineer Expert',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_hi-connections-i-am-excited-to-share-with-activity-7162070163553464320-XLao?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1UrjsBd781c5ps2QWqkXx17x-L4kLjJ2M',
  },
  {
    name: 'GitHub Actions Certified',
    link: 'https://www.linkedin.com/posts/chandru-k-cloud-20-conqueror03_githubactions-certification-continuousintegration-activity-7222942368377843713-3fQC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1UrjsBd781c5ps2QWqkXx17x-L4kLjJ2M',
  },
];

// ==========================
// Experience Component
// ==========================
export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Work Experience</SectionTitle>

        <div className="space-y-8">
          {experienceData.map((job) => (
            <Card key={job.id} hover={false}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{job.role}</h3>
                  <p className="text-purple-400">{job.company}</p>
                  <p className="text-gray-400 text-sm">{job.period}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-green-400 mt-1">▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="mt-12" hover={false}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {certificationsData.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <GraduationCap size={18} className="text-yellow-400" />
                {cert.name}
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
