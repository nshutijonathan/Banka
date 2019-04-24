import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

 const usershelpers= {

  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  },
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  generateToken(id, type){

    let data = {
      userId: id,
      type: type
    }
    const token = jwt.sign({
      data
    },
      process.env.SECRET, { expiresIn: "48h" }
    );

    console.log(data);

    return token;
  }
}
export default usershelpers;
