import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const StartingSoonSection = () => {
    return (
        <View className="bg-[#EB0046] py-3.5">
            <View className="max-w-[1440px] mx-auto px-6 flex-row justify-between items-center gap-4">
                <View className="flex-row items-center flex-1 pr-2">
                    <View className="w-1.5 h-1.5 bg-white rounded-full mr-3 shadow-sm animate-pulse" />
                    <Text className="text-white font-roboto-bold text-[10px] md:text-[11px] uppercase tracking-[2px] leading-tight flex-1" numberOfLines={1}>
                        Live Now: <Text className="font-roboto-black">Zen Fundamentals</Text>
                    </Text>
                </View>
                <TouchableOpacity className="bg-black/20 px-5 py-2.5 rounded-lg active:bg-black/30 transition-colors flex-row items-center">
                    <Text className="text-white font-roboto-bold text-[9px] uppercase tracking-[2.5px]">Join Session</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
