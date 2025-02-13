import { StyleSheet } from "react-native";
import FontFamily from "../constants/Fontfamily";
import typography from "../constants/Fontfamily";

const styles = StyleSheet.create({
    firstContainer: {
        alignItems: 'center',
    },
    logo:{
        width:100,
        height: 100
    },
    secondContainer:{
        width:'70%',
    },
    textStyle1:{fontFamily:typography.FontFamily.RalewayBold,fontSize:30,textAlign:'center'},
    textStyle2:{fontFamily:typography.FontFamily.RalewayRegular,fontSize:20,textAlign:'center',marginTop:'5%'},
    button_wrapper:{backgroundColor:'#2467EC',padding:10,borderRadius:10,marginTop:'10%',width:'90%',height: 50,justifyContent:'center'},
    button_text:{fontFamily:typography.FontFamily.RalewayBold,color:'#fff',textAlign:'center',fontSize:18}
});

export default styles;