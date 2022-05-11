from typing import Optional
from pydantic import BaseModel


class Person(BaseModel):
    class Config():
        orm_mode = True
    id: int
    role: Optional[str]
    card_id: str
    full_name: str
    phone_number: int

class PersonStatus(BaseModel):
    class Config():
        orm_mode = True
    id: int
    role: Optional[str]
    card_id: str
    full_name: str
    phone_number: int
    status: str
    leave: Optional[str] = None
    come: Optional[str] = None

class PersonShow(BaseModel):
    class Config():
        orm_mode = True
    role: Optional[str]
    card_id: str
    full_name: str
    phone_number: int

class PersonStatusShow(BaseModel):
    class Config():
        orm_mode = True
    role: Optional[str]
    card_id: str
    full_name: str
    phone_number: int
    status: str
    leave: Optional[str] = None
    come: Optional[str] = None