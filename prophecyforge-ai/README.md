📘 ProphecyForge AI – Serverless Script Generation Engine (MVP)

AI-powered faceless YouTube content engine for prophecy / mythology / scripture-style storytelling.

🌟 Overview

ProphecyForge AI is a serverless SaaS engine that receives a topic from the user and generates:

A structured documentary script (intro, body, outro)

A YouTube-style narration format

A thumbnail text idea

A future version will generate images + audio + full video

All assets stored automatically to S3

The stack is production-ready, fully serverless, low-cost, and scalable.

🏗️ Architecture (MVP)

✔ Frontend (React + Vite) → Hosted on S3 + CloudFront
✔ Backend (Node.js AWS Lambda) → Behind API Gateway
✔ Storage → S3 bucket for generated scripts
✔ IaC → Terraform
✔ CI/CD → GitHub (ready for Actions integration)

End-to-end flow:

CloudFront ➝ S3 (UI Hosting) ➝ API Gateway ➝ Lambda ➝ JSON Response

🚀 Live Endpoints
Frontend (CloudFront URL)

🔗 https://d1m7lss6wjz7ma.cloudfront.net/

Backend (API Gateway URL)

🔗 https://0zduspwulb.execute-api.us-east-1.amazonaws.com/

Sample Healthy Response
{
  "status": "ok",
  "service": "prophecyforge-backend",
  "message": "ProphecyForge AI backend is alive"
}

🧩 Tech Stack
Frontend

React (Vite)

Hosted on AWS S3 + CloudFront

Uses Vite .env → VITE_API_URL

Backend

Node.js 18 Lambda function

Lightweight single-file logic (index.js)

CORS enabled (API Gateway)

Infrastructure

AWS S3 (static hosting + storage)

AWS Lambda

AWS API Gateway (HTTP API)

AWS CloudFront CDN

IAM roles & permissions

Terraform (IaC)

CI/CD

GitHub Actions (future step)

Automatic deploy pipeline planned

📁 Repo Structure
prophecyforge-ai/
├── frontend/      # React (Vite) UI
├── backend/       # Node.js Lambda function
└── infra/         # Terraform for AWS resources

💻 Local Development
1️⃣ Install deps (frontend)
cd frontend
npm install

2️⃣ Build
npm run build

3️⃣ Deploy to S3
aws s3 sync dist/ s3://prophecyforge-ai-frontend-183376096120 --delete


CloudFront auto-invalidates after upload.

🧪 End-to-End Test (Working)
UI Test

Enter anything → click Send to Backend

You will receive:

{
  "status": "ok",
  "service": "prophecyforge-backend",
  "message": "ProphecyForge AI backend is alive"
}

Curl Test
curl -i https://0zduspwulb.execute-api.us-east-1.amazonaws.com/

📸 Screenshots
1. Live UI (CloudFront)

(Replace later with your real screenshot)


2. Lambda JSON response

(Replace later with your real screenshot)


🔐 IaC (Terraform)

Planned resources:

S3 bucket (frontend)

CloudFront distribution

API Gateway

Lambda function + permissions

Outputs (CloudFront domain + API URL)

Terraform will also lock your project to AWS so anyone can deploy identical infra.

🏁 Status (MVP)
Component	Status
S3 hosting	✅
CloudFront setup	✅
Lambda backend	✅
API Gateway connection	✅
CORS fix	✅
UI → API end-to-end working	✅
Terraform lock-in	🔜 Next
CI/CD	🔜 Future
AI generation engine	🔜 Future
📌 Next Steps

Add Terraform outputs (CloudFront + API URL)

Add GitHub Actions pipeline

Add real AI logic (OpenAI / Claude)

Add script-to-audio + image generation

Add full automated faceless YouTube video pipeline

💬 Author

Uwem Sunday Udo (ashNikov)
Aspiring DevSecOps & Cloud Engineer 🚀
