import "@/global.css";
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        // 1. ESTO QUITA LA BARRA DE ARRIBA (Donde dice "Welcome")
        headerShown: false, 
        
        // 2. ESTO QUITA LA BARRA DE PESTAÑAS DE ABAJO (Opcional)
        // (En la pantalla de bienvenida/onboarding se ve mal tener menús abajo)
        tabBarStyle: { display: 'none' } 
      }}
    >
      <Tabs.Screen name="index" />
    </Tabs>
  );
}