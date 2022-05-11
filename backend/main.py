from fastapi import FastAPI
import models
from database import engine
from router import person, personStatus

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.include_router(personStatus.router)

app.include_router(person.router)
