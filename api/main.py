import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from utils.constants import CORS_HOST
from routers import users, children


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[CORS_HOST],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users.router, tags=["Users"])
app.include_router(children.router, tags=["Children"])
