import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';

export const VideoSection = () => {
    return (
        <View className="py-16 md:py-24 bg-black">
            <View className="max-w-[1440px] mx-auto px-6">
                <View className="flex-row flex-wrap lg:flex-nowrap items-center">
                    <View className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-16">
                        <Text className="text-[#EB0046] font-roboto-bold text-[10px] uppercase tracking-[6px] mb-6">Featured Content</Text>
                        <Text className="text-white text-4xl sm:text-5xl lg:text-7xl font-roboto-black uppercase tracking-tighter leading-none mb-8">
                            The Science of Stillness
                        </Text>
                        <Text className="text-gray-400 text-base md:text-lg font-roboto-regular leading-relaxed mb-10">
                            Explore the neurobiology behind deep meditative states in our latest documentary series featuring world-renowned neuroscientists.
                        </Text>
                        <TouchableOpacity className="bg-white px-8 py-4 rounded-full self-start flex-row items-center active:bg-gray-200 transition-colors">
                            <Play size={16} color="black" fill="black" className="mr-3" />
                            <Text className="text-black font-roboto-bold text-xs uppercase tracking-widest">Watch Trailer</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="w-full lg:w-1/2 aspect-video bg-gray-900 rounded-[32px] overflow-hidden shadow-2xl border border-gray-800">
                        {/* Placeholder for video/image */}
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200' }}
                            className="w-full h-full opacity-60"
                            resizeMode="cover"
                        />
                        <View className="absolute inset-0 items-center justify-center">
                            <View className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md items-center justify-center border border-white/30 shadow-lg">
                                <Play size={32} color="white" fill="white" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
