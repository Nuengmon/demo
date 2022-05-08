import React from 'react'
import './App.css';
import './main.js';



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
<div className="content" id = "content5">content5</div>{/*각 공학관별 확진자의 위치에 대한 데이터를 지도에 입력해야 함*/}
<div className="content" id = "content6">content6</div> {/*각 공학관별 확진자의 위치에 대한 데이터를 리스트로 입력해야 함*/}

</div>
</div> /*여기에는 API에서 받은 데이터가 지도, 리스트로 표시될 공간, 구현 필요*/);

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
