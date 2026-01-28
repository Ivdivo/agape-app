import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const PracticeCard = ({ title, category, image }: any) => (
    <TouchableOpacity className="w-[48%] lg:w-[23%] aspect-[3/4] rounded-[32px] overflow-hidden relative mb-8">
        <Image
            source={{ uri: image }}
            className="w-full h-full absolute"
            resizeMode="cover"
        />
        <View className="absolute inset-0 bg-black/20" />
        <View className="absolute bottom-6 left-6">
            <Text className="text-white/80 font-roboto-bold text-[10px] uppercase tracking-[3px] mb-2">{category}</Text>
            <Text className="text-white font-roboto-black text-2xl uppercase leading-none">{title}</Text>
        </View>
    </TouchableOpacity>
);

export const PracticesSection = () => {
    return (
        <View className="py-24 bg-white">
            <View className="max-w-[1440px] mx-auto px-6">
                <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-12 text-center">Disciplines</Text>
                <View className="flex-row flex-wrap justify-between">
                    <PracticeCard
                        title="Vipassana"
                        category="Insight"
                        image="https://images.unsplash.com/photo-1609154767012-331529e7d73b?auto=format&fit=crop&q=80&w=600"
                    />
                    <PracticeCard
                        title="Zazen"
                        category="Stillness"
                        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
                    />
                    <PracticeCard
                        title="Pranayama"
                        category="Breath"
                        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
                    />
                    <PracticeCard
                        title="Somatic"
                        category="Body"
                        image="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=600"
                    />
                </View>
            </View>
        </View>
    );
};
