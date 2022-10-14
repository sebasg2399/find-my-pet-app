import bcrypt from "bcrypt"
export const encryptPassword = async (password) => {
  console.log(password);
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
export const comparePassword = async (sent_pwd, pwd) => {
  const is_same = await bcrypt.compare(sent_pwd, pwd);
  return is_same;
};
