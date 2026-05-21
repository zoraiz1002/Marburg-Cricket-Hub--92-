import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase, isSupabaseConfigured } from "./supabase";

type Role = "admin" | "captain" | "player" | null;

interface AuthCtx {
  user: User | null;
  session: Session | null;
  role: Role;
  loading: boolean;
  configured: boolean;
  signOut: () => Promise<void>;
}

const Ctx = createContext<AuthCtx>({
  user: null, session: null, role: null, loading: true, configured: false,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<Role>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) { setLoading(false); return; }
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setRole((s?.user?.user_metadata?.role as Role) ?? "player");
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setRole((data.session?.user?.user_metadata?.role as Role) ?? (data.session ? "player" : null));
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <Ctx.Provider value={{
      user: session?.user ?? null,
      session, role, loading, configured: isSupabaseConfigured,
      signOut: async () => { await supabase.auth.signOut(); },
    }}>{children}</Ctx.Provider>
  );
}

export const useAuth = () => useContext(Ctx);
