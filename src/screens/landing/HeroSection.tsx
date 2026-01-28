import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Check, ArrowRight } from 'lucide-react-native';

const IntentionItem = ({ label }: { label: string }) => {
    const [checked, setChecked] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => setChecked(!checked)}
            activeOpacity={0.7}
            className={`flex-row items-center py-3.5 px-6 rounded-full border transition-all duration-300 ${checked
                ? 'bg-[#EB0046]/5 border-[#EB0046]/30'
                : 'bg-white border-gray-100 shadow-sm'
                }`}
        >
            <View className={`w-5 h-5 rounded-full items-center justify-center border-[1.5px] ${checked ? 'bg-[#EB0046] border-[#EB0046]' : 'bg-transparent border-gray-300'
                }`}>
                {checked && <Check size={10} color="white" strokeWidth={4} />}
            </View>
            <Text className={`ml-3 text-[13px] md:text-[15px] font-roboto-medium tracking-wide ${checked ? 'text-black' : 'text-gray-500'
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
        <View className="bg-[#FCFCFC] px-6 pt-16 pb-20 lg:py-24 relative overflow-hidden">
            {/* Subtle Aura Background Element */}
            <View
                pointerEvents="none"
                className="absolute -top-[20%] left-[-10%] w-[120%] h-[600px] bg-[#EB0046]/[0.03] rounded-full blur-[100px]"
            />

            <View className="max-w-[1440px] mx-auto">
                <View className="flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
                    {/* Main Content Area */}
                    <View className="w-full lg:w-[55%] flex-col items-center lg:items-start z-10">

                        {/* Eyebrow */}
                        <View className="mb-8 lg:mb-10 items-center lg:items-start">
                            <View className="flex-row items-center gap-2 mb-3 lg:hidden">
                                <View className="w-1 h-1 rounded-full bg-[#EB0046]" />
                                <View className="w-1 h-1 rounded-full bg-[#EB0046] opacity-50" />
                                <View className="w-1 h-1 rounded-full bg-[#EB0046] opacity-25" />
                            </View>
                            <Text className="text-[11px] md:text-xs font-roboto-bold text-[#EB0046] uppercase tracking-[6px] text-center lg:text-left">
                                The Agape Sanctuary
                            </Text>
                        </View>

                        {/* Headline */}
                        <View className="mb-8 lg:mb-12 relative">
                            <Text className="text-[52px] sm:text-[64px] lg:text-[80px] xl:text-[92px] font-roboto-black tracking-tighter text-black leading-[0.9] uppercase text-center lg:text-left">
                                Love is the{"\n"}force that{"\n"}
                                <Text className="text-[#EB0046]">unites.</Text>
                            </Text>
                            {/* Decorative underline for mobile emphasis */}
                            <View className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-100/50 rounded-full lg:hidden" />
                        </View>

                        {/* Description */}
                        <Text className="text-[15px] sm:text-lg text-gray-500 font-roboto-medium leading-[1.6] mb-12 text-center lg:text-left max-w-lg lg:max-w-xl">
                            A 24/7 live sanctuary. Shape your inner state and refine your focus through guided presence and ancient wisdom.
                        </Text>

                        {/* Interactive Intention Selector */}
                        <View className="mb-12 w-full max-w-md lg:max-w-full">
                            <Text className="text-[10px] font-roboto-bold text-gray-400 uppercase tracking-[4px] mb-6 text-center lg:text-left">Choose your intention</Text>
                            <View className="gap-3">
                                <IntentionItem label="Build calm focus and clarity" />
                                <IntentionItem label="Morning alignment & intention" />
                                <IntentionItem label="Deep spiritual immersion" />
                            </View>
                        </View>

                        {/* CTA Buttons */}
                        <View className="flex-col w-full sm:w-auto sm:flex-row items-center gap-4 lg:gap-6">
                            <TouchableOpacity
                                onPress={onStartPractice}
                                activeOpacity={0.9}
                                className="w-full sm:w-auto bg-[#EB0046] px-10 py-5 lg:py-6 rounded-full lg:rounded-2xl shadow-xl shadow-[#EB0046]/25 flex-row items-center justify-center active:scale-[0.98] transition-all"
                            >
                                <Text className="text-white font-roboto-black text-[13px] uppercase tracking-[3px] mr-3">Start Practice</Text>
                                <ArrowRight size={20} color="white" strokeWidth={2.5} />
                            </TouchableOpacity>

                            <TouchableOpacity className="py-4 items-center justify-center mt-2 sm:mt-0">
                                <Text className="text-black font-roboto-bold text-[11px] uppercase tracking-[3px] border-b border-transparent hover:border-black transition-colors">View Schedule</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Desktop Visuals - Hidden on Mobile to focus on Typography */}
                    <View className="hidden lg:block w-full lg:w-[45%] h-[700px] relative">
                        <View className="absolute top-0 right-0 w-[90%] h-[90%] bg-gray-50 rounded-[60px] -rotate-3" />
                        <View className="flex-row h-full gap-5 relative z-10 p-4">
                            <View className="flex-1 gap-5 pt-12">
                                <View className="h-[55%] rounded-[40px] overflow-hidden shadow-2xl shadow-black/5">
                                    <Image source={{ uri: collageImages[0] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                                <View className="h-[35%] rounded-[40px] overflow-hidden shadow-2xl shadow-black/5">
                                    <Image source={{ uri: collageImages[1] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                            </View>
                            <View className="flex-1 gap-5">
                                <View className="h-[35%] rounded-[40px] overflow-hidden shadow-2xl shadow-black/5">
                                    <Image source={{ uri: collageImages[2] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                                <View className="h-[55%] rounded-[40px] overflow-hidden shadow-2xl shadow-black/5">
                                    <Image source={{ uri: collageImages[3] }} className="w-full h-full" resizeMode="cover" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

