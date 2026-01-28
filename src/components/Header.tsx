import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import { Search, ChevronDown, Menu, X } from 'lucide-react-native';

export const Header = ({ onLogoPress, onBrowsePress }: { onLogoPress?: () => void, onBrowsePress?: () => void }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'The Space', href: '#space' },
        { label: 'Schedule', href: '#schedule' },
        { label: 'Practices', href: '#practices' },
        { label: 'Masters', href: '#masters' },
    ];

    return (
        <View className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50 sticky top-0 shadow-sm">
            <View className="max-w-[1440px] mx-auto px-6 h-20 lg:h-22 flex-row items-center justify-between">
                {/* Left Section: Logo & Browse */}
                <View className="flex-row items-center gap-6 lg:gap-10">
                    <TouchableOpacity
                        className="flex-row items-center active:scale-95 transition-transform"
                        onPress={onLogoPress}
                    >
                        <Text className="text-2xl font-roboto-black tracking-tighter text-black uppercase">agápē</Text>
                        <View className="w-1.5 h-1.5 rounded-full bg-[#EB0046] ml-0.5 mt-2" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-row items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 hidden sm:flex transition-colors"
                        onPress={onBrowsePress}
                    >
                        <Text className="text-[11px] font-roboto-bold text-gray-800 uppercase tracking-widest">Browse</Text>
                        <ChevronDown size={14} color="#1f2937" />
                    </TouchableOpacity>
                </View>

                {/* Center Section: Search Bar - Hidden on mobile, visible on lg+ */}
                <View className="hidden lg:flex flex-1 max-w-xl mx-12">
                    <View className="flex-row items-center bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 focus:border-gray-200">
                        <Search size={18} color="#9ca3af" />
                        <TextInput
                            placeholder="Find your practice..."
                            placeholderTextColor="#9ca3af"
                            className="ml-3 flex-1 text-sm font-roboto-regular text-black outline-none"
                        />
                    </View>
                </View>

                {/* Right Section: Links & CTA */}
                <View className="flex-row items-center gap-6 lg:gap-8">
                    <TouchableOpacity className="hidden xl:flex active:opacity-60">
                        <Text className="text-[10px] font-roboto-bold text-gray-500 uppercase tracking-[3px]">Gifts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="hidden xl:flex active:opacity-60">
                        <Text className="text-[10px] font-roboto-bold text-gray-500 uppercase tracking-[3px]">Plans</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="hidden md:flex active:opacity-60">
                        <Text className="text-[10px] font-roboto-bold text-black uppercase tracking-[3px]">Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="bg-black px-6 py-3 rounded-xl hidden sm:flex shadow-lg shadow-black/5 active:scale-95 transition-all"
                    >
                        <Text className="text-white font-roboto-bold text-[11px] uppercase tracking-[3px]">Enter Sanctuary</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="lg:hidden ml-2 p-2 active:bg-gray-50 rounded-full" onPress={() => setIsMenuOpen(true)}>
                        <Menu size={24} color="black" strokeWidth={1.5} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Mobile Menu Modal */}
            <Modal
                visible={isMenuOpen}
                animationType="fade"
                transparent={false}
                onRequestClose={() => setIsMenuOpen(false)}
            >
                <View className="flex-1 bg-white">
                    <View className="h-20 px-6 flex-row items-center justify-between border-b border-gray-100">
                        <View className="flex-row items-center">
                            <Text className="text-2xl font-roboto-black tracking-tighter text-black uppercase">agápē</Text>
                            <View className="w-1.5 h-1.5 rounded-full bg-[#EB0046] ml-0.5 mt-2" />
                        </View>
                        <TouchableOpacity onPress={() => setIsMenuOpen(false)} className="p-2 active:bg-gray-50 rounded-full">
                            <X size={26} color="black" strokeWidth={1.5} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView className="flex-1 px-8 py-16">
                        <View className="gap-10">
                            {menuItems.map((item) => (
                                <TouchableOpacity key={item.label} onPress={() => setIsMenuOpen(false)} className="active:opacity-50">
                                    <Text className="text-4xl font-roboto-black text-black uppercase tracking-tighter leading-none">
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View className="mt-24 gap-6">
                            <TouchableOpacity className="bg-[#EB0046] w-full py-6 rounded-[24px] items-center shadow-2xl shadow-[#EB0046]/20 active:scale-95 transition-all">
                                <Text className="text-white font-roboto-black text-[13px] uppercase tracking-[4px]">Start Practice</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="w-full py-6 rounded-[24px] items-center border border-gray-100 active:bg-gray-50 transition-colors">
                                <Text className="text-black font-roboto-bold text-[13px] uppercase tracking-[4px]">Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};
