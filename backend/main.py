from fastapi import FastAPI
import models
from database import engine
from router import person, personStatus
# from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

app.include_router(personStatus.router)

app.include_router(person.router)
