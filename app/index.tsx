import Button from '@/components/button';
import Link from '@/components/link';
import { Text, View } from 'react-native';

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Link
                style={{
                    backgroundColor: 'red',
                    padding: 10,
                    borderRadius: 5,
                }}
                href={'/category'}>
                <Text style={{ color: 'black' }}>{'Play'}</Text>
            </Link>
            <Button
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                    borderRadius: 5,
                }}>
                <Text style={{ color: 'black' }}>{'Instruction'}</Text>
            </Button>
        </View>
    );
}
