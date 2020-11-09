import * as axios from "axios";

export const musicApi = {
  url: "https://social-network-backend-legabog.herokuapp.com",

  createMusicAlbum(data) {
    return axios.post(
      "http://localhost:4000/musicalbums/create-musicalbum",
      data
    );
  },

  getMusicAlbums() {
    return axios
      .get(`${this.url}/musicalbums/get-musicalbums`)
      .then((response) => {
        return response.data;
      });
  },

  deleteMusicAlbum(id) {
    return axios.delete(`${this.url}/musicalbums/delete-album/${id}`);
  },

  getMyOwnPlaylists() {
    return axios
      .get(`${this.url}/myownplaylists/get-playlists`)
      .then((response) => {
        return response.data;
      });
  },

  createNewPlayList(data) {
    return axios.post(`${this.url}/myownplaylists/create-playlist`, data);
  },

  deleteOwnPlayList(id) {
    return axios.delete(`${this.url}/myownplaylists/delete-playlist/${id}`);
  },

  deleteTrack(trackId, playlistId) {
    return axios.delete(
      `${this.url}/myownplaylists/delete-playlist/${playlistId}/delete-track/${trackId}`
    );
  },

  updateOwnPlayList(id, data) {
    return axios.put(`${this.url}/myownplaylists/update-playlist/${id}`, data);
  },
};
