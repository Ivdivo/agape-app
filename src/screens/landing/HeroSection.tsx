import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Check, ArrowRight } from 'lucide-react-native';

const IntentionItem = ({ label }: { label: string }) => {
    const [checked, setChecked] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => setChecked(!checked)}
            activeOpacity={0.7}
            className={`flex-row items-center p-3 mb-2 rounded-xl border transition-all duration-300 ${checked
                ? 'bg-[#EB0046]/5 border-[#EB0046] shadow-sm'
                : 'bg-gray-50/50 border-gray-100'
                }`}
        >
            <View className={`w-5 h-5 rounded-full items-center justify-center border ${checked ? 'bg-[#EB0046] border-[#EB0046]' : 'bg-white border-gray-200'
                }`}>
                {checked && <Check size={12} color="white" strokeWidth={4} />}
            </View>
            <Text className={`ml-3 text-sm font-roboto-medium tracking-tight ${checked ? 'text-black' : 'text-gray-600'
                }`}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export const HeroSection = ({ onStartPractice }: { onStartPractice?: () => void }) => {
    const collageImages = [
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1545209118-0e8adca010b4?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800'
    ];

    return (
        <View className="bg-white overflow-hidden pb-12">
            <View className="max-w-[1440px] mx-auto px-6 pt-12 lg:pt-20">
                <View className="flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <View className="w-full lg:w-1/2 flex-col justify-center">
                        <View className="mb-6">
                            <Text className="text-[10px] md:text-xs font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-4">
                                The Agape Sanctuary
                            </Text>
                            {/* Adjusted text size for better responsiveness */}
                            <Text className="text-[42px] sm:text-[56px] lg:text-[72px] font-roboto-black tracking-tighter text-black leading-[0.95] uppercase">
                                Love is the{"\n"}force that{"\n"}
                                <Text className="text-[#EB0046]">unites.</Text>
                            </Text>
                        </View>

                        <Text className="text-base md:text-lg text-gray-500 font-roboto-regular leading-relaxed max-w-lg mb-8">
                            A 24/7 live sanctuary. Shape your inner state and refine your focus through guided presence and ancient wisdom.
                        </Text>

                        <View className="mb-10 w-full max-w-md">
                            <Text className="text-[10px] font-roboto-bold text-gray-400 uppercase tracking-[4px] mb-4">Choose your intention</Text>
                            <View>
                                <IntentionItem label="Build calm focus and clarity" />
                                <IntentionItem label="Morning alignment and intention" />
                                <IntentionItem label="Deep spiritual immersion" />
                            </View>
                        </View>

                        <View className="flex-row items-center space-x-4">
                            <TouchableOpacity
                                onPress={onStartPractice}
                                className="bg-black px-8 py-4 rounded-xl shadow-lg flex-row items-center hover:bg-gray-900 transition-colors"
                            >
                                <Text className="text-white font-roboto-bold text-[11px] uppercase tracking-widest mr-3">Start Practice</Text>
                                <ArrowRight size={16} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity className="px-6 py-4">
                                <Text className="text-black font-roboto-bold text-[11px] uppercase tracking-widest border-b border-gray-300 pb-1">View Schedule</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Right Visuals - Sophisticated Grid */}
                    <View className="w-full lg:w-1/2 h-[500px] lg:h-[600px] relative">
                        <View className="flex-row h-full gap-4">
                            <View className="flex-1 space-y-4 pt-8">
                                <View className="flex-[0.6] rounded-[32px] overflow-hidden shadow-sm">
                                    <Image source={{ uri: collageImages[0] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                                <View className="flex-[0.4] rounded-[32px] overflow-hidden shadow-sm">
                                    <Image source={{ uri: collageImages[1] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                            </View>
                            <View className="flex-1 space-y-4">
                                <View className="flex-[0.4] rounded-[32px] overflow-hidden shadow-sm">
                                    <Image source={{ uri: collageImages[2] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                                <View className="flex-[0.6] rounded-[32px] overflow-hidden shadow-sm">
                                    <Image source={{ uri: collageImages[3] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                            </View>
                        </View>

                        {/* Decorative background element */}
                        <View className="absolute -z-10 -right-10 top-20 w-80 h-80 bg-[#EB0046]/10 rounded-full blur-[80px]" />
                        <View className="absolute -z-10 -left-10 bottom-0 w-60 h-60 bg-blue-100/20 rounded-full blur-[60px]" />
                    </View>
                </View>
            </View>
        </View>
    );
};

