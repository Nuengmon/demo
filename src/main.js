import $ from 'jquery';
import Chart from 'chart.js/auto'



$(document).ready (function(){
  // 메뉴에 대한 박스 연결
  const toggleBtn = document.querySelector('.navbar_toggleBtn');
  const menu = document.querySelector('.navbar_menu');
  const menu_list = document.getElementsByClassName('menu_list');
  // eslint-disable-line no-unused-vars
  // 확진자 수 및 정보에 대한 박스 연결
  const daily_confirmed_case = document.getElementById('daily_confirmed_case');
  const weekly_confirmed_case = document.getElementById('weekly_confirmed_case');
  const monthly_confirmed_case = document.getElementById('monthly_confirmed_case');
  const cumulative_confirmed_case = document.getElementById('cumulative_confirmed_case');
  const map = document.getElementById('map');
  const list = document.getElementById('list');
  
  // 컨텐츠에 대한 박스 연결
  const content1 = document.getElementById('content1');
  const content2 = document.getElementById('content2');
  const content3 = document.getElementById('content3');
  const content4 = document.getElementById('content4');
  const content5 = document.getElementById('content5');
  const content6 = document.getElementById('content6');
  
  const menu_list1 = document.getElementById('menu_list1');
  const menu_list2 = document.getElementById('menu_list2');
  const menu_list3 = document.getElementById('menu_list3');
  const menu_list4 = document.getElementById('menu_list4');
  const menu_list5 = document.getElementById('menu_list5');
  
  //웹 페이지에 들어오면 일일과 지도 확진자 (content1, content5)는 보이게 표시하였음
  content1.classList.add('on');
  content5.classList.add('on');
  
  // 메뉴 버튼을 누르면 메뉴 리스트가 토글되게 함
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  
  
  // getElementsByClass로 묶어서 한 번에 처리 하려고 하니 작동 안 되서 일단 쪼갬
  menu_list1.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  menu_list2.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  menu_list3.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  menu_list4.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  menu_list5.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  
  
  // 각 컨텐츠를 보여주는 자바 스크립트
  daily_confirmed_case.addEventListener('click',() =>{
    content1.classList.add('on');
    content2.classList.remove('on');
    content3.classList.remove('on');
    content4.classList.remove('on');

  });
  
  weekly_confirmed_case.addEventListener('click',() =>{
    content1.classList.remove('on');
    content2.classList.add('on');
    content3.classList.remove('on');
    content4.classList.remove('on');
  });
  
  monthly_confirmed_case.addEventListener('click',() =>{
    content1.classList.remove('on');
    content2.classList.remove('on');
    content3.classList.add('on');
    content4.classList.remove('on');
  });
  
  cumulative_confirmed_case.addEventListener('click',() =>{
    content1.classList.remove('on');
    content2.classList.remove('on');
    content3.classList.remove('on');
    content4.classList.add('on');
  });
  
  map.addEventListener('click',() =>{
    content5.classList.add('on');
    content6.classList.remove('on');
  });
  list.addEventListener('click',() =>{
    content5.classList.remove('on');
    content6.classList.add('on');
  });


Labels('#day-chart')
Labels('#week-chart')
Labels('#month-chart')
Labels('#sum-chart')

function Labels(chart_id){
  var target = $(chart_id);

  if (chart_id === '#day-chart'){

    const data = {

      labels: ['04.20',
      '04.21',
      '04.22',
      '04.23',
      '04.24',
      '04.25'],
      datasets: [
        {
        label: '일일 확진자',
        pointRadius:7,
        pointHoverRadius:10,
        backgroundColor: 'rgba(122, 122, 122,0.7)',
        hoverBackgroundColor:'rgba(255, 255, 255,1)',
        borderColor: 'rgb(0,2,17)',
        borderDash:[10,1],
  
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
  const config = {
    type: 'line',
    data: data,
		options: {}
  }
  var day_Chart = new Chart(
    target,
    config
  );
  };

  if (chart_id === '#week-chart'){
    const data = {

      labels: ['03.28','04.04','04.11','04.18','04.25'],
      datasets: [
        {
        label: '주간 확진자',
        pointRadius:7,
        pointHoverRadius:10,
        backgroundColor: 'rgba(122, 122, 122,0.7)',
        hoverBackgroundColor:'rgba(255, 255, 255,1)',
        borderColor: 'rgb(0,2,17)',
        borderDash:[10,1],
  
        data: [0, 10, 5, 2, 20],
      }]
    };
    const config = {
      type: 'line',
      data: data,
      options: {}
    }
    var week_Chart = new Chart(
      target,
      config
    );
    };

if (chart_id === '#month-chart'){
  const data = {

    labels: ['21.05','21.06','21.07','21.08','21.09','21.10','21.11','21.12','22.01','22.02','22.03','22.04'],
    datasets: [
      {
      label: '월간 확진자',
      pointRadius:7,
      pointHoverRadius:10,
      backgroundColor: 'rgba(122, 122, 122,0.7)',
      hoverBackgroundColor:'rgba(255, 255, 255,1)',
      borderColor: 'rgb(0,2,17)',
      borderDash:[10,1],

      data: [1,2,4,5,7,10,11,21,24,122,515,256],
    }]
  };
      const config = {
        type: 'line',
        data: data,
        options: {}
      }
      var month_Chart = new Chart(
        target,
        config
      );
      };

if (chart_id === '#sum-chart'){
  const data = {

    labels: ['21.05','21.06','21.07','21.08','21.09','21.10','21.11','21.12','22.01','22.02','22.03','22.04'],
    datasets: [
      {
      label: '누적 확진자',
      pointRadius:7,
      pointHoverRadius:10,
      backgroundColor: 'rgba(122, 122, 122,0.7)',
      hoverBackgroundColor:'rgba(255, 255, 255,1)',
      borderColor: 'rgb(0,2,17)',
      borderDash:[10,1],

      data: [1,3,7,12,17,27,38,59,83,205,720,976],
    }]
  };
        const config = {
          type: 'line',
          data: data,
          options: {}
        }
        var sum_Chart = new Chart(
          target,
          config
        );
        };

}
  
});

