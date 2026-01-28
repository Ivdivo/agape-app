import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const ScheduleCard = ({ time, title, instructor }: any) => (
    <View className="mr-6 bg-gray-50 p-6 rounded-2xl w-64 border border-gray-100">
        <Text className="text-[#EB0046] font-roboto-bold text-xs mb-2">{time}</Text>
        <Text className="text-black font-roboto-bold text-lg leading-tight mb-2">{title}</Text>
        <Text className="text-gray-500 font-roboto-medium text-sm">{instructor}</Text>
    </View>
);

export const ScheduleSection = () => {
    return (
        <View className="py-20 bg-white">
            <View className="max-w-[1440px] mx-auto px-6">
                <View className="flex-row justify-between items-end mb-12">
                    <View>
                        <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-4">Daily Schedule</Text>
                        <Text className="text-4xl font-roboto-black text-black uppercase tracking-tight">Today's Sessions</Text>
                    </View>
                    <TouchableOpacity>
                        <Text className="text-black font-roboto-bold text-sm uppercase tracking-widest border-b border-black">Full Calendar</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pb-4">
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
