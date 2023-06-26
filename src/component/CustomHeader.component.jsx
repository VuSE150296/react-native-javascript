import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView  } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const CustomHeader = ({ headerData }) => {
    const route = useRoute();
    const handleGoBack = () => {
        headerData.navigation.goBack();
    };
    return (
        <SafeAreaView>
            <View
                className="pt-14 bg-green-900 grid justify-items-stretch h-24 "
            >
                {headerData.progress.previous &&
                    <View className="absolute bottom-1 left-2">
                        <Ionicons className="self-center justify-self-start " size={36} name="arrow-back" onPress={handleGoBack} />
                    </View>
                }
                <View className="self-center justify-self-center items-center  justify-center flex-row">
                    <Text className="text-3xl font-bold text-white">Orchild App</Text>
                </View>

            </View>
        </SafeAreaView >
    );
};

export { CustomHeader };
