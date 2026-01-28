import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const StartingSoonSection = () => {
    return (
        <View className="bg-[#EB0046] py-3">
            <View className="max-w-[1440px] mx-auto px-6 flex-row justify-center items-center">
                <View className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse" />
                <Text className="text-white font-roboto-bold text-xs uppercase tracking-widest mr-4">
                    Starting Soon: Zen Fundamentals with Master Tenzin
                </Text>
                <TouchableOpacity className="bg-black/20 px-3 py-1 rounded-full">
                    <Text className="text-white font-roboto-bold text-[10px] uppercase tracking-widest">Join Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
