import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const PracticeCard = ({ title, category, image }: any) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="w-full mb-12 group"
        >
            <View className="aspect-[3/4] rounded-[32px] overflow-hidden bg-gray-100 shadow-2xl shadow-black/[0.03] border border-gray-50 relative mb-6">
                <Image
                    source={{ uri: image }}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
            </View>
            <View className="px-2">
                <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[3px] mb-3">{category}</Text>
                <Text className="text-[26px] font-roboto-black text-black uppercase leading-[0.9] tracking-tighter group-hover:text-[#EB0046] transition-colors">
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const PRACTICES = [
    {
        title: "Vipassana",
        category: "Insight",
        image: "https://images.unsplash.com/photo-1609154767012-331529e7d73b?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Zazen",
        category: "Stillness",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Pranayama",
        category: "Breath",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Somatic",
        category: "Body",
        image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=600"
    }
];

export const PracticesSection = () => {
    return (
        <View className="py-16 bg-white">
            <View className="max-w-[1440px] mx-auto px-6">
                <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-16 text-center">
                    Disciplines
                </Text>

                <View className="flex-row flex-wrap -mx-3">
                    {PRACTICES.map((practice, index) => (
                        <View key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3">
                            <PracticeCard {...practice} />
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};
