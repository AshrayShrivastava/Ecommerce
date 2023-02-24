from sqlalchemy import Column, Integer, String, TIMESTAMP, PickleType
from sqlalchemy.ext.declarative import declarative_base

base_coupon = declarative_base()

class Coupon(base_coupon):
    __tablename__ = 'coupon'
    coupon_id = Column(Integer, primary_key=True)
    coupon_code = Column(String)
    user_id = Column(Integer)