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

app.config['SECRET_KEY'] = secrets.token_hex(16)

# 关闭数据库修改跟踪操作[提高性能]：
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# 开启输出底层执行的sql语句
app.config['SQLALCHEMY_ECHO'] = True

# 开启数据库的自动提交功能[一般不使用]
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
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