import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor: "#eeeeee",
        borderColor:"#e0e0e0",
        borderWidth:1,
        margin:10,
        borderRadius:5,
        padding:5,
        flexDirection:"row",
    },
    image:{
        width:100,
        //en az 100 yüksekliği olsun 
        minHeight:100,
        //verilen alana resim orijinal boyutunda yerleştirilir
        resizeMode:"contain",
        //arkada kalan boşlukları bir bütünmüş gibi göstermek için arka plan rengiyle aynı yaptık
        backgroundColor:"white",
    },
    body_container:{
        padding:5,
        flex:1,
        justifyContent:"space-between",

    },
    title:{
        fontWeight:"bold",
        fontSize:18,
    },
    price:{
        textAlign:"right",
        fontSize:18,
        fontStyle:"italic",

    }
})