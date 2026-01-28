import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import { ArrowRight } from 'lucide-react-native';

const MasterPreview = ({ name, role, image, onPress }: any) => {
    const imageSource = typeof image === 'string' ? { uri: image } : image;
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} className="mr-6 w-[280px] group">
            <View className="aspect-[3/4] rounded-[32px] overflow-hidden mb-8 bg-gray-100 shadow-2xl shadow-black/[0.03] border border-gray-50 relative">
                <Image
                    source={imageSource}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    resizeMode="cover"
                    style={Platform.select({
                        web: { objectFit: 'cover', objectPosition: 'top' } as any
                    })}
                />
                <View className="absolute inset-0 bg-black/5" />
            </View>
            <View className="px-2">
                <Text className="text-[#EB0046] font-roboto-bold text-[10px] uppercase tracking-[4px] mb-3">{role}</Text>
                <Text className="text-[26px] font-roboto-black text-black uppercase leading-[0.9] tracking-tighter group-hover:text-[#EB0046] transition-colors">{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export const MastersSection = ({ onMasterPress, onMeetAllMasters }: any) => {
    return (
        <View className="py-24 bg-[#fafafa] px-6">
            <View className="max-w-[1440px] mx-auto">
                <View className="flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
                    <View className="max-w-2xl">
                        <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-8">The Collective</Text>
                        <Text className="text-4xl md:text-5xl lg:text-7xl font-roboto-black text-black uppercase tracking-tighter leading-[0.9]">
                            Guided by the World's{"\n"}profound teachers.
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={onMeetAllMasters}
                        className="bg-black px-10 py-5 rounded-2xl self-start md:self-auto shadow-xl shadow-black/10 active:scale-95 transition-all"
                    >
                        <Text className="text-white font-roboto-bold text-[10px] uppercase tracking-[3px]">Meet All Masters</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="w-full -mx-6 px-6 lg:mx-0 lg:px-0"
                    contentContainerStyle={{ paddingRight: 24 }}
                    decelerationRate="fast"
                    snapToInterval={304} // 280px + 24px margin
                >
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
