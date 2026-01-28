import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Play, Calendar, Users, ArrowLeft, ArrowRight, Share2, Heart } from 'lucide-react-native';
import { Header } from '../../components/Header';
import { GlobalBackground } from '../../components/GlobalBackground';

// Local assets - you might need to adjust based on how bundler handles them.
// For Expo/Web, standard require or import often works if configured.
// Assuming we copied them to assets/masters/ and assets/library/

const tenzinImage = require('../../../assets/masters/tenzin.png');
const voidSessionImage = require('../../../assets/library/void_session.png');
const modernHallImage = require('../../../assets/library/modern_meditation.png');
const zenAltarImage = require('../../../assets/library/zen_altar.png');


const ContentCard = ({ type, title, subtitle, duration, image, live }: any) => {
    // Helper to handle both uri strings and required assets
    const imageSource = typeof image === 'string' ? { uri: image } : image;

    return (
        <TouchableOpacity className="w-full sm:w-[48%] lg:w-[31.5%] mb-12">
            <View className="aspect-video rounded-[32px] overflow-hidden bg-gray-100 relative mb-6 shadow-sm border border-gray-100">
                <Image
                    source={imageSource}
                    className="w-full h-full"
                    resizeMode="cover"
                />
                {live && (
                    <View className="absolute top-4 left-4 bg-[#EB0046] px-3 py-1 rounded-full flex-row items-center">
                        <View className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse" />
                        <Text className="text-[9px] text-white font-roboto-bold uppercase tracking-widest leading-none">Live</Text>
                    </View>
                )}
                <View className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/95 items-center justify-center shadow-lg">
                    <Play size={18} color="black" fill="black" />
                </View>
            </View>
            <View className="px-1">
                <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[3px] mb-3">{type}</Text>
                <Text className="text-xl font-roboto-black text-black leading-tight mb-3 uppercase">{title}</Text>
                <Text className="text-[10px] font-roboto-medium text-gray-400 uppercase tracking-widest">{subtitle} • {duration}</Text>
            </View>
        </TouchableOpacity>
    );
};

const AnnouncementCard = ({ title, date, image }: any) => {
    const imageSource = typeof image === 'string' ? { uri: image } : image;
    return (
        <View className="w-full bg-[#fcfcfc] rounded-[40px] border border-gray-100 p-8 flex-row flex-wrap lg:flex-nowrap items-center justify-between mb-16">
            <View className="flex-row items-center flex-1 mb-6 lg:mb-0">
                <View className="w-20 h-20 rounded-2xl overflow-hidden mr-8 shadow-sm">
                    <Image
                        source={imageSource}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>
                <View className="flex-1 pr-6">
                    <Text className="text-[9px] font-roboto-bold text-[#EB0046] uppercase tracking-[4px] mb-2">Exclusive Session</Text>
                    <Text className="text-2xl font-roboto-black text-black uppercase tracking-tight leading-none mb-2">{title}</Text>
                    <Text className="text-[11px] font-roboto-medium text-gray-400 uppercase tracking-[3px]">{date}</Text>
                </View>
            </View>
            <TouchableOpacity className="bg-black px-10 py-5 rounded-2xl flex-row items-center w-full lg:w-auto justify-center">
                <Calendar size={16} color="white" className="mr-3" />
                <Text className="text-white font-roboto-bold text-[10px] uppercase tracking-widest">Remind Me</Text>
            </TouchableOpacity>
        </View>
    );
};

