import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';

export const VideoSection = () => {
    return (
        <View className="py-12 md:py-16 bg-black px-6">
            <View className="max-w-[1440px] mx-auto">
                <View className="flex-row flex-wrap lg:flex-nowrap items-center">
                    <View className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-16">
                        <Text className="text-[#EB0046] font-roboto-bold text-[10px] uppercase tracking-[6px] mb-8">Featured Content</Text>
                        <Text className="text-white text-4xl sm:text-5xl lg:text-7xl font-roboto-black uppercase tracking-tighter leading-[0.9] mb-8">
                            The Science{"\n"}of Stillness
                        </Text>
                        <Text className="text-gray-400 text-base md:text-lg font-roboto-regular leading-relaxed mb-12 pr-6">
                            Explore the neurobiology behind deep meditative states in our latest documentary series featuring world-renowned neuroscientists.
                        </Text>
                        <TouchableOpacity className="bg-[#EB0046] px-10 py-5 rounded-2xl self-start flex-row items-center active:scale-95 shadow-xl shadow-[#EB0046]/20 transition-all">
                            <Play size={18} color="white" fill="white" className="mr-3" />
                            <Text className="text-white font-roboto-bold text-[10px] uppercase tracking-[3px]">Watch Trailer</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full lg:w-1/2 aspect-video bg-gray-900 rounded-[48px] overflow-hidden shadow-2xl border border-white/5 relative">
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200' }}
                            className="w-full h-full opacity-70"
                            resizeMode="cover"
                        />
                        <View className="absolute inset-0 bg-black/20" />
                        <View className="absolute inset-0 items-center justify-center">
                            <View className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl items-center justify-center border border-white/20 shadow-2xl">
                                <Play size={32} color="white" fill="white" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
