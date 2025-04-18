from fastapi import FastAPI
from dotenv import load_dotenv
import os

from app.database.init_db import init_db

load_dotenv()

app = FastAPI()

@app.on_event("startup")
def startup_event():
    init_db()

@app.get("/")
def read_root():
    return {"message": "Backend is running"}
