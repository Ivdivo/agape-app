import React from 'react';
import { View, Text } from 'react-native';
import { Video, Sparkles, Heart, Users } from 'lucide-react-native';

const FeatureItem = ({ icon: Icon, title, description }: any) => (
    <View className="w-full md:w-[48%] lg:w-[23%] p-8 rounded-[40px] bg-gray-50/50 border border-gray-100 mb-6 lg:mb-0 items-start hover:bg-gray-100 transition-colors duration-300">
        <View className="w-14 h-14 rounded-2xl bg-white items-center justify-center mb-8 shadow-sm border border-gray-50">
            <Icon size={26} color="#EB0046" />
        </View>
        <Text className="text-xl font-roboto-black text-black uppercase tracking-tight mb-4">{title}</Text>
        <Text className="text-sm text-gray-500 font-roboto-regular leading-relaxed">
            {description}
        </Text>
    </View>
);

export const TheSpaceSection = () => {
    return (
        <View className="bg-white px-6 py-12 lg:py-16">
            <View className="max-w-[1440px] mx-auto">
                <View className="mb-12 px-4 items-center">
                    <Text className="text-[10px] md:text-xs font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-6">Innovative Practice</Text>
                    <Text className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-roboto-black text-black uppercase tracking-tighter text-center leading-[0.95]">
                        Unmatched Life{"\n"}Immersion.
                    </Text>
                </View>

                <View className="flex-row flex-wrap justify-between lg:justify-start lg:gap-[2.66%]">
                    <FeatureItem
                        icon={Video}
                        title="Live Guided Streams"
                        description="Experience the energy of live practice with masters from across the globe, 24/7."
                    />
                    <FeatureItem
                        icon={Sparkles}
                        title="AI Mentorship"
                        description="Our private AI companion helps you find the perfect state for your current moment."
                    />
                    <FeatureItem
                        icon={Heart}
                        title="Curated States"
                        description="Professionally designed sequences to shift your neuro-chemistry and emotional tone."
                    />
                    <FeatureItem
                        icon={Users}
                        title="Global Sangha"
                        description="Join a community of practitioners dedicated to presence and inner growth."
                    />
                </View>
            </View>
        </View>
    );
};
