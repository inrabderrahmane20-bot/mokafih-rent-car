import useAuth from "@/utils/useAuth";

export default function LogoutPage() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl text-center">
        <div className="text-2xl font-bold mb-6">
          <span className="text-[#D4AF37]">MOKAFIH</span>
          <span className="text-gray-800 text-sm ml-2">RENT CAR</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-8">Sign Out</h1>

        <button
          onClick={handleSignOut}
          className="w-full rounded-lg bg-[#D4AF37] hover:bg-[#C49B2C] px-4 py-3 text-base font-medium text-white transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
