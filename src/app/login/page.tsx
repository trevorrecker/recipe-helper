"use client";

import LogInWithGoogle from "@/components/LogInWithGoogle";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Page() {
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID_DEV}`}
    >
      <div
        style={{
          width: "300px",
          padding: "2rem",
          margin: "200px auto",
          textAlign: "center"
        }}
      >
        <h1>Log In</h1>
        <div>
          <LogInWithGoogle onSuccess={(response) => console.log(response)} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
