from models.Item import base_item
from models.Order import base_order
from models.User import base_user
from service.Connection import db

base_item.metadata.create_all(db)
base_order.metadata.create_all(db)
base_user.metadata.create_all(db)
