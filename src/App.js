import {useEffect} from 'react'
import './App.css';
import './main.js';

function MapAPI() {
  
    //스크립트 파일 읽어오기
    const new_script = src => { 
      return new Promise((resolve, reject) => { 
        const script = document.createElement('script'); 
        script.src = src; 
        script.addEventListener('load', () => { 
          resolve(); 
        }); 
        script.addEventListener('error', e => { 
          reject(e); 
        }); 
        document.head.appendChild(script); 
      }); 
    };
    
    useEffect(() => { 
      //카카오맵 스크립트 읽어오기
      const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c9e5ce974be512807f9a5f898ddff858');
      
      //스크립트 읽기 완료 후 카카오맵 설정
      my_script.then(() => { 
        const kakao = window['kakao']; 
        kakao.maps.load(() => {
          const mapContainer = document.getElementById('content5');
          const options = { 
            center: new kakao.maps.LatLng(37.22177763493654, 127.18893546455651), //좌표설정
            level: 4 
          }; 
          const map = new kakao.maps.Map(mapContainer, options); //맵생성
          //마커설정
          var positions = [
            {
                content: '<div>창조예술관</div>', 
                latlng: new kakao.maps.LatLng(37.22302914945416, 127.18952449421583)
            },
            {
                content: '<div>채플관</div>', 
                latlng: new kakao.maps.LatLng(37.223828545541, 127.18686734587118)
            },
            {
                content: '<div>학생복지관</div>', 
                latlng: new kakao.maps.LatLng(37.22309876247737, 127.18682610925036)
            },
            {
                content: '<div>창업보육센터</div>',
                latlng: new kakao.maps.LatLng(37.22288384195638, 127.18598052123444)
            },
            {
                content: '<div>제1공학관</div>', 
                latlng: new kakao.maps.LatLng(37.222503522200434, 127.18717392991253)
            },
            {
                content: '<div>제2공학관</div>', 
                latlng: new kakao.maps.LatLng(37.22158283637562, 127.18677166764952)
            },
            {
                content: '<div>제3공학관</div>', 
                latlng: new kakao.maps.LatLng(37.21918135259265, 127.18256038057942)
            },
            {
                content: '<div>제4공학관</div>', 
                latlng: new kakao.maps.LatLng(37.218902425927254, 127.18375962760621)
            },
            {
                content: '<div>제5공학관</div>', 
                latlng: new kakao.maps.LatLng(37.22200724400123, 127.18761776224102)
            },
            {
                content: '<div>명진당</div>', 
                latlng: new kakao.maps.LatLng(37.2220531085697, 127.18852489468792)
            },
            {
                content: '<div>방목기념관</div>', 
                latlng: new kakao.maps.LatLng(37.22094204065007, 127.18743766627593)
            },
            {
                content: '<div>선수숙소</div>', 
                latlng: new kakao.maps.LatLng(37.22153670732927, 127.19167561916571)
            },
            {
                content: '<div>예체능관</div>', 
                latlng: new kakao.maps.LatLng(37.22202483500948, 127.19070786569841)
            },
            {
                content: '<div>차세대과학관</div>', 
                latlng: new kakao.maps.LatLng(37.22140769884661, 127.18925284076029)
            },
            {
                content: '<div>함박관</div>', 
                latlng: new kakao.maps.LatLng(37.22117450123532, 127.18857904388639)
            },
            {
                content: '<div>산학협력관</div>', 
                latlng: new kakao.maps.LatLng(37.22084210002556, 127.187958523961)
            },
            {
                content: '<div>디자인/건축관</div>', 
                latlng: new kakao.maps.LatLng(37.22040425335371, 127.18563360439204)
            }
        ];
        
        for (var i = 0; i < positions.length; i ++) {
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng // 마커의 위치
            });
        
            // 마커에 표시할 인포윈도우를 생성합니다 
            var infowindow = new kakao.maps.InfoWindow({
                content: positions[i].content // 인포윈도우에 표시할 내용
            });
            
    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}
          marker.setMap(map); 
        });   
      }); 
    }, []);
    return (
      <div className="App">
        <div id="map" className="map"/>
      </div>
    );
  }
  function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}
