const { kakao } = window;


export default function KakaoMapScript() {

    if(navigator.geolocation) {// geolocation 을 지원한다면 위치를 요청한다.
        navigator.geolocation.getCurrentPosition(
            (position) => {
            const container = document.getElementById('myMap');
            const options = {
                center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
        }
        );
    }
    else{
        console.error("이 브라우저에서는 Geolocation이 지원되지 않습니다.")
    }

    

}