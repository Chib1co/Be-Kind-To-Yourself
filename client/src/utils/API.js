import axios from "axios";

export default {
    getResults: function() {
        return axios.get("api/results")
    },
    getResult: function(id) {
        return axios.get("api/results" + id)
    },
    getNewestResult: function() {
        return axios.get("api/results/latest")
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

    createUser: function() {
        return axios.post("api/users")
    },
    updateUser: function(id) {
        return axios.patch("api/users" + id)
    },
    deleteUser: function(id) {
        return axios.delete("api/users" + id)
    }


}