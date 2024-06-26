import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        id: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const userId = credentials?.id;
        const userPassword = credentials?.password;

        if (!userId || !userPassword) {
          return null;
        }

        const res = await fetch(
          `https://my-json-server.typicode.com/KANGJIYEON2/AIA_Spurs_project/User?id=${userId}&password=${userPassword}`
        );

        if (res.status !== 200) {
          return null;
        }

        const users = await res.json();
        const user = users[0];

        console.log("Server response status:", res.status);
        console.log("User data:", user);

        if (
          user &&
          user.id === credentials.id &&
          user.password === credentials.password
        ) {
          return { id: user.id, name: user.name, email: user.email };
        } else {
          return null;
        }
      },
    }),

    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt" as any,
  },
  pages: {
    signIn: "/api/auth/login" || "/admin/login2",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      session.user = token as any;
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
