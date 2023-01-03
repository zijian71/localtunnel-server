class Config {
  constructor(config) {
    this.config = config || [];
  }

  get_config_for_user(apiKey) {
    return this.config.filter((item) => item.api_key == apiKey);
  }
}

export default Config;
