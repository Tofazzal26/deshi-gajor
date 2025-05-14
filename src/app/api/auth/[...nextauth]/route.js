import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import UserModel from "@/app/UserModel/UserModel";

const handle = NextAuth({
  secret: process.env.NextSECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        await ConnectMongoose();
        const currentUser = await UserModel.findOne({ email });
        if (!currentUser) {
          //   const hashedPassword = bcrypt.hashSync(password, 10);
          //   currentUser = await UserModel.create({
          //     email,
          //     password: hashedPassword,
          //   });
          return null;
        }
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GoogleCLIENT,
      clientSecret: process.env.GoogleSECRET,
    }),
    GitHubProvider({
      clientId: process.env.GitHubClientID,
      clientSecret: process.env.GitHubClientSecret,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        try {
          await ConnectMongoose();
          const exist = await UserModel.findOne({ email });
          if (!exist) {
            const resp = await UserModel.create(user);
          } else {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      }
      if (account.provider === "github") {
        const { name, email, image } = user;
        try {
          const exist = await UserModel.findOne({ email });
          if (!exist) {
            const resp = await UserModel.create(user);
          } else {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
});

export { handle as GET, handle as POST };
