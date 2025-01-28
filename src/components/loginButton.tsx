import { useLogin, usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { ready, authenticated, logout } = usePrivy();
  const { login } = useLogin();
  const disableLogin = !ready || (ready && authenticated);
  const disableLogout = !ready || (ready && !authenticated);
  return (
    <div className="flex gap-4 items-center">
      <button disabled={disableLogin} onClick={login}>
        Connect Wallet
      </button>
      <button disabled={disableLogout} onClick={logout}>
        Log out
      </button>
    </div>
  );
}
