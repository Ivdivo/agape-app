import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { Search, ArrowRight, User } from 'lucide-react-native';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GlobalBackground } from '../../components/GlobalBackground';

// Ensure consistent layout for different screen sizes
const { height: screenHeight } = Dimensions.get('window');

const MASTERS_DATA = [
    {
        id: '1',
        name: 'Master Tenzin',
        role: 'Zen & Vipassana',
        image: require('../../../assets/masters/tenzin.png'),
        bio: '30 years of intersection between ancient Buddhist philosophy and modern cognitive science.',
        students: '128K',
        tags: ['Zen', 'Meditation']
    },
    {
        id: '2',
        name: 'Sarah Jenkins',
        role: 'Nature Immersion',
        image: require('../../../assets/masters/sarah.png'),
        bio: 'Connecting modern souls with the rhythmic healing of the natural world through guided presence.',
        students: '45K',
        tags: ['Nature', 'Healing']
    },
    {
        id: '3',
        name: 'Lama Tashi',
        role: 'Tibetan Wisdom',
        image: require('../../../assets/masters/tashi.png'),
        bio: 'Traditional lineage holder bringing profound Tibetan insights to modern daily challenges.',
        students: '82K',
        tags: ['Tibetan', 'Ancient']
    },
    {
        id: '4',
        name: 'Dr. Elena K.',
        role: 'Neuroscience',
        image: require('../../../assets/masters/elena.png'),
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
    },
    {
        id: '9',
        name: 'Kaito Tanaka',
        role: 'Sound Healing',
        image: { uri: 'https://images.unsplash.com/photo-1545209118-0e8adca010b4?q=80&w=800&auto=format&fit=crop' },
        bio: 'Using vibrational frequency and soundscapes to restore harmonic balance to the nervous system.',
        students: '38K',
        tags: ['Sound', 'Restoration']
    }
];

