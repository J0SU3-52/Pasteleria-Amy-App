import WelcomeScreen from "@/src/screens/WelcomeScreen";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Welcome() {

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(intro)/onboarding");
    }, 1500); // 1.5 segundos - puedes ajustarlo

    return () => clearTimeout(timeout);
  }, []);

  return <WelcomeScreen />;
}
