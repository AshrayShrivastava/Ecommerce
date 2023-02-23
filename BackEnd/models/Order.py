from sqlalchemy import Column, String, Integer, ARRAY, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base  
from sqlalchemy import UniqueConstraint

base_order = declarative_base()

class Order(base_order):
    __tablename__ = 'order'
    order_id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    items = Column(ARRAY(Integer))
    total_price = Column(Integer)
    placed_at = Column(TIMESTAMP)