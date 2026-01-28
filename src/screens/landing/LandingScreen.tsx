import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../../components/Header';
import { HeroSection } from './HeroSection';
import { ScheduleSection } from './ScheduleSection';
import { TheSpaceSection } from './TheSpaceSection';
import { VideoSection } from './VideoSection';
import { StartingSoonSection } from './StartingSoonSection';
import { PracticesSection } from './PracticesSection';
import { MastersSection } from './MastersSection';
import { Footer } from '../../components/Footer';
import { GlobalBackground } from '../../components/GlobalBackground';
import { useSEO } from '../../hooks/useSEO';

export default function LandingScreen({ onMasterPress, onMeetAllMasters }: { onMasterPress: () => void, onMeetAllMasters: () => void }) {
    useSEO();
    return (
        <GlobalBackground>
            <Header onBrowsePress={onMeetAllMasters} onLogoPress={() => { }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeroSection />
                <StartingSoonSection />
                <ScheduleSection />
                <PracticesSection />
                <TheSpaceSection />
                <VideoSection />
                <MastersSection onMasterPress={onMasterPress} onMeetAllMasters={onMeetAllMasters} />
                <Footer />
            </ScrollView>
        </GlobalBackground>
    );
}
