export function handleAuth(config, apiKey) {
  let apiKeyConfig;
  if (apiKey === undefined) {
    throw new Error("pass x-api-key in headers");
  } else {
    apiKeyConfig = config.get_config_for_user(apiKey);
    if (apiKeyConfig && apiKeyConfig.length === 0) {
      throw new Error("invalid x-api-key");
    }
  }
  return apiKeyConfig;
}
