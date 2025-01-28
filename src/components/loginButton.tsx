import { useLogin, usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { ready, authenticated } = usePrivy();
  const { login } = useLogin();
  const disableLogin = !ready || (ready && authenticated);
  return (
    <button disabled={disableLogin} onClick={login}>
      Log in
    </button>
  );
}
