FOOTBALL HUB - Netlify 배포

포함 파일
- public/index.html : 축구 통계 사이트 화면
- netlify/functions/football.js : football-data.org API 중계 함수
- netlify.toml : Netlify 설정
- package.json

배포
1. GitHub 저장소에 ZIP 압축을 푼 뒤 파일/폴더를 저장소 최상위에 업로드합니다.
2. Netlify에서 Add new project > Import an existing project > GitHub로 저장소를 연결합니다.
3. Build command는 비우고 Publish directory는 public으로 설정합니다.
4. Netlify 사이트의 Project configuration > Environment variables에서
   Key: FOOTBALL_DATA_TOKEN
   Value: football-data.org에서 발급받은 API 토큰
   을 추가합니다.
5. 저장 후 Deploys에서 새 배포를 실행합니다.

데이터 범위 주의
football-data.org API는 대회별 경기, 순위, 해당 시즌 득점 순위, 팀 목록 등을 제공합니다.
무료/유료 접근 범위는 계정 플랜과 대회에 따라 달라집니다.
상대 팀별 역대 득점 TOP 5, 선수 통산 최다 출전 등 모든 시대·모든 대회의 세부 커리어 기록은 이 API만으로 완전 제공되지 않습니다.
그 기록을 정확히 제공하려면 별도 과거 경기 이벤트/선수별 경기 기록 데이터 공급자가 필요합니다.
API 토큰은 HTML이나 GitHub 코드에 넣지 말고 Netlify 환경 변수에만 저장하세요.
