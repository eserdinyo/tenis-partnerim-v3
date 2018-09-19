const env = process.env.NODE_ENV || 'development'

if (env == 'development') {
  process.env.PORT = 8081;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/Tenis'
} else if (env == 'test') {
  process.env.PORT = 8081;
  process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TenisTest'
} else {
  process.env.MONGODB_URI = 'mongodb://todoapp:123qweasd@ds149682.mlab.com:49682/todo-app';
}