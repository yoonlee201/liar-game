import Link from '@/components/link';
import { useLocalSearchParams } from 'expo-router';
import {  View, Text } from 'react-native';

export default function Liar() {
    const { category, word } = useLocalSearchParams();
    console.log(word);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ color: 'black' }}>{word} Hello</Text>
                        <Link
                            style={{
                                backgroundColor: 'gray',
                                padding: 10,
                                borderRadius: 5,
                            }}
                            href={'../../'}>
                            <Text style={{ color: 'black' }}>{'End'}</Text>
                        </Link>
        </View>
    );
}
