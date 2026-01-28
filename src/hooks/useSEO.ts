import { useEffect } from 'react';
import { Platform } from 'react-native';

export const useSEO = () => {
    useEffect(() => {
        if (Platform.OS === 'web') {
            // Update title
            document.title = 'AGAPĒ - 24/7 Live Meditation Sanctuary';

            // Update or create meta tags
            const updateMetaTag = (name: string, content: string, property?: boolean) => {
                const attr = property ? 'property' : 'name';
                let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;

                if (!meta) {
                    meta = document.createElement('meta');
                    meta.setAttribute(attr, name);
                    document.head.appendChild(meta);
                }

                meta.content = content;
            };

            // Primary meta tags
            updateMetaTag('description', 'A 24/7 live sanctuary. Shape your inner state and refine your focus through guided presence with world-class masters. Meditation, mindfulness, and spiritual growth.');
            updateMetaTag('keywords', 'meditation, mindfulness, spiritual growth, live meditation, guided meditation, zen, vipassana, yoga, agape');

            // Open Graph
            updateMetaTag('og:type', 'website', true);
            updateMetaTag('og:title', 'AGAPĒ - 24/7 Live Meditation Sanctuary', true);
            updateMetaTag('og:description', 'Shape your inner state through guided presence and ancient wisdom. Join masters from across the globe, 24/7.', true);
            updateMetaTag('og:image', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200', true);
            updateMetaTag('og:image:width', '1200', true);
            updateMetaTag('og:image:height', '630', true);

            // Twitter
            updateMetaTag('twitter:card', 'summary_large_image', true);
            updateMetaTag('twitter:title', 'AGAPĒ - 24/7 Live Meditation Sanctuary', true);
            updateMetaTag('twitter:description', 'Shape your inner state through guided presence and ancient wisdom. Join masters from across the globe, 24/7.', true);
            updateMetaTag('twitter:image', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200', true);
        }
    }, []);
};
