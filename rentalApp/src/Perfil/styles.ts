import { StyleSheet } from "react-native";
import fonts from "../styles/fonts";
import color from "../styles/color";


export const styles = StyleSheet.create({
    cardContainer: {

        padding: 20,
        borderRadius: 10,
        elevation: 3,
        margin: 10,
        marginBottom: 15,
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.title,
        marginBottom: 20,
        textAlign: 'center'

    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 55,
        textAlign: 'center',

    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,

    },
    infoText: {
        fontSize: 24,
        marginBottom: 20,
        color: '#000000',
        fontFamily: fonts.title,
    },
    highlightText: {
        fontSize: 24,
        fontFamily: fonts.title,
        marginLeft: 5,
    },
    button: {
        backgroundColor: '#63E1FD',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: fonts.title,


    },
    profileMessage: {
        marginTop: 20,
        fontSize: 26,
        color: '#000000',
        fontFamily: fonts.title,
    },

    line: {
        width: "100%",
        height: 1,
        backgroundColor: color.unfocus,
        marginVertical: 18,
    },

});