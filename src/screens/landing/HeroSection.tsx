import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Check, ArrowRight } from 'lucide-react-native';

const IntentionItem = ({ label }: { label: string }) => {
    const [checked, setChecked] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => setChecked(!checked)}
            activeOpacity={0.7}
            className={`flex-row items-center p-4 mb-3 rounded-2xl border transition-all duration-300 ${checked
                ? 'bg-[#EB0046]/5 border-[#EB0046] shadow-sm'
                : 'bg-gray-50/50 border-gray-100'
                }`}
        >
            <View className={`w-5 h-5 rounded-full items-center justify-center border ${checked ? 'bg-[#EB0046] border-[#EB0046]' : 'bg-white border-gray-200'
                }`}>
                {checked && <Check size={12} color="white" strokeWidth={4} />}
            </View>
            <Text className={`ml-4 text-sm md:text-base font-roboto-medium tracking-tight ${checked ? 'text-black' : 'text-gray-600'
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
        <View className="bg-white overflow-hidden">
            <View className="max-w-[1440px] mx-auto px-6 py-12 lg:py-24">
                <View className="flex-row flex-wrap lg:flex-nowrap items-center">
                    {/* Left Content */}
                    <View className="w-full lg:w-[55%] mb-12 lg:mb-0 lg:pr-10 xl:pr-20">
                        <View className="mb-8">
                            <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[8px] mb-8">
                                The Agape Sanctuary
                            </Text>
                            <Text className="text-[38px] sm:text-[56px] md:text-[72px] lg:text-[84px] xl:text-[96px] font-roboto-black tracking-tighter text-black leading-[0.95] uppercase">
                                Love is the{"\n"}force that{"\n"}
                                <Text className="text-[#EB0046]">unites.</Text>
                            </Text>
                        </View>

                        <Text className="text-lg md:text-xl text-gray-500 font-roboto-regular leading-relaxed max-w-xl mb-12">
                            A 24/7 live sanctuary. Shape your inner state and refine your focus through guided presence and ancient wisdom.
                        </Text>

                        <View className="mb-14">
                            <Text className="text-[10px] font-roboto-bold text-gray-400 uppercase tracking-[4px] mb-8">Choose your intention</Text>
                            <View className="max-w-md">
                                <IntentionItem label="Build calm focus and clarity" />
                                <IntentionItem label="Morning alignment and intention" />
                                <IntentionItem label="Deep spiritual immersion" />
                            </View>
                        </View>

                        <View className="flex-row items-center space-x-6">
                            <TouchableOpacity
                                onPress={onStartPractice}
                                className="bg-black px-8 md:px-10 py-5 rounded-2xl shadow-2xl flex-row items-center"
                            >
                                <Text className="text-white font-roboto-bold text-[11px] uppercase tracking-widest mr-3">Start Practice</Text>
                                <ArrowRight size={16} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity className="px-6 py-5">
                                <Text className="text-black font-roboto-bold text-[11px] uppercase tracking-widest border-b border-black">View Schedule</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Right Visuals - Sophisticated Grid */}
                    <View className="w-full lg:w-[45%] h-full">
                        <View className="flex-row gap-4 mb-4">
                            <View className="flex-1 space-y-4 pt-12">
                                <View className="aspect-[3/4] rounded-[40px] overflow-hidden bg-gray-50 shadow-lg border border-gray-100">
                                    <Image source={{ uri: collageImages[0] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                                <View className="aspect-square rounded-[40px] overflow-hidden bg-gray-50 shadow-lg border border-gray-100">
                                    <Image source={{ uri: collageImages[1] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                            </View>
                            <View className="flex-1 space-y-4">
                                <View className="aspect-square rounded-[40px] overflow-hidden bg-gray-50 shadow-lg border border-gray-100">
                                    <Image source={{ uri: collageImages[2] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                                <View className="aspect-[3/4] rounded-[40px] overflow-hidden bg-gray-50 shadow-lg border border-gray-100">
                                    <Image source={{ uri: collageImages[3] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                            </View>
                        </View>

                        {/* Decorative background element */}
                        <View className="absolute -z-10 -right-20 -top-20 w-80 h-80 bg-[#EB0046]/5 rounded-full blur-[100px]" />
                        <View className="absolute -z-10 -left-10 bottom-0 w-60 h-60 bg-blue-50/5 rounded-full blur-[80px]" />
                    </View>
                </View>
            </View>
        </View>
    );
};
