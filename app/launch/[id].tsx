import { Text, View } from 'react-native';
import Link from '@/components/link';
import words from '@/assets/words.json';
import { usePathname } from 'expo-router';
import { DEFAULT_WORDS } from '@/constants/default';
import Button from '@/components/button';
import { useState } from 'react';

export default function Game() {
    const [people, setPeople] = useState(0);
    const [liar, setLiar] = useState(0);
    const pathname = usePathname().replace('/launch/', '').replace('/', '');

    const {
        category: { korean },
    } = words.find(({ link }) => link === pathname) ?? DEFAULT_WORDS;

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>{korean}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text>People</Text>
                <Button
                    onPress={() =>
                        setPeople(people < 20 ? people + 1 : people)
                    }>
                    <Text>{'+'}</Text>
                </Button>
                <Text>{people}</Text>
                <Button onPress={() => setPeople(people > 0 ? people - 1 : 0)}>
                    <Text>{'-'}</Text>
                </Button>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text>Liar</Text>
                <Button onPress={() => setLiar(liar < 20 ? liar + 1 : liar)}>
                    <Text>{'+'}</Text>
                </Button>
                <Text>{liar}</Text>
                <Button onPress={() => setLiar(liar > 0 ? liar - 1 : 0)}>
                    <Text>{'-'}</Text>
                </Button>
            </View>
            <Link
                style={{
                    backgroundColor: 'gray',
                    padding: 10,
                    borderRadius: 5,
                }}
                href={'../'}>
                <Text style={{ color: 'black' }}>{'Start'}</Text>
            </Link>
            <Link
                style={{
                    backgroundColor: 'gray',
                    padding: 10,
                    borderRadius: 5,
                }}
                href={'../'}>
                <Text style={{ color: 'black' }}>{'End'}</Text>
            </Link>
        </View>
    );
}
