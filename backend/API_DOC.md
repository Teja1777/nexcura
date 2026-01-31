# Smart Hospital Queue – Backend API

Base URL:
http://localhost:5050/api

---

## 1. Generate Token
URL:
POST /token

Description:
Generates a new token for patient and returns estimated waiting time.

Response:
{
  "token": 3,
  "estimatedWaitTime": "10 minutes"
}

---

## 2. Get Queue Status
URL:
GET /queue

Description:
Returns current token being served and waiting queue.

Response:
{
  "currentToken": 1,
  "waitingQueue": [2,3,4],
  "totalWaiting": 3
}

---

## 3. Call Next Patient (Doctor/Admin)
URL:
POST /next

Description:
Moves queue to next patient.

Response:
{
  "message": "Next patient called",
  "currentToken": 2
}