from sqlalchemy import Column, String, Integer, ARRAY
from sqlalchemy.ext.declarative import declarative_base

base_item = declarative_base()

class Item(base_item):
    __tablename__ = 'item'
    item_id = Column(Integer, primary_key=True)
    item_name = Column(String)
    price = Column(Integer)
    available_quantity = Column(Integer)
    sold_quantity = Column(Integer)