const MasterCard = ({ master, onPress }: any) => {
    const imageSource = typeof master.image === 'number' ? master.image : master.image;

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="w-full md:w-[48%] lg:w-[23%] mb-12"
            onPress={onPress}
        >
            <View className="aspect-[3/4] rounded-[40px] overflow-hidden mb-6 bg-gray-50 border border-gray-100 shadow-sm relative group">
                <Image
                    source={imageSource}
                    className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    resizeMode="cover"
                />
                <View className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/95 backdrop-blur-xl items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                    <ArrowRight size={18} color="black" />
                </View>
            </View>
            <View className="px-2">
                <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[3px] mb-2">{master.role}</Text>
                <Text className="text-xl font-roboto-black text-black uppercase tracking-tight leading-none mb-2">{master.name}</Text>
                <View className="flex-row items-center">
                    <View className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                    <Text className="text-[9px] font-roboto-medium text-gray-400 uppercase tracking-widest">{master.students} PRACTITIONERS</Text>
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
                {/* Featured Master Section - Desktop: ONE FOLD Fixed Height */}
                <View className="bg-white border-b border-gray-50">
                    <View className="w-full flex-col lg:flex-row lg:h-[calc(100vh-80px)] lg:min-h-[700px] lg:max-h-[950px]">

                        {/* Master Image - Takes up EXACTLY full height of container on desktop */}
                        <View className="w-full lg:w-1/2 h-[50vh] lg:h-full bg-gray-50 overflow-hidden relative">
                            <Image
                                source={featuredMaster.image}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                            {/* Decorative overlay for better text contrast if we had overlay text, but we don't. Kept clean. */}
                        </View>

                        {/* Master Info - Centered vertically in its fold */}
                        <View className="w-full lg:w-1/2 px-8 py-16 lg:px-24 lg:justify-center flex-1">
                            <View className="max-w-xl">
                                <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-8">FEATURED MASTER</Text>

                                <Text className="text-5xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-roboto-black text-black uppercase tracking-tighter leading-[0.9] mb-10">
                                    {featuredMaster.role} MASTER
                                </Text>

                                <View className="flex-row items-center mb-10 bg-gray-50/80 px-6 py-4 rounded-full border border-gray-100 self-start">
                                    <View className="w-8 h-8 rounded-full bg-white items-center justify-center mr-4 shadow-sm">
                                        <User size={14} color="#EB0046" />
                                    </View>
                                    <View>
                                        <Text className="text-xl font-roboto-black text-black leading-none">{featuredMaster.students}</Text>
                                        <Text className="text-[9px] font-roboto-bold text-gray-400 uppercase tracking-widest">ACTIVE PRACTITIONERS</Text>
                                    </View>
                                </View>

                                <Text className="text-lg text-gray-500 font-roboto-regular leading-relaxed mb-12">
                                    {featuredMaster.bio}
                                </Text>

                                {/* Subscription Card - Compact */}
                                <View className="bg-white border border-gray-200 p-8 rounded-[40px] shadow-xl shadow-gray-100/50">
                                    <Text className="text-[10px] font-roboto-bold text-black uppercase tracking-[4px] mb-6 text-center opacity-60">Begin your journey</Text>
                                    <TouchableOpacity
                                        className="bg-[#EB0046] w-full py-5 rounded-2xl items-center mb-6 shadow-md shadow-[#EB0046]/20 active:opacity-90"
                                        onPress={() => onMasterPress(featuredMaster.id)}
                                    >
                                        <Text className="text-white font-roboto-bold text-sm uppercase tracking-[3px]">Subscribe Now</Text>
                                    </TouchableOpacity>
                                    <View className="flex-row items-center justify-center">
                                        <View className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
                                        <Text className="text-[10px] font-roboto-medium text-gray-400 uppercase tracking-widest">Live in 2h</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Directory Header Section */}
                <View className="bg-gray-50/30 px-6 py-24 border-b border-gray-100">
                    <View className="max-w-[1440px] mx-auto flex-row flex-wrap items-end justify-between">
                        <View className="mb-12 lg:mb-0">
                            <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-6">The Collective</Text>
                            <Text className="text-4xl md:text-6xl lg:text-[80px] font-roboto-black text-black uppercase tracking-tighter leading-[0.9]">
                                Meet Your{"\n"}World-Class{"\n"}Guides
                            </Text>
                        </View>
                        <View className="w-full lg:w-[400px]">
                            <View className="flex-row items-center border-b border-black/10 pb-4">
                                <Search size={24} color="black" />
                                <TextInput
                                    className="ml-4 flex-1 text-lg font-roboto-medium"
                                    placeholder="SEARCH DIRECTORY..."
                                    value={searchQuery}
                                    onChangeText={setSearchQuery}
                                    placeholderTextColor="#9ca3af"
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Filter Navigation */}
                <View className="bg-white px-6 py-10 border-b border-gray-50 sticky top-0 z-10 backdrop-blur-md bg-white/95">
                    <View className="max-w-[1440px] mx-auto">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
                            {tags.map(tag => (
                                <TouchableOpacity
                                    key={tag}
                                    onPress={() => setSelectedTag(tag)}
                                    className={`px-8 py-3 rounded-full mr-3 border transition-all ${selectedTag === tag ? 'bg-black border-black' : 'bg-white border-gray-200'}`}
                                >
                                    <Text className={`text-[10px] font-roboto-bold uppercase tracking-[3px] ${selectedTag === tag ? 'text-white' : 'text-gray-500'}`}>
                                        {tag}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>

                {/* Main Grid */}
                <View className="px-6 py-24 bg-white min-h-[50vh]">
                    <View className="max-w-[1440px] mx-auto">
                        {filteredMasters.length > 0 ? (
                            <View className="flex-row flex-wrap justify-between">
                                {filteredMasters.map(master => (
                                    <MasterCard
                                        key={master.id}
                                        master={master}
                                        onPress={() => onMasterPress(master.id)}
                                    />
                                ))}
                                {/* Spacers to maintain grid alignment if width varies. 
                                    However, justify-between with roughly 23% width on 4 columns works well.
                                */}
                            </View>
                        ) : (
                            <View className="py-32 items-center justify-center">
                                <Text className="text-xl font-roboto-black text-gray-300 uppercase tracking-[8px]">No matching guides</Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* Final Premium CTA */}
                <View className="bg-[#0a0a0a] py-40 px-6">
                    <View className="max-w-[1440px] mx-auto items-center">
                        <Text className="text-[#EB0046] font-roboto-bold text-xs uppercase tracking-[10px] mb-12">The Sanctuary</Text>
                        <Text className="text-4xl md:text-6xl lg:text-8xl font-roboto-black text-white uppercase tracking-tighter text-center leading-[0.9] mb-16 max-w-4xl">
                            Unlock Your{"\n"}Highest Potential.
                        </Text>
                        <TouchableOpacity className="bg-white px-16 py-8 rounded-full shadow-2xl shadow-white/10 hover:bg-gray-100 active:scale-95 transition-all">
                            <Text className="text-black font-roboto-black text-sm uppercase tracking-[5px]">Join The Community</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Footer />
            </ScrollView>
        </GlobalBackground>
    );
};
