import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IRootStackParamList, ITabbedView } from '../types';
import React from 'react';
import Expenses from './Expenses';
import Statistics from './Statistics';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomTabBar from '../components/tabbed-view/CustomTabBar';

const Tab = createBottomTabNavigator<ITabbedView>();

const TabbedView: React.FC<{ navigation: NativeStackNavigationProp<IRootStackParamList> }> = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
            }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                options={{
                    tabBarStyle: {
                        borderRadius: 20,
                        backgroundColor: 'white',
                    },
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name='md-home' size={25} color='black' />
                        ) : (
                            <Ionicons name='md-home' size={25} color='gray' />
                        ),
                }}
                name='Expenses'
                children={() => <Expenses navigation={navigation} />}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name='md-bar-chart' size={25} color='black' />
                        ) : (
                            <Ionicons name='md-bar-chart' size={25} color='gray' />
                        ),
                }}
                name='Statistics'
                component={Statistics}
            />
            {/*<Tab.Screen*/}
            {/*    options={{*/}
            {/*        headerShown: false,*/}
            {/*        tabBarIcon: ({ focused }) =>*/}
            {/*            focused ? (*/}
            {/*                <Ionicons name='md-settings' size={25} color='black' />*/}
            {/*            ) : (*/}
            {/*                <Ionicons name='md-settings' size={25} color='gray' />*/}
            {/*            ),*/}
            {/*    }}*/}
            {/*    name='Settings'*/}
            {/*    component={Settings}*/}
            {/*/>*/}
        </Tab.Navigator>
    );
};

export default TabbedView;
