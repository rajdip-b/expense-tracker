import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ITabbedView } from '../index';
import React from 'react';
import CustomTabBar from '../components/tabbed-view/CustomTabBar';
import Expenses from './Expenses';
import Statistics from './Statistics';
import Settings from './Settings';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator<ITabbedView>();

const TabbedView = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
            }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="md-home" size={25} color="black" />
                        ) : (
                            <Ionicons name="md-home" size={25} color="gray" />
                        ),
                }}
                name="Expenses"
                component={Expenses}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="md-bar-chart" size={25} color="black" />
                        ) : (
                            <Ionicons name="md-bar-chart" size={25} color="gray" />
                        ),
                }}
                name="Statistics"
                component={Statistics}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="md-settings" size={25} color="black" />
                        ) : (
                            <Ionicons name="md-settings" size={25} color="gray" />
                        ),
                }}
                name="Settings"
                component={Settings}
            />
        </Tab.Navigator>
    );
};

export default TabbedView;
