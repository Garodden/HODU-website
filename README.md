# HODU-website

---
ESTsoft 오르미 부트캠프 첫 프론트엔드 프로젝트이다. 
주어진 UI 레이아웃을 보고 프론트엔드 사이트를 구현하는 것이 과제.
---
## tech-stack
### `html` `CSS`
---
## 배포 주소
https://garodden.github.io/HODU-website/HODU_estsoft/
---
## 구현 기능
### `load-more.js`
- 일정량 만큼 사진 로드
- 원래는 show more 버튼을 누르면 lorem picsum을 이용하여 무한을 사진을 불러온 뒤, 무한 스크롤로 보여주는 기능이었지만, 웹사이트 이용에 있어서 불편하다는 느낌이 들어 사진을 9개씩 로드해주는 기능으로 구현하였다.
### `kakao-map.js`
- 카카오 맵 API를 사용하게 해주는 기능을 구현했다.
### `subscribe-popup.js`:
- 이메일 입력 후 subscribe 버튼을 누르면 <thank-you> 팝업이 뜨고, 팝업의 버튼을 누르면 그 팝업이 닫히는 기능을 구현
- 팝업의 초기 `display` 설정은 `none`, 구독 버튼을 누르면 `display:flex`로 바뀌고, 팝업창의 버튼을 누르면 `display:none`으로 다시 바뀌도록 팝업창의 기능을 구현하였다.
### `top-scroll.js`
- 마우스를 가져다 댈 시 opacity값이 올라가는 기능 구현.
- 클릭 시 사이트의 맨 위로 이동하는 기능 구현.
- `behavior: 'smooth'` 로 부드러운 이동 효과 구현 