const api = {
  getBallotData() {
    return fetch('/api/getBallotData').then(res => {
      return res.json();
    }).then(data => { return data.items });
  }
};

export default api;