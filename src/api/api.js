import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1fcabdac-f36b-4011-9477-77ed629578b8",
  },
});

export const authAPI = {
  getAuthorization() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollowUser(id) {
    return instance
      .delete(`follow/${id}`)
      .then((response) => response.data.resultCode);
  },
  followUser(id) {
    return instance
      .post(`follow/${id}`)
      .then((response) => response.data.resultCode);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status })
      .then((response) => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile).then((response) => response.data);
  },
};
