import React from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const [keyboardHidden, setKeyboardHidden] = React.useState(true);

    React.useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardHidden(false);
        });
        const hideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardHidden(true);
        });
        return () => {
            showListener.remove();
            hideListener.remove();
        };
    }, []);

    return (
        <View className={`flex flex-row ${!keyboardHidden && 'hidden'}`}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const iconName = options.tabBarIcon;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <View key={index} className={`bg-transparent flex-1 shadow-2xl rounded-full`}>
                        <TouchableOpacity
                            className={`m-3 p-2 flex flex-col items-center justify-between`}
                            onPress={onPress}
                        >
                            {iconName && iconName({ color: '', size: 0, focused: isFocused })}
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};

export default CustomTabBar;
