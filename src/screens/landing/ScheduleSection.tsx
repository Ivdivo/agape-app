import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const ScheduleCard = ({ time, title, instructor }: any) => (
    <TouchableOpacity activeOpacity={0.9} className="mr-6 bg-white p-8 rounded-[36px] w-[280px] border border-gray-100 shadow-xl shadow-black/[0.04] active:scale-[0.98] transition-all group">
        <View className="flex-row items-center mb-5">
            <View className="w-1.5 h-1.5 rounded-full bg-[#EB0046] mr-2.5 animate-pulse" />
            <Text className="text-[#EB0046] font-roboto-bold text-[10px] uppercase tracking-[3px]">{time}</Text>
        </View>
        <Text className="text-black font-roboto-black text-2xl leading-[0.95] mb-4 uppercase tracking-tighter group-hover:text-[#EB0046] transition-colors">{title}</Text>
        <View className="flex-row items-center border-t border-gray-50 pt-4">
            <Text className="text-gray-400 font-roboto-medium text-[10px] uppercase tracking-[2px]">{instructor}</Text>
        </View>
    </TouchableOpacity>
);

export const ScheduleSection = () => {
    return (
        <View className="py-12 bg-white px-6">
            <View className="max-w-[1440px] mx-auto">
                <View className="flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <View>
                        <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-4">The Stream</Text>
                        <Text className="text-4xl md:text-5xl font-roboto-black text-black uppercase tracking-tighter leading-none">
                            Today's{"\n"}Sessions
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text className="text-black font-roboto-bold text-[10px] uppercase tracking-[3px] border-b-2 border-black/5 pb-2">Full Calendar</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="pb-12 -mx-6 px-6 lg:mx-0 lg:px-0"
                    decelerationRate="fast"
                    snapToInterval={312} // 280px width + 24px margin
                >
                    <ScheduleCard time="07:00 AM" title="Morning Clarity" instructor="Master Tenzin" />
                    <ScheduleCard time="09:30 AM" title="Deep Focus" instructor="Sarah Jenkins" />
                    <ScheduleCard time="12:00 PM" title="Midday Reset" instructor="Lama Tashi" />
                    <ScheduleCard time="04:00 PM" title="Breath & Flow" instructor="Marcus Thorne" />
                    <ScheduleCard time="08:00 PM" title="Evening Unwind" instructor="Aisha Rahman" />
                </ScrollView>
            </View>
        </View>
    );
};
