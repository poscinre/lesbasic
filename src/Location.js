/*global kakao*/ 
import React, { useEffect } from 'react'

const { kakao } = window;

const Location=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5240220, 126.9265940),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.5240220, 126.9265940); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div className='location'>
          <h2 style={{textAlign:'center'}}>매장찾기</h2>
          <div id="map" style={{width:"500px", height:"400px"}}></div>
            <h4>IFC몰점</h4><span>영등포구 국제금융로 10 IFC몰</span>
            <h4>청담점</h4><span>강남구 압구정로 342</span>
            <h4>스타필드 코엑스점</h4><span>강남구 봉은사로 524</span>
        </div>
    )
}

export default Location;