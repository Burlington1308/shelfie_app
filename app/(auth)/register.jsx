import { StyleSheet, Text} from 'react-native'
import { Link } from 'expo-router'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'


const register = () => {

    const handleSubmit = () => {
        console.log('Register')
    }

  return (
    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>
            Register For An Account
        </ThemedText>

        <Spacer height={100}/>

        <ThemedButton onPress={handleSubmit}>
            <Text style={{color: '#f2f2f2'}}>Register</Text>
        </ThemedButton>

        <Link href="/login">
            <ThemedText style={{textAlign: 'center'}}>
                Already have an account? Login
            </ThemedText>
        </Link>
    </ThemedView>
  )
}

export default register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
})