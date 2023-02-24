from sqlalchemy import Column, Integer, String, TIMESTAMP, PickleType
from sqlalchemy.ext.declarative import declarative_base

base_order = declarative_base()

class Order(base_order):
    __tablename__ = 'order'
    order_id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    items = Column(PickleType)
    total_price = Column(Integer)
    coupon_code = Column(String)
    placed_at = Column(TIMESTAMP)