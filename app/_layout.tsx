import { AuthProvider, useAuth } from "@/lib/auth-context";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoadingUser } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    // debug logging to understand routing decisions
    console.log("RouteGuard:", { user: !!user, isLoadingUser, segments });

    // don't attempt redirects while auth is still initializing
    if (isLoadingUser) return;

    const inAuthGroup = segments?.[0] === "auth";

    // only redirect when needed to avoid unnecessary re-renders/navigation
    if (!user && !inAuthGroup) {
      console.log("RouteGuard: redirecting to /auth");
      router.replace("/auth");
    } else if (user && inAuthGroup) {
      console.log("RouteGuard: redirecting to /");
      router.replace("/");
    }
  }, [user, isLoadingUser, segments, router]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (

     <GestureHandlerRootView style={{ flex: 1 }}>

    
    <AuthProvider>
      <PaperProvider>
        <SafeAreaProvider>
          <RouteGuard>
            <Stack>

              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            </Stack>

          </RouteGuard>
        </SafeAreaProvider>
      </PaperProvider>

    </AuthProvider>
     </GestureHandlerRootView>



  );
}