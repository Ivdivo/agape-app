import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const MasterPreview = ({ name, role, image, onPress }: any) => (
    <TouchableOpacity onPress={onPress} className="mr-8 w-64">
        <View className="aspect-[3/4] rounded-[32px] overflow-hidden mb-6 bg-gray-100">
            <Image
                source={{ uri: image }}
                className="w-full h-full"
                resizeMode="cover"
            />
        </View>
        <Text className="text-[#EB0046] font-roboto-bold text-[10px] uppercase tracking-[3px] mb-2">{role}</Text>
        <Text className="text-black font-roboto-black text-2xl uppercase leading-none mb-2">{name}</Text>
    </TouchableOpacity>
);

export const MastersSection = ({ onMasterPress, onMeetAllMasters }: any) => {
    return (
        <View className="py-12 bg-[#fafafa] px-6">
            <View className="max-w-[1440px] mx-auto">
                <View className="flex-row justify-between items-end mb-10">
                    <View className="max-w-2xl">
                        <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-6">The Collective</Text>
                        <Text className="text-4xl md:text-6xl font-roboto-black text-black uppercase tracking-tighter leading-none">
                            Guided by the World's most profound teachers.
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={onMeetAllMasters}
                        className="flex-row items-center bg-black px-8 py-4 rounded-full"
                    >
                        <Text className="text-white font-roboto-bold text-xs uppercase tracking-widest mr-3">Meet All Masters</Text>
                        <ArrowRight size={16} color="white" />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <MasterPreview
                        name="Master Tenzin"
                        role="Zen Master"
                        image="https://images.unsplash.com/photo-1549412640-0f99fe0402b5?auto=format&fit=crop&q=80&w=600"
                        onPress={onMasterPress}
                    />
                    <MasterPreview
                        name="Sarah Jenkins"
                        role="Nature Immersion"
                        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
                        onPress={onMeetAllMasters}
                    />
                    <MasterPreview
                        name="Lama Tashi"
                        role="Tibetan Wisdom"
                        image="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=600"
                        onPress={onMeetAllMasters}
                    />
                    <MasterPreview
                        name="Dr. Elena K."
                        role="Neuroscience"
                        image="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=600"
                        onPress={onMeetAllMasters}
                    />
                </ScrollView>
            </View>
        </View>
    );
};
