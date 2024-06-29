import User from "../models/user";
const getUserById = async (userId: string): Promise<User | null>  => {
    return User.findByPk(userId);
};

const getUserByEmail = async (email: string): Promise<User | null> => {
    return User.findOne({ where: { email } });
};

export default {
    getUserById,
    getUserByEmail,
}
