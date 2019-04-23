import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

 const usershelpers= {

  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  generateToken(id) {
    const token = jwt.sign({
      userId: id
    },
      process.env.SECRET, { expiresIn: "48h" }
    );
    return token;
  }
}
export default usershelpers;