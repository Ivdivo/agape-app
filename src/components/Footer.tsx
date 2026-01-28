import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react-native';

export const Footer = () => {
    return (
        <View className="bg-white pt-24 pb-12 px-6 border-t border-gray-100">
            <View className="max-w-[1400px] mx-auto">
                <View className="flex-row flex-wrap justify-between mb-20">
                    <View className="w-full lg:w-1/4 mb-10 lg:mb-0">
                        <Text className="text-2xl font-roboto-black tracking-tighter text-black uppercase mb-6">agápē</Text>
                        <View className="flex-row space-x-4">
                            <TouchableOpacity><Instagram size={20} color="black" /></TouchableOpacity>
                            <TouchableOpacity><Twitter size={20} color="black" /></TouchableOpacity>
                            <TouchableOpacity><Facebook size={20} color="black" /></TouchableOpacity>
                            <TouchableOpacity><Youtube size={20} color="black" /></TouchableOpacity>
                        </View>
                    </View>

                    <View className="w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                        <Text className="font-roboto-bold text-black mb-6 uppercase text-xs tracking-[2px]">Explore</Text>
                        <View className="space-y-4">
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">Browse Classes</Text></TouchableOpacity>
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">Articles</Text></TouchableOpacity>
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">Sitemap</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View className="w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                        <Text className="font-roboto-bold text-black mb-6 uppercase text-xs tracking-[2px]">About</Text>
                        <View className="space-y-4">
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">Our Story</Text></TouchableOpacity>
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">Careers</Text></TouchableOpacity>
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">Contact Us</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View className="w-1/2 md:w-1/4 lg:w-1/6 mb-8">
                        <Text className="font-roboto-bold text-black mb-6 uppercase text-xs tracking-[2px]">Support</Text>
                        <View className="space-y-4">
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">Help Center</Text></TouchableOpacity>
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">View Plans</Text></TouchableOpacity>
                            <TouchableOpacity><Text className="text-sm text-gray-600 font-roboto-medium">Log In</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View className="pt-12 border-t border-gray-100 flex-row flex-wrap justify-between items-center">
                    <Text className="text-xs text-gray-400 font-roboto-regular mb-4 md:mb-0">
                        © 2026 agápē Space Inc. All rights reserved.
                    </Text>
                    <View className="flex-row space-x-6">
                        <TouchableOpacity><Text className="text-xs text-gray-400 font-roboto-regular">Privacy Policy</Text></TouchableOpacity>
                        <TouchableOpacity><Text className="text-xs text-gray-400 font-roboto-regular">Terms of Service</Text></TouchableOpacity>
                        <TouchableOpacity><Text className="text-xs text-gray-400 font-roboto-regular">Cookie Settings</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
