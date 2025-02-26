import { Text, View } from 'react-native';
import Link from '@/components/link';
import words from '@/assets/words.json';

export default function Category() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {/* {/* {error ? <Text style={{ color: "red" }}>{error}</Text> : null} */}
            {words.map(({ category, link }, index) => (
                <Link
                    key={index}
                    style={{
                        backgroundColor: 'gray',
                        padding: 10,
                        borderRadius: 5,
                    }}
                    href={`/(game)/${link}`}>
                    {category.korean}
                </Link>
            ))}
            <Link
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    borderRadius: 5,
                }}
                href={'../'}>
                <Text style={{ color: 'black' }}>{'Back'}</Text>
            </Link>
        </View>
    );
}
