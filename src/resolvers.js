const { prisma } = require('./db');

const resolvers = {
  Query: {
    allProducts: (parent, argsparent, args) => {
      return prisma.product.findMany();
    },
    product: (parent, args) => {
      return prisma.product.findUnique({
        where: {
          name: args.name,
        },
      });
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const { name, email, street, city } = args.data;
      return prisma.user.create({
        data: {
          name,
          email,
          street,
          city,
        },
      });
    },
  },
};

module.exports = resolvers;
