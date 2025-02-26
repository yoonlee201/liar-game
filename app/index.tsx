import Button from '@/components/button';
import { Text, View } from 'react-native';

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Button style={{ backgroundColor: 'red' }}>
                <View>
                    <Text style={{ color: 'black' }}>{'Start'}</Text>
                </View>
            </Button>
        </View>
    );
}
