import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Search, ChevronDown, Menu } from 'lucide-react-native';

export const Header = ({ onLogoPress, onBrowsePress }: { onLogoPress?: () => void, onBrowsePress?: () => void }) => {
    return (
        <View className="w-full bg-white border-b border-gray-100 z-50">
            <View className="max-w-[1400px] mx-auto px-6 h-20 flex-row items-center justify-between">
                {/* Left Section: Logo & Browse */}
                <View className="flex-row items-center space-x-8">
                    <TouchableOpacity className="flex-row items-center" onPress={onLogoPress}>
                        <Text className="text-xl font-roboto-black tracking-tighter text-black uppercase">agápē</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-row items-center space-x-1 px-4 py-2 rounded-md hover:bg-gray-50"
                        onPress={onBrowsePress}
                    >
                        <Text className="text-sm font-roboto-bold text-gray-800">Browse</Text>
                        <ChevronDown size={14} color="#1f2937" />
                    </TouchableOpacity>
                </View>

                {/* Center Section: Search Bar */}
                <View className="flex-1 max-w-xl mx-8">
                    <View className="flex-row items-center bg-gray-100 px-4 py-2.5 rounded-full">
                        <Search size={18} color="#6b7280" />
                        <TextInput
                            placeholder="What do you want to practice today?"
                            placeholderTextColor="#9ca3af"
                            className="ml-3 flex-1 text-sm font-roboto-regular text-black outline-none"
                        />
                    </View>
                </View>

                {/* Right Section: Links & CTA */}
                <View className="flex-row items-center space-x-8">
                    <TouchableOpacity className="hidden xl:flex">
                        <Text className="text-xs font-roboto-bold text-gray-400 uppercase tracking-widest">Gifts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="hidden xl:flex">
                        <Text className="text-xs font-roboto-bold text-gray-400 uppercase tracking-widest">View Plans</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className="text-xs font-roboto-bold text-black uppercase tracking-widest">Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-[#EB0046] px-6 py-3 rounded-md">
                        <Text className="text-white font-roboto-bold text-sm">Start Practice</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="lg:hidden ml-4">
                        <Menu size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
