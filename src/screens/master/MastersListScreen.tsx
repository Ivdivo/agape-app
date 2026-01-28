import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Search, Filter, ArrowRight, User } from 'lucide-react-native';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GlobalBackground } from '../../components/GlobalBackground';

const MASTERS_DATA = [
    {
        id: '1',
        name: 'Master Tenzin',
        role: 'Zen & Vipassana',
        image: require('../../../assets/masters/tenzin.png'), // Updated to local asset if available, fallback to uri if strict type needed but let's assume assets exist
        bio: '30 years of intersection between ancient Buddhist philosophy and modern cognitive science.',
        students: '128K',
        tags: ['Zen', 'Meditation']
    },
    {
        id: '2',
        name: 'Sarah Jenkins',
        role: 'Nature Immersion',
        image: { uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop' },
        bio: 'Connecting modern souls with the rhythmic healing of the natural world through guided presence.',
        students: '45K',
        tags: ['Nature', 'Healing']
    },
    {
        id: '3',
        name: 'Lama Tashi',
        role: 'Tibetan Wisdom',
        image: { uri: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800&auto=format&fit=crop' },
        bio: 'Traditional lineage holder bringing profound Tibetan insights to modern daily challenges.',
        students: '82K',
        tags: ['Tibetan', 'Ancient']
    },
    {
        id: '4',
        name: 'Dr. Elena K.',
        role: 'Neuroscience',
        image: { uri: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=800&auto=format&fit=crop' },
        bio: 'Bridging the gap between neurobiology and mindfulness for peak cognitive performance.',
        students: '96K',
        tags: ['Science', 'Performance']
    },
    {
        id: '5',
        name: 'Marcus Thorne',
        role: 'Breathwork',
        image: { uri: 'https://images.unsplash.com/photo-1512438248548-3b53e843117b?q=80&w=800&auto=format&fit=crop' },
        bio: 'Mastering the art of conscious breathing to unlock physical and emotional breakthroughs.',
        students: '54K',
        tags: ['Breath', 'Body']
    },
    {
        id: '6',
        name: 'Aisha Rahman',
        role: 'Sufi Meditation',
        image: { uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop' },
        bio: 'Exploring the path of the heart through rhythm, movement, and Sufi wisdom traditions.',
        students: '31K',
        tags: ['Heart', 'Sufi']
    },
    {
        id: '7',
        name: 'Kenji Watanabe',
        role: 'Mindful Movement',
        image: { uri: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop' },
        bio: 'Integrating movement and stillness to cultivate a state of flow in every action.',
        students: '67K',
        tags: ['Movement', 'Flow']
    },
    {
        id: '8',
        name: 'Maria Santos',
        role: 'Emotional Intelligence',
        image: { uri: 'https://images.unsplash.com/photo-1499209974431-9dac3dc5c27d?q=80&w=800&auto=format&fit=crop' },
        bio: 'Expert guidance on navigating the complex landscape of human emotions with grace.',
        students: '42K',
        tags: ['EQ', 'Relationships']
    }
];

const MasterCard = ({ master, onPress }: any) => {
    // Handle image source being either require(...) or {uri: ...}
    const imageSource = master.id === '1' ? master.image : master.image;

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="w-full md:w-[48%] lg:w-[23.5%] mb-12"
            onPress={onPress}
        >
            <View className="aspect-[3/4] rounded-[48px] overflow-hidden mb-8 bg-gray-50 border border-gray-100 shadow-sm relative">
                <Image
                    source={imageSource}
                    className="w-full h-full"
                    resizeMode="cover"
                />
                <View className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-white/95 backdrop-blur-xl items-center justify-center shadow-xl">
                    <ArrowRight size={20} color="black" />
                </View>
            </View>
            <View className="px-4">
                <Text className="text-xs font-roboto-bold text-[#EB0046] uppercase tracking-[4px] mb-3">{master.role}</Text>
                <Text className="text-2xl font-roboto-black text-black uppercase tracking-tight leading-[1.1] mb-3">{master.name}</Text>
                <View className="flex-row items-center">
                    <View className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                    <Text className="text-[10px] font-roboto-medium text-gray-400 uppercase tracking-widest">{master.students} PRACTITIONERS</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export const MastersListScreen = ({ onMasterPress, onBack }: { onMasterPress: (masterId: string) => void, onBack: () => void }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState('All');

    const tags = ['All', 'Zen', 'Meditation', 'Nature', 'Science', 'Breath', 'Movement'];

    const featuredMaster = MASTERS_DATA[0];
    const otherMasters = MASTERS_DATA.slice(1);

    const filteredMasters = otherMasters.filter(master => {
        const matchesSearch = master.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            master.role.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag === 'All' || master.tags.includes(selectedTag);
        return matchesSearch && matchesTag;
    });

    return (
        <GlobalBackground>
            <Header onLogoPress={onBack} onBrowsePress={() => { }} />
            <ScrollView showsVerticalScrollIndicator={false} className="bg-white">
                {/* Featured Master Section (Matches Uploaded Image Style) */}
                <View className="bg-white border-b border-gray-50">
                    <View className="max-w-[1400px] mx-auto flex-row flex-wrap lg:flex-nowrap">
                        {/* Master Image */}
                        <View className="w-full lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:h-[850px]">
                            <Image
                                source={featuredMaster.image}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                        </View>

                        {/* Master Info */}
                        <View className="w-full lg:w-1/2 p-8 lg:p-20 justify-center">
                            <Text className="text-[11px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-12">FEATURED MASTER</Text>

                            <Text className="text-4xl md:text-5xl lg:text-7xl font-roboto-black text-black uppercase tracking-tighter leading-[0.9] mb-12">
                                {featuredMaster.role} MASTER
                            </Text>

                            <View className="flex-row items-center mb-12 self-start bg-gray-50/80 px-8 py-5 rounded-full border border-gray-100">
                                <View className="w-10 h-10 rounded-full bg-white items-center justify-center mr-5 shadow-sm">
                                    <User size={18} color="#EB0046" />
                                </View>
                                <View>
                                    <Text className="text-2xl font-roboto-black text-black leading-none mb-1">{featuredMaster.students}</Text>
                                    <Text className="text-[10px] font-roboto-bold text-gray-400 uppercase tracking-widest">ACTIVE PRACTITIONERS</Text>
                                </View>
                            </View>

                            <Text className="text-xl md:text-2xl text-gray-500 font-roboto-regular leading-relaxed mb-16 max-w-xl">
                                {featuredMaster.bio}
                            </Text>

                            {/* Subscription Card */}
                            <View className="bg-white border border-gray-100 p-12 rounded-[48px] shadow-2xl shadow-gray-100/50">
                                <Text className="text-xs font-roboto-bold text-black uppercase tracking-[6px] mb-10 text-center">Start your practice today</Text>
                                <TouchableOpacity
                                    className="bg-[#EB0046] w-full py-6 rounded-2xl items-center mb-8"
                                    onPress={() => onMasterPress(featuredMaster.id)}
                                >
                                    <Text className="text-white font-roboto-bold text-lg uppercase tracking-[4px]">Subscribe</Text>
                                </TouchableOpacity>
                                <View className="flex-row items-center justify-center">
                                    <View className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                                    <Text className="text-[11px] font-roboto-medium text-gray-400 uppercase tracking-widest">Next session in 2 hours</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Directory Header Section */}
                <View className="bg-gray-50/30 px-6 py-32 border-b border-gray-100">
                    <View className="max-w-[1400px] mx-auto flex-row flex-wrap items-end justify-between">
                        <View className="mb-12 lg:mb-0">
                            <Text className="text-xs font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-6">The Collective</Text>
                            <Text className="text-4xl md:text-6xl lg:text-[100px] font-roboto-black text-black uppercase tracking-tighter leading-[0.85]">
                                Meet Your{"\n"}World-Class{"\n"}Guides
                            </Text>
                        </View>
                        <View className="w-full lg:w-[500px] flex-row items-center border-b-2 border-black pb-4">
                            <Search size={28} color="black" />
                            <TextInput
                                className="ml-6 flex-1 text-xl font-roboto-medium"
                                placeholder="SEARCH DIRECTORY..."
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                placeholderTextColor="#9ca3af"
                            />
                        </View>
                    </View>
                </View>

                {/* Filter Navigation */}
                <View className="bg-white px-6 py-12 border-b border-gray-50">
                    <View className="max-w-[1400px] mx-auto">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                            {tags.map(tag => (
                                <TouchableOpacity
                                    key={tag}
                                    onPress={() => setSelectedTag(tag)}
                                    className={`px-12 py-5 rounded-full mr-5 border ${selectedTag === tag ? 'bg-black border-black shadow-lg' : 'bg-white border-gray-200'}`}
                                >
                                    <Text className={`text-[11px] font-roboto-bold uppercase tracking-[4px] ${selectedTag === tag ? 'text-white' : 'text-gray-500'}`}>
                                        {tag}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>

                {/* Main Grid */}
                <View className="px-6 py-32 bg-white">
                    <View className="max-w-[1400px] mx-auto">
                        {filteredMasters.length > 0 ? (
                            <View className="flex-row flex-wrap justify-between">
                                {filteredMasters.map(master => (
                                    <MasterCard
                                        key={master.id}
                                        master={master}
                                        onPress={() => onMasterPress(master.id)}
                                    />
                                ))}
                            </View>
                        ) : (
                            <View className="py-48 items-center justify-center">
                                <Text className="text-2xl font-roboto-black text-gray-300 uppercase tracking-[10px]">No results found</Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* Final Premium CTA */}
                <View className="bg-[#0a0a0a] py-56 px-6">
                    <View className="max-w-[1400px] mx-auto items-center">
                        <Text className="text-[#EB0046] font-roboto-bold text-sm uppercase tracking-[12px] mb-16">The Sanctuary</Text>
                        <Text className="text-4xl md:text-7xl lg:text-[110px] font-roboto-black text-white uppercase tracking-tighter text-center leading-[0.8] mb-24 max-w-5xl">
                            Unlock Your{"\n"}Highest Potential.
                        </Text>
                        <TouchableOpacity className="bg-white px-24 py-10 rounded-full shadow-2xl shadow-white/10">
                            <Text className="text-black font-roboto-black text-xl uppercase tracking-[6px]">Join The Community</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Footer />
            </ScrollView>
        </GlobalBackground>
    );
};
