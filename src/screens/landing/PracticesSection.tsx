import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const PracticeCard = ({ title, category, image }: any) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[
                styles.card,
                screenWidth > 1024 ? styles.cardDesktop : screenWidth > 768 ? styles.cardTablet : styles.cardMobile
            ]}
        >
            <Image
                source={{ uri: image }}
                style={styles.cardImage}
                resizeMode="cover"
            />
            <View style={styles.overlay} />
            <View style={styles.gradient} />
            <View style={styles.textContainer}>
                <Text style={styles.category}>{category.toUpperCase()}</Text>
                <Text style={styles.title}>{title.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    );
};

export const PracticesSection = () => {
    return (
        <View className="py-16 bg-white">
            <View className="max-w-[1440px] mx-auto px-6">
                <Text className="text-[10px] font-roboto-bold text-[#EB0046] uppercase tracking-[6px] mb-10 text-center">
                    Disciplines
                </Text>

                <View style={styles.grid}>
                    <PracticeCard
                        title="Vipassana"
                        category="Insight"
                        image="https://images.unsplash.com/photo-1609154767012-331529e7d73b?auto=format&fit=crop&q=80&w=600"
                    />
                    <PracticeCard
                        title="Zazen"
                        category="Stillness"
                        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
                    />
                    <PracticeCard
                        title="Pranayama"
                        category="Breath"
                        image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
                    />
                    <PracticeCard
                        title="Somatic"
                        category="Body"
                        image="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=600"
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: screenWidth > 1024 ? 'flex-start' : 'space-between',
        gap: screenWidth > 1024 ? 20 : 0,
    },
    card: {
        borderRadius: 32,
        overflow: 'hidden',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    cardMobile: {
        width: '100%',
        height: 400,
        marginBottom: 24,
    },
    cardTablet: {
        width: '48%',
        height: 320,
        marginBottom: 24,
    },
    cardDesktop: {
        width: 280,
        height: 373,
        marginBottom: 0,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    textContainer: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
    },
    category: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontFamily: 'Roboto_700Bold',
        fontSize: 10,
        letterSpacing: 3,
        marginBottom: 8,
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'Roboto_900Black',
        fontSize: 24,
        lineHeight: 28,
    },
});
