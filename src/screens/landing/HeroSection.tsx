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
        <View className="bg-white px-6 py-12 lg:py-16">
            <View className="max-w-[1440px] mx-auto">
                <View className="flex-col lg:flex-row items-center lg:items-start" style={{ gap: 48 }}>
                    {/* Left Content */}
                    <View className="w-full lg:w-[52%] flex-col justify-center">
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

                        <Text className="text-base md:text-lg text-gray-500 font-roboto-regular leading-relaxed mb-8 pr-8">
                            A 24/7 live sanctuary. Shape your inner state and refine your focus through guided presence and ancient wisdom.
                        </Text>

                        <View className="mb-10 w-full">
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
                    <View className="w-full lg:w-[48%] relative" style={{ minHeight: 600 }}>
                        <View style={{ flexDirection: 'row', height: 600, gap: 16 }}>
                            {/* Left Column */}
                            <View style={{ flex: 1, gap: 16, paddingTop: 32 }}>
                                <View style={{ height: 360, borderRadius: 32, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 }}>
                                    <Image source={{ uri: collageImages[0] }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                                </View>
                                <View style={{ height: 200, borderRadius: 32, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 }}>
                                    <Image source={{ uri: collageImages[1] }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                                </View>
                            </View>

                            {/* Right Column */}
                            <View style={{ flex: 1, gap: 16 }}>
                                <View style={{ height: 200, borderRadius: 32, overflow: 'hidden', backgroundColor: '#f5f5f5', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 }}>
                                    <Image source={{ uri: collageImages[2] }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                                </View>
                                <View style={{ height: 360, borderRadius: 32, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 }}>
                                    <Image source={{ uri: collageImages[3] }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                                </View>
                            </View>
                        </View>

                        {/* Decorative background element */}
                        <View style={{ position: 'absolute', right: -40, top: 80, width: 320, height: 320, backgroundColor: 'rgba(235, 0, 70, 0.1)', borderRadius: 160, zIndex: -1 }} />
                        <View style={{ position: 'absolute', left: -40, bottom: 0, width: 240, height: 240, backgroundColor: 'rgba(219, 234, 254, 0.2)', borderRadius: 120, zIndex: -1 }} />
                    </View>
                </View>
            </View>
        </View>
    );
};

