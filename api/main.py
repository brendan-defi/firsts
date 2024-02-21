from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
