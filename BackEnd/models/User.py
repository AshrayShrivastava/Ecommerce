from sqlalchemy import Column, String, Integer, ARRAY
from sqlalchemy.ext.declarative import declarative_base  
from sqlalchemy import UniqueConstraint

base_user = declarative_base()

class User(base_user):
    __tablename__ = 'user'
    user_id = Column(Integer, primary_key=True)
    user_name = Column(String)
    email = Column(String)
    password = Column(String)
    first_name = Column(String)
    last_name = Column(String)
    role = Column(String)
    cart = Column(ARRAY(Integer))
    salt = Column(String)
    
    UniqueConstraint(user_name, email)