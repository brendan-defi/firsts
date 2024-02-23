from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import users


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users.router, tags=["users"])
