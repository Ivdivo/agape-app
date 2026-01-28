import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const MasterPreview = ({ name, role, image, onPress }: any) => {
    const imageSource = typeof image === 'string' ? { uri: image } : image;
    return (
        <TouchableOpacity onPress={onPress} className="mr-8 w-64">
            <View className="aspect-[3/4] rounded-[32px] overflow-hidden mb-6 bg-gray-100">
                <Image
                    source={imageSource}
                    className="w-full h-full"
                    resizeMode="contain"
                />
            </View>
            <Text className="text-[#EB0046] font-roboto-bold text-[10px] uppercase tracking-[3px] mb-2">{role}</Text>
            <Text className="text-black font-roboto-black text-2xl uppercase leading-none mb-2">{name}</Text>
        </TouchableOpacity>
    );
};

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
                        image={require('../../../assets/masters/tenzin.png')}
                        onPress={onMasterPress}
                    />
                    <MasterPreview
                        name="Sarah Jenkins"
                        role="Nature Immersion"
                        image={require('../../../assets/masters/sarah.png')}
                        onPress={onMeetAllMasters}
                    />
                    <MasterPreview
                        name="Lama Tashi"
                        role="Tibetan Wisdom"
                        image={require('../../../assets/masters/tashi.png')}
                        onPress={onMeetAllMasters}
                    />
                    <MasterPreview
                        name="Dr. Elena K."
                        role="Neuroscience"
                        image={require('../../../assets/masters/elena.png')}
                        onPress={onMeetAllMasters}
                    />
                </ScrollView>
            </View>
        </View>
    );
};