function NAV (props) {
return(
<nav className="navbar">{/*메뉴바*/}
<div className="navbar_logo">
    <i className="fas fa-biohazard"></i>{/*메뉴바 코로나 아이콘*/}
    <a href="index.html" className="main_title">명지대 코로나 현황판</a>
</div>
<ul className="navbar_menu">{/*특정 컨텐츠로 이동시키는 메뉴*/}
    <li id="menu_list1"><a className="menu_list"  href="index.html#confiremed_case">확진자 수</a></li>
    <li id="menu_list2"><a className="menu_list"  href="index.html#confiremed_information">확진자 정보</a></li>
    <li id="menu_list3"><a className="menu list"  href="#">미구현 내용</a></li>
    <li id="menu_list4"><a className="menu_list"  href="index.html#information">미구현 내용</a></li>
    <li id="menu_list5"><a className="menu_list"  href="index.html#footer">만든이</a></li>
</ul>
<a href="#" className="navbar_toggleBtn"><i className="fas fa-bars"></i></a>{/*토글 버튼 아이콘*/}
</nav>

);
}

function Confiremed_case(){
return(<div id="confiremed_case">{/*확진사 현황 세션*/}
<div className="title_name">확진자 수</div>
<div className="menu_section">
    <div id="daily_confirmed_case"><a href="#">일일</a></div>
    <div id="weekly_confirmed_case"><a href="#">주간</a></div>
    <div id="monthly_confirmed_case"><a href="#">월간</a></div>
    <div id="cumulative_confirmed_case"><a href="#">누적</a></div> 
</div> 

<div className="main_content">
<div className="content" id = "content1" ><canvas id="day-chart"/></div> {/*일일 확진자에 대한 데이터 입력해야 함*/}
<div className="content" id = "content2"><canvas id="week-chart"/></div> {/*주간 확진자에 대한 데이터 입력해야 함*/}
<div className="content" id = "content3"><canvas id="month-chart"/></div> {/*월간 확진자에 대한 데이터 입력해야 함*/}
<div className="content" id = "content4"><canvas id="sum-chart"/></div> {/*누적 확진자에 대한 데이터 입력해야 함*/}

</div>{/*여기에는 API에서 받은 데이터가 표시될 공간, 구현 필요*/}
</div>
);
 
}


function Confiremed_information () {
return(
<div id="confiremed_information">{/*확진자 정보 세션*/}
<div className="title_name">확진자 정보</div>
 <div className="menu_section">
    <div id="map"><a href="#">지도</a></div>
    <div id="list"><a href="#">리스트</a></div> 
    
</div>
<div className="main_content">
<div className="content" id = "content5"><MapAPI/></div>{/*각 공학관별 확진자의 위치에 대한 데이터를 지도에 입력해야 함*/}
<div className="content" id = "content6">{Table_List()}</div> {/*각 공학관별 확진자의 위치에 대한 데이터를 리스트로 입력해야 함*/}

</div>
</div> /*여기에는 API에서 받은 데이터가 지도, 리스트로 표시될 공간, 구현 필요*/);

}

function Table_List(){
    return(
<table id="TABLE" width="100%">
<tr>
	<th width="20%">건물명</th>
	<th colSpan={2} width="40%">오늘 확진자</th>
	<th colSpan={2} width="40%">누적 확진자</th>
</tr>
<tr>
	<td className="building">전체</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">창조예술관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">채플관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">학생복지관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">창업보육센터</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">제1공학관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">제2공학관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">제3공학관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">제4공학관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">제5공학관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">명진당</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">선수숙소</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">예체능관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">차세대과학관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">함박관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">산학협력관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">방목기념관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<tr>
	<td className="building">디자인/건축관</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
</table>
    );
}

function FOOTER (props) {
    return (
        <div id="footer"><br/>프론트엔드 : 정진영<br/> 백엔드 : 이동욱<br/>
email : <a href="mailto:0523nada@gmail.com" >0523nada@gmail.com</a><br/>

</div>
    );
}

function INFORMATION (){
/*
    <div id="information">
   <div className="title_name">질병 관리청 youtube</div>
  
<div className="covid_image">

    <a href="https://www.youtube.com/watch?v=RO8H8Fjahp0&ab_channel=질병관리청아프자마TV" target = _blink; >
        <img src="image1.jpg" alt="자가 검진 키트 사용법">
    </a>
    <a href="https://www.youtube.com/watch?v=qRxtz_5XvUg&ab_channel=질병관리청아프지마TV" target = _blink; >
        <img src="image2.jpg" alt="쓰레기 배출 방법">
    </a>

</div>*/

}

function App() {
  return (
<div>
<NAV/>{/* 메뉴바 */}
<div className ="main_section">{/*메인 세션 표시*/}
<Confiremed_case/> {/* 확진자 수 */}
<Confiremed_information/> {/* 확진자정보 */}
</div>
<FOOTER/>
</div>  

  );
  
  }


export default App;

