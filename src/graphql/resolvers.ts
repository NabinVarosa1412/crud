// make resolvers for the User

import User from '../model/user_model';

 const resolvers = {
    Query: {
        getUser: async (parent: any, args: any) => {
            return await User.findByPk(args.id);
        },
        getUsers: async () => {
            return await User.findAll();
        }
    },
    Mutation: {
        createUser: async (parent: any, args: any) => {
            return await User.create(args);
        },
        updateUser: async (parent: any, args: any) => {
            await User.update(args, {
                where: {
                    id: args.id
                }
            });
            return await User.findByPk(args.id);
        },
        deleteUser: async (parent: any, args: any) => {
            const user = await User.findByPk(args.id);
            await User.destroy({
                where: {
                    id: args.id
                }
            });
            return user;
        }
    }
};

export default resolvers;