export const MasterProfileScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Live Streams', 'Past Sessions', 'Videos'];

    const master = {
        name: 'Master Tenzin',
        role: 'Zen & Vipassana',
        students: '128,492',
        description: 'A dedicated practitioner with over 30 years of experience in Weavering ancient Buddhist wisdom with modern psychological insights. Specializing in clarity, presence, and peak performance protocols.',
        image: tenzinImage
    };

    return (
        <GlobalBackground>
            <Header
                onLogoPress={() => navigation.navigate('Home')}
                onBrowsePress={() => navigation.navigate('MastersList')}
            />

            <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
                {/* Hero Layout: Side-by-Side */}
                <View className="bg-white flex-row flex-wrap lg:flex-nowrap border-b border-gray-50">
                    {/* Left: Solid image column */}
                    <View className="w-full lg:w-[45%] h-[50vh] lg:h-[90vh]">
                        <Image
                            source={master.image}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    </View>

                    {/* Right: Content Column */}
                    <View className="w-full lg:w-[55%] px-8 py-16 lg:p-24 lg:justify-center">
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MastersList')}
                            className="flex-row items-center mb-16 self-start px-5 py-2.5 rounded-full bg-gray-50 border border-gray-100"
                        >
                            <ArrowLeft size={14} color="black" className="mr-3" />
                            <Text className="text-[10px] font-roboto-bold text-black uppercase tracking-widest">Back to Library</Text>
                        </TouchableOpacity>

                        <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-8">Featured Practitioner</Text>

                        {/* Responsive Name scaling */}
                        <Text className="text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-roboto-black text-black uppercase tracking-tight leading-[0.9] mb-12">
                            {master.name}
                        </Text>

                        <View className="flex-row items-center mb-12 space-x-12">
                            <View className="flex-row items-center">
                                <View className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center mr-4 border border-gray-100">
                                    <Users size={18} color="#EB0046" />
                                </View>
                                <View>
                                    <Text className="text-xl font-roboto-black text-black leading-none">{master.students}</Text>
                                    <Text className="text-[9px] font-roboto-medium text-gray-400 uppercase tracking-widest mt-1">Students</Text>
                                </View>
                            </View>
                            <View className="flex-row space-x-4">
                                <TouchableOpacity className="w-10 h-10 rounded-full border border-gray-100 items-center justify-center">
                                    <Share2 size={16} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity className="w-10 h-10 rounded-full border border-gray-100 items-center justify-center">
                                    <Heart size={16} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text className="text-lg md:text-xl text-gray-500 font-roboto-regular leading-relaxed mb-16 max-w-2xl">
                            {master.description}
                        </Text>

                        {/* CTA Card - More compact and premium */}
                        <View className="bg-white border border-gray-100 p-10 rounded-[48px] shadow-2xl shadow-gray-200/50 max-w-lg">
                            <Text className="text-[9px] font-roboto-bold text-black uppercase tracking-[5px] mb-8 text-center opacity-40">Access complete library</Text>
                            <TouchableOpacity className="bg-[#EB0046] w-full py-6 rounded-2xl items-center mb-6">
                                <Text className="text-white font-roboto-bold text-xs uppercase tracking-[4px]">Subscribe to Master</Text>
                            </TouchableOpacity>
                            <View className="flex-row items-center justify-center">
                                <View className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                                <Text className="text-[10px] font-roboto-bold text-gray-400 uppercase tracking-widest">Live session coming up</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Grid Section - Balanced padding */}
                <View className="bg-white px-6 py-24 lg:py-32">
                    <View className="max-w-[1400px] mx-auto">
                        <View className="flex-row flex-wrap items-end justify-between mb-20">
                            <View className="mb-10 lg:mb-0">
                                <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-4">Discovery Feed</Text>
                                <Text className="text-4xl md:text-6xl font-roboto-black text-black uppercase tracking-tight leading-none">The Archive</Text>
                            </View>

                            {/* Filter Tabs - Clean and properly spaced */}
                            <View className="flex-row flex-wrap gap-x-10 gap-y-4">
                                {tabs.map(tab => (
                                    <TouchableOpacity
                                        key={tab}
                                        onPress={() => setActiveTab(tab)}
                                        className="relative pb-4"
                                    >
                                        <Text className={`text-[10px] font-roboto-bold uppercase tracking-[4px] ${activeTab === tab ? 'text-black' : 'text-gray-300'}`}>
                                            {tab}
                                        </Text>
                                        {activeTab === tab && <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EB0046]" />}
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <AnnouncementCard
                            title="Embracing The Void"
                            date="Friday, Oct 24 • 14:00 GMT"
                            image={voidSessionImage}
                        />

                        <View className="flex-row flex-wrap justify-between">
                            <ContentCard
                                live={true}
                                type="Live Stream"
                                title="Clarity in Motion"
                                subtitle="ZEN PRACTICE"
                                duration="45 MIN"
                                image={tenzinImage} // Re-using tenzin for demo or generic zen
                            />
                            <ContentCard
                                type="Workshop"
                                title="Neural Reset Protocol"
                                subtitle="NEUROFOCUS"
                                duration="1:30 HR"
                                image={modernHallImage}
                            />
                            <ContentCard
                                type="Session"
                                title="The Silent Way"
                                subtitle="VIPASSANA"
                                duration="30 MIN"
                                image={zenAltarImage}
                            />
                            <ContentCard
                                type="Short"
                                title="Breath of Fire"
                                subtitle="QUICK PRACTICE"
                                duration="05 MIN"
                                image={tenzinImage}
                            />
                            <ContentCard
                                type="History"
                                title="Lineage of Presence"
                                subtitle="DOCUMENTARY"
                                duration="12 MIN"
                                image="https://images.unsplash.com/photo-1512438248548-3b53e843117b?auto=format&fit=crop&q=80&w=800"
                            />
                            <ContentCard
                                type="Live Stream"
                                title="Deep Rest Connection"
                                subtitle="MEDITATION"
                                duration="60 MIN"
                                image={modernHallImage}
                            />
                        </View>
                    </View>
                </View>

                {/* Footer Section */}
                <View className="bg-gray-50 py-32 px-6 items-center">
                    <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[10px] mb-10">Ascend</Text>
                    <Text className="text-4xl md:text-5xl font-roboto-black text-black uppercase tracking-tight text-center mb-12 max-w-3xl">
                        Deepen your practice through direct 1:1 mentorship.
                    </Text>
                    <TouchableOpacity className="bg-black px-12 py-6 rounded-2xl shadow-xl shadow-black/10">
                        <Text className="text-white font-roboto-bold text-[11px] uppercase tracking-[4px]">Request Private Session</Text>
                    </TouchableOpacity>
                </View>

                <View className="py-16 bg-white items-center border-t border-gray-100">
                    <Text className="text-xl font-roboto-black tracking-tighter text-black uppercase mb-3">agápē</Text>
                    <Text className="text-gray-400 text-[10px] font-roboto-bold uppercase tracking-widest">© 2026 AGAPE SPIRITUAL LABORATORY</Text>
                </View>
            </ScrollView>
        </GlobalBackground>
    );
};
