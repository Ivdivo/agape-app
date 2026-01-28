import React from 'react';
import { View, Text } from 'react-native';
import { Video, Sparkles, Heart, Users } from 'lucide-react-native';

const FeatureItem = ({ icon: Icon, title, description }: any) => (
    <View className="w-full md:w-[48%] lg:w-[23%] p-10 rounded-[48px] bg-white border border-gray-100 mb-8 lg:mb-0 items-start shadow-xl shadow-black/[0.03]">
        <View className="w-16 h-16 rounded-[24px] bg-[#fafafa] items-center justify-center mb-8 border border-gray-100 shadow-sm">
            <Icon size={26} color="#EB0046" strokeWidth={1.25} />
        </View>
        <Text className="text-[26px] font-roboto-black text-black uppercase tracking-tighter mb-4 leading-[0.9]">{title}</Text>
        <Text className="text-[13px] text-gray-500 font-roboto-medium leading-relaxed tracking-wide pr-2">
            {description}
        </Text>
    </View>
);

export const TheSpaceSection = () => {
    return (
        <View className="bg-white px-6 py-12 lg:py-16">
            <View className="max-w-[1440px] mx-auto">
                <View className="mb-20 px-4 items-center">
                    <Text className="text-[10px] md:text-xs font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-8 text-center">Innovative Practice</Text>
                    <Text className="text-4xl sm:text-[44px] md:text-[56px] lg:text-[72px] font-roboto-black text-black uppercase tracking-tighter text-center leading-[0.9]">
                        Unmatched Life{"\n"}Immersion.
                    </Text>
                </View>

                <View className="flex-row flex-wrap justify-center gap-6">
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
