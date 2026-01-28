import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, Platform, Dimensions } from 'react-native';
import { Play, Calendar, Users, ArrowLeft, Share2, Heart, ArrowRight } from 'lucide-react-native';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GlobalBackground } from '../../components/GlobalBackground';

// Local asset
const tenzinPortrait = require('../../../assets/masters/tenzin.png');
const voidSessionImage = require('../../../assets/library/void_session.png');

// High-res landscape images for video thumbnails
const THUMBNAILS = {
    zen: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop',
    meditation: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1000&auto=format&fit=crop',
    nature: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
    candle: 'https://images.unsplash.com/photo-1609154767012-331529e7d73b?q=80&w=1000&auto=format&fit=crop',
    abstract: 'https://images.unsplash.com/photo-1512438248548-3b53e843117b?q=80&w=1000&auto=format&fit=crop',
};

// --- Subcomponents ---

const ContentCard = ({ type, title, subtitle, duration, image, live }: any) => {
    // Safety check for image source
    const imageSource = typeof image === 'string' ? { uri: image } : image;

    return (
        <TouchableOpacity className="w-full md:w-[48%] lg:w-[32%] mb-10 group">
            {/* Card Image Container */}
            <View className="aspect-video rounded-[24px] overflow-hidden bg-gray-100 relative mb-4 shadow-sm border border-gray-100">
                <Image
                    source={imageSource}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    resizeMode="cover"
                />

                {/* Live Tag */}
                {live && (
                    <View className="absolute top-4 left-4 bg-[#EB0046] px-3 py-1.5 rounded-full flex-row items-center shadow-md">
                        <View className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse" />
                        <Text className="text-[9px] text-white font-roboto-bold uppercase tracking-widest leading-none">Live</Text>
                    </View>
                )}

                {/* Play Button Overlay */}
                <View className="absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                    <View className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md items-center justify-center border border-white/50">
                        <Play size={20} color="white" fill="white" />
                    </View>
                </View>
            </View>

            {/* Meta Info */}
            <View className="px-1">
                <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-[9px] font-roboto-bold text-[#EB0046] uppercase tracking-[2px]">{type}</Text>
                    <Text className="text-[9px] font-roboto-medium text-gray-400 uppercase tracking-widest">{duration}</Text>
                </View>
                <Text className="text-lg font-roboto-bold text-black leading-tight mb-1 group-hover:text-[#EB0046] transition-colors">{title}</Text>
                <Text className="text-[10px] font-roboto-medium text-gray-500 uppercase tracking-widest">{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

const AnnouncementCard = ({ title, date, image }: any) => {
    const imageSource = typeof image === 'string' ? { uri: image } : image;
    return (
        <View className="w-full bg-white rounded-[40px] border border-gray-100 p-8 flex-row flex-wrap lg:flex-nowrap items-center justify-between mb-16 shadow-xl shadow-gray-100/40">
            <View className="flex-row items-center flex-1 mb-6 lg:mb-0 min-w-[300px]">
                <View className="w-24 h-24 rounded-2xl overflow-hidden mr-6 shadow-md bg-gray-200">
                    <Image
                        source={imageSource}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>
                <View className="flex-1 pr-4">
                    <View className="flex-row items-center mb-2">
                        <View className="w-1.5 h-1.5 rounded-full bg-[#EB0046] mr-2" />
                        <Text className="text-[9px] font-roboto-bold text-[#EB0046] uppercase tracking-[3px]">Next Live Session</Text>
                    </View>
                    <Text className="text-2xl font-roboto-black text-black uppercase tracking-tight leading-none mb-2">{title}</Text>
                    <View className="flex-row items-center">
                        <Calendar size={14} color="#9ca3af" className="mr-2" />
                        <Text className="text-[11px] font-roboto-medium text-gray-400 uppercase tracking-[2px]">{date}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                className="bg-black px-8 py-4 rounded-xl flex-row items-center hover:bg-gray-800 transition-colors"
                onPress={() => Alert.alert("Calendar", "Event added to your calendar.")}
            >
                <Text className="text-white font-roboto-bold text-[10px] uppercase tracking-[3px] mr-2">Notify Me</Text>
                <ArrowRight size={14} color="white" />
            </TouchableOpacity>
        </View>
    );
};

// --- Main Screen ---

export const MasterProfileScreen = ({ navigation }: any) => {
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Live Streams', 'Past Sessions', 'Videos'];

    const master = {
        name: 'Master Tenzin',
        role: 'Zen & Vipassana',
        students: '128,492',
        description: 'A dedicated practitioner with over 30 years of experience in weaving ancient Buddhist philosophy with modern cognitive science.',
        image: tenzinPortrait
    };

    return (
        <GlobalBackground>
            <Header
                onLogoPress={() => navigation.navigate('Home')}
                onBrowsePress={() => navigation.navigate('MastersList')}
            />

            <ScrollView showsVerticalScrollIndicator={false} className="bg-white">

                {/* 
                    HERO SECTION 
                    Layout: Flex row. 
                    Desktop (lg): Height constrained to 90vh (not full screen, to allow hint of scroll).
                    Image: Object position customized for web.
                */}
                <View className="bg-white flex-row flex-wrap lg:flex-nowrap border-b border-gray-50 lg:min-h-[800px] lg:h-[90vh]">

                    {/* Left Column: Image */}
                    <View className="w-full lg:w-[45%] h-[50vh] lg:h-full bg-gray-100 overflow-hidden relative">
                        <Image
                            source={master.image}
                            className="w-full h-full"
                            style={Platform.select({
                                web: { objectFit: 'contain', objectPosition: 'center center' } as any
                            })}
                            resizeMode="contain"
                        />
                        {/* Gradient not needed if image is good, but adding subtle overlay helps text pop if we overlay it. Here we don't. */}
                    </View>

                    {/* Right Column: Info */}
                    <View className="w-full lg:w-[55%] flex-1 justify-center bg-white px-8 py-16 lg:px-24">
                        <View className="max-w-2xl">
                            <TouchableOpacity
                                onPress={() => navigation.navigate('MastersList')}
                                className="flex-row items-center mb-10 self-start px-4 py-2 rounded-full border border-gray-200 hover:border-black transition-colors"
                            >
                                <ArrowLeft size={14} color="black" className="mr-2" />
                                <Text className="text-[10px] font-roboto-bold text-black uppercase tracking-widest">Directory</Text>
                            </TouchableOpacity>

                            <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-6">Master Profile</Text>

                            <Text className="text-5xl md:text-7xl lg:text-8xl font-roboto-black text-black uppercase tracking-tighter leading-[0.9] mb-8">
                                {master.name}
                            </Text>

                            <View className="flex-row items-center mb-10 gap-8">
                                <View className="flex-row items-center">
                                    <View className="w-8 h-8 rounded-full bg-[#EB0046] items-center justify-center mr-3">
                                        <Users size={14} color="white" />
                                    </View>
                                    <View>
                                        <Text className="text-lg font-roboto-bold text-black leading-none">{master.students}</Text>
                                        <Text className="text-[9px] font-roboto-medium text-gray-400 uppercase tracking-widest">Students</Text>
                                    </View>
                                </View>
                                <View className="flex-row gap-3">
                                    <TouchableOpacity className="w-10 h-10 rounded-full border border-gray-200 items-center justify-center hover:bg-gray-100">
                                        <Share2 size={16} color="black" />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-10 h-10 rounded-full border border-gray-200 items-center justify-center hover:bg-gray-100">
                                        <Heart size={16} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text className="text-lg text-gray-500 font-roboto-regular leading-relaxed mb-12 max-w-lg">
                                {master.description}
                            </Text>

                            {/* Subscription CTA */}
                            <View className="w-full bg-gray-50 border border-gray-100 p-8 rounded-[32px]">
                                <View className="flex-row justify-between items-center mb-6">
                                    <Text className="text-[10px] font-roboto-bold text-gray-400 uppercase tracking-widest">Full Access Pass</Text>
                                    <View className="bg-green-100 px-3 py-1 rounded-full">
                                        <Text className="text-[9px] font-roboto-bold text-green-700 uppercase tracking-widest">Available Now</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    className="bg-[#EB0046] w-full py-5 rounded-2xl items-center shadow-lg shadow-[#EB0046]/20 mb-4 hover:bg-[#c9003c] active:scale-95 transition-all"
                                    onPress={() => Alert.alert("Success", "Subscription active")}
                                >
                                    <Text className="text-white font-roboto-bold text-sm uppercase tracking-[4px]">Subscribe to Master</Text>
                                </TouchableOpacity>
                                <Text className="text-center text-[10px] text-gray-400">Cancel anytime. 7-day free trial included.</Text>
                            </View>
                        </View>
                    </View>
                </View>


                {/* CONTENT FEED */}
                <View className="px-6 py-24 bg-white">
                    <View className="max-w-[1400px] mx-auto">

                        {/* Header */}
                        <View className="mb-20">
                            <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-4">The Archive</Text>
                            <View className="flex-row flex-wrap justify-between items-end border-b border-gray-100 pb-8">
                                <Text className="text-4xl md:text-5xl font-roboto-black text-black uppercase tracking-tight leading-none mb-6 lg:mb-0">
                                    Teachings & Sessions
                                </Text>

                                {/* Tabs */}
                                <View className="flex-row flex-wrap gap-8">
                                    {tabs.map(tab => (
                                        <TouchableOpacity
                                            key={tab}
                                            onPress={() => setActiveTab(tab)}
                                            className="group relative py-2"
                                        >
                                            <Text className={`text-[11px] font-roboto-bold uppercase tracking-[3px] transition-colors ${activeTab === tab ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                                                {tab}
                                            </Text>
                                            {activeTab === tab && <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>

                        {/* Sections */}
                        <View className="min-h-[600px]">
                            {/* Upcoming */}
                            {(activeTab === 'All' || activeTab === 'Live Streams') && (
                                <View>
                                    <Text className="text-[10px] font-roboto-bold text-gray-400 uppercase tracking-widest mb-8 ml-2">Featured Broadcast</Text>
                                    <AnnouncementCard
                                        title="Embracing The Void: Advanced Technique"
                                        date="Fri, Oct 24 • 14:00 GMT"
                                        image={voidSessionImage}
                                    />
                                </View>
                            )}

                            {/* Grid */}
                            <Text className="text-[10px] font-roboto-bold text-gray-400 uppercase tracking-widest mb-8 ml-2">Latest Documentation</Text>
                            <View className="flex-row flex-wrap justify-between">
                                <ContentCard
                                    live={false}
                                    type="Recorded Stream"
                                    title="Clarity in Motion"
                                    subtitle="ZEN PRACTICE"
                                    duration="45 MIN"
                                    image={THUMBNAILS.zen}
                                />
                                <ContentCard
                                    type="Workshop"
                                    title="Neural Reset"
                                    subtitle="NEUROFOCUS"
                                    duration="1h 30m"
                                    image={THUMBNAILS.meditation}
                                />
                                <ContentCard
                                    type="Session"
                                    title="The Silent Way"
                                    subtitle="VIPASSANA"
                                    duration="30 MIN"
                                    image={THUMBNAILS.candle}
                                />
                                <ContentCard
                                    type="Technique"
                                    title="Breath of Fire"
                                    subtitle="PRANAYAMA"
                                    duration="05 MIN"
                                    image={THUMBNAILS.abstract}
                                />
                                <ContentCard
                                    type="Documentary"
                                    title="Lineage of Presence"
                                    subtitle="ORIGINS"
                                    duration="12 MIN"
                                    image={THUMBNAILS.nature}
                                />
                                <ContentCard
                                    type="Meditation"
                                    title="Deep Rest Connection"
                                    subtitle="NSDR"
                                    duration="60 MIN"
                                    image={THUMBNAILS.meditation}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Footer Component */}
                <Footer />
            </ScrollView>
        </GlobalBackground>
    );
};
