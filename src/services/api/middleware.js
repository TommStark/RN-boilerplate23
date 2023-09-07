module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );

  if (req.method === 'POST' && req.path === '/auth/login') {
    const {username, password} = req.body;
    if (username === 'admin' && password === '123') {
      return res.status(200).json({
        message: 'Todo está OK',
        id: 5,
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      });
    } else {
      return res.status(400).json({
        message: 'Credenciales incorrectas',
      });
    }
  }

  next();
};
