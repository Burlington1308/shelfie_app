import { StyleSheet} from 'react-native'
import { Link } from 'expo-router'

//themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'


const register = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>
            Register For An Account
        </ThemedText>

        <Spacer height={100}/>

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
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
})