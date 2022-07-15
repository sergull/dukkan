import React from 'react';
import LottieView from "lottie-react-native";

function Loading(){
    //autoPlay bu component render olduğu anda ekrana direkt çalıştırıp yansıtacak
    return <LottieView source={require("../../assets/loading.json")} autoPlay/>;
}

export default Loading;
