import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: {children: React.ReactNode} ) {
  const router = useRouter();
  const isAuth = false;
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();
  useEffect(() => {
    const inAuthGroup = segments[0] === "auth";
    if (!user && !inAuthGroup && !isLoadingUser) {
      router.replace("/auth");
    } else if (user && inAuthGroup) {
      router.replace("/");
    }
  }, [user, isLoadingUser, segments, router]); // Ensure the effect runs when
   

  return <>{children}</>;
}

export default function RootLayout() {
  return (

<AuthProvider>
<RouteGuard>
  <Stack>

    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  
  </Stack>

</RouteGuard>
 </AuthProvider>


    
  );
}