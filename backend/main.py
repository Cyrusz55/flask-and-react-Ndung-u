
from flask import Flask
from flask_restx import Api
from models import Recipe, user
from exts import db
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required
from recipes import recipe_ns
from auth import auth_ns
from flask_cors import CORS

def create_app(config='config.Config'):


    app = Flask(__name__)
    app.config.from_object(config)

    CORS(app)

    if not app.config.get('SQLALCHEMY_DATABASE_URI'):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dev.db'

    print(f"Database URI: {app.config['SQLALCHEMY_DATABASE_URI']}")

    db.init_app(app)

    Migrate(app, db)

    JWTManager(app)

    api = Api(app, doc='/docs')
    api.add_namespace(auth_ns)
    api.add_namespace(recipe_ns)



    @app.shell_context_processor
    def make_shell_context():
        return{
            "db": db,
            "Recipe": Recipe,
            "user": user
        }





    return app
