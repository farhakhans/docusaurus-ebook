export default function EmbedPage() {
  return (
    <iframe 
      src="https://claude.ai/oauth/authorize?code=true&client_id=9d1c250a-e61b-44d9-88ed-5944d1962f5e&response_type=code&redirect_uri=https%3A%2F%2Fconsole.anthropic.com%2Foauth%2Fcode%2Fcallback&scope=org%3Acreate_api_key+user%3Aprofile+user%3Ainference+user%3Asessions%3Aclaude_code&code_challenge=CySkachI2-hTGN_skoKiuHgYLEAntWkvpoPbKmu9cUY&code_challenge_method=S256&state=iskOjfOEpe8_pWP82X-T-TnXV_BSTwvahll8gUbp-NI"
      style={{ width: '100%', height: '600px', border: '0' }}
    />
  );
}
