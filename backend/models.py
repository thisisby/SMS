from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.sql.expression import column
from sqlalchemy.sql.schema import ForeignKey
from database import Base



class Person(Base):
    __tablename__ = 'persons'
    id = Column(Integer, primary_key=True, index=True)
    role = Column(String)
    card_id = Column(String)
    full_name = Column(String)
    phone_number = Column(String)


class PersonStatus(Base):
    __tablename__ = 'persons_status'
    id = Column(Integer, primary_key=True, index=True)
    role = Column(String)
    card_id = Column(String)
    full_name = Column(String)
    phone_number = Column(String)
    status = Column(String)
    leave = Column(String)
    come = Column(String)