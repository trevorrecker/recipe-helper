"use client";

import { useGoogleLogin } from "@react-oauth/google";

interface Props {
  onSuccess(response: object): void;
}

const LogInWithGoogle: React.FC<Props> = ({ onSuccess, ...delegate }) => {
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      if (onSuccess) onSuccess(codeResponse);
      // const tokens = await axios.post("http://localhost:3001/auth/google", {
      //   code: codeResponse.code
      // });

      // console.log(tokens);
    },
    onError: (errorResponse) => console.log(errorResponse)
  });

  return (
    <button {...delegate} onClick={() => googleLogin()}>
      Log in with Google
    </button>
  );
};

export default LogInWithGoogle;
