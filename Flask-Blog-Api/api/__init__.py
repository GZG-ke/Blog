import sys,secrets
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

WIN = sys.platform.startswith('win')

if WIN:
    prefix = 'mysql://root:123456@192.168.2.41:3307/postgresql'
else:
    prefix = 'mysql://root:123456@192.168.2.41:3307/postgresql'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = prefix
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = secrets.token_hex(16)
db = SQLAlchemy(app)
login_manager = LoginManager(app)


@login_manager.user_loader
def load_user(user_id):
    from api.models import User  # 更改为正确的模块路径
    user = User.query.get(int(user_id))
    return user


login_manager.login_view = 'login'


@app.context_processor
def inject_user():
    from api.models import User  # 更改为正确的模块路径
    user = User.query.first()
    return dict(user=user)
from api import views, errors, commands