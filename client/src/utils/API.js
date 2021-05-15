import axios from "axios";

const axiosInstance = axios.create({
    baseURL: window.location.host.includes('localhost') ? 'http://localhost:8080' : '',
    withCredentials: true
  })

export default {
    getResults: function() {
        return axios.get("api/results")
    },
    getResult: function(id) {
        return axios.get("api/results" + id)
    },
    getNewestResult: function() {  
        return axiosInstance.get("api/results/latest")
    },
    
    deleteResult: function(id) {
        return axios.delete("api/results" + id)
    },
    postResults: function(resultData) {
        return axios.post("api/results", resultData)
    },

    getActivities: function() {
        return axios.get("api/activities")
    },

    getActivity: function(id) {
        return axios.get("api/activities" + id)
    },
    deleteActivity: function(id) {
        return axios.get("api/activities" + id)
    },
    
    postActivities: function() {
        return axios.post("api/post")
    },
    updateActivity: function(id) {
        return axios.patch("api/activities" + id)
    },

    getUsers: function() {
        return axios.get("api/users")
    },

    getUser: function(id) {
        return axios.get("api/users" + id)
    },

    // User sign up
  userSignup: function (userData) {
    console.log("test test test")
    return axiosInstance({
      method: 'post',
      url: "/api/users/signup",
      data: userData
    })
  },
   // User log in
   userLogin: function (userData) {
    return axiosInstance({
      method: 'post',
      url: "/api/users/login",
      data: userData
    })
  },
    updateUser: function(id) {
        return axios.patch("api/users" + id)
    },
    deleteUser: function(id) {
        return axios.delete("api/users" + id)
    },

     // Check if user is logged in
  userLoggedIn: function() {
    return axiosInstance({
      method: 'get',
      url: "api/users/logged-in",
    })
  },

  userLogout: function() {
    return axiosInstance({
      method: 'get',
      url: "/api/users/logout",
    })
  }


}