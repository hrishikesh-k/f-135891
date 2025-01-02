import Airtable from "airtable"

class AirtableClient {
  constructor(apiKey, baseKey) {
    this.apiKey = apiKey;
    this.baseKey = baseKey;
    this.base = new Airtable({ apiKey: this.apiKey }).base(this.baseKey);
  }
}

export default AirtableClient;
