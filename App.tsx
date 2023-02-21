import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpense from './screens/AddExpense';
import { IRootStackParamList } from './types';
import TabbedView from './screens/TabbedView';

export default function App() {
    // @ts-ignore
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <StatusBar barStyle="light-content" backgroundColor={'white'} />
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
                <Stack.Screen options={{ headerShown: false }} name="TabbedView" component={TabbedView} />
                <Stack.Screen
                    options={{
                        animation: 'slide_from_bottom',
                        headerTitle: 'Add Expense',
                    }}
                    name="AddExpense"
                    component={AddExpense}
                />
            </>
        </Stack.Navigator>
    );
};
