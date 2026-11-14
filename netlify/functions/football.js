exports.handler = async (event) => {
  const headers = { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=60" };
  const token = process.env.FOOTBALL_DATA_TOKEN;
  if (!token) return { statusCode: 503, headers, body: JSON.stringify({ error: "FOOTBALL_DATA_TOKEN 환경 변수가 설정되지 않았습니다." }) };
  const { action, code = "PL" } = event.queryStringParameters || {};
  const paths = {
    competition: `/competitions/${encodeURIComponent(code)}`,
    standings: `/competitions/${encodeURIComponent(code)}/standings`,
    scorers: `/competitions/${encodeURIComponent(code)}/scorers`,
    matches: `/competitions/${encodeURIComponent(code)}/matches`,
    teams: `/competitions/${encodeURIComponent(code)}/teams`
  };
  if (!paths[action]) return { statusCode: 400, headers, body: JSON.stringify({ error: "지원하지 않는 요청입니다." }) };
  try {
    const response = await fetch(`https://api.football-data.org/v4${paths[action]}`, {
      headers: { "X-Auth-Token": token }
    });
    const body = await response.text();
    return { statusCode: response.status, headers, body };
  } catch (e) {
    return { statusCode: 502, headers, body: JSON.stringify({ error: "축구 데이터 서버에 연결하지 못했습니다." }) };
  }
};