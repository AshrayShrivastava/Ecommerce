from sqlalchemy import Column, Integer, ARRAY, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base

base_order = declarative_base()

class Order(base_order):
    __tablename__ = 'order'
    order_id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    items = Column(ARRAY(Integer))
    total_price = Column(Integer)
    placed_at = Column(TIMESTAMP)