# ProphecyForge AI (Working Title)

AI-powered faceless YouTube content engine for prophecy / mythology / scripture-style storytelling.

## Idea

- User enters a topic (e.g. "Ezekiel's vision", "End-time prophecy", "Angelic encounters")
- Backend calls AI to generate:
  - A structured script (intro, body, outro)
  - A YouTube-style title
  - Thumbnail text idea
- Later versions can:
  - Generate voiceover
  - Attach background video / images

## Tech Stack (MVP)

- Frontend: React (Vite), hosted on AWS S3 + CloudFront
- Backend: AWS Lambda (Node.js) behind API Gateway
- Storage: S3 bucket for generated scripts/assets
- IaC: Terraform in infra/ directory
- CI/CD: GitHub Actions (build + deploy + security scans)

## Repo Layout

- infra/     → Terraform code for AWS resources (Lambda, API Gateway, S3, CloudFront, IAM)
- backend/   → Lambda function (Node.js) that talks to AI API and S3
- frontend/  → React UI for triggering script generation and viewing results
