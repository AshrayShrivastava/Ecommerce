from flask import Flask
from waitress import serve
from routes.Ecommerce import Ecommerce


app = Flask(__name__)

def main():
    app.register_blueprint(Ecommerce.ecommmerce_app)
    serve(app, host="0.0.0.0", port=5000)

if __name__ == '__main__':
    main()
