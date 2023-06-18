import { StatusBar } from 'react-native';
import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpense from './screens/AddExpense';
import { IRootStackParamList } from './types';
import TabbedView from './screens/TabbedView';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <StatusBar barStyle='light-content' backgroundColor={'white'} />
                    <RootStack />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

const RootStack: React.FC = () => {
    const Stack = createNativeStackNavigator<IRootStackParamList>();

    return (
        <Stack.Navigator>
            <>
                <Stack.Screen options={{ headerShown: false }} name='TabbedView' component={TabbedView} />
                <Stack.Screen
                    options={{
                        animation: 'slide_from_bottom',
                        headerTitle: 'Add Expense',
                    }}
                    name='AddExpense'
                    component={AddExpense}
                />
            </>
        </Stack.Navigator>
    );
};
