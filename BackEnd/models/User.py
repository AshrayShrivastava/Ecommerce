from sqlalchemy import Column, String, Integer, ARRAY, LargeBinary, PickleType
from sqlalchemy.ext.declarative import declarative_base  
from sqlalchemy import UniqueConstraint

base_user = declarative_base()

class User(base_user):
    __tablename__ = 'user'
    user_id = Column(Integer, primary_key=True)
    user_name = Column(String)
    email = Column(String)
    password = Column(LargeBinary)
    first_name = Column(String)
    last_name = Column(String)
    role = Column(String)
    cart = Column(PickleType)
    salt = Column(LargeBinary)
    
    UniqueConstraint(user_name, email)