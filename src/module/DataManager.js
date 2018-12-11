const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    
    get: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`)
                .then(result => result.json())
        }
    },

    getAllAscend: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}?_sort=date&_order=asc`)
                .then(result => result.json())
        }

    },

    getUnfinishedTasks: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}?isChecked=false&_sort=date&_order=asc`)
                .then(result => result.json())
        }

    },

    getAll: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}`)
                .then(result => result.json())
        }
    },
    getData: {
        value: (resource) => {
          return fetch(`${remoteURL}/${resource}`)
            .then(response => response.json())
        }
      },
      saveData: {
        value: (resource, entryObject) => {
          return fetch(`${remoteURL}/${resource}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
    
          })
            .then(result => result.json())
        }
      },
    
      
      getAllByUser: {
        value: (resource, id) => {
            console.log(`${remoteURL}/${resource}/${id}`)
          return fetch(`${remoteURL}/${resource}/${id}`)
            .then(result => result.json())
        }
      },
    getAllfilter: {
        value: (resource, watchId) => {
            return fetch(`${remoteURL}/${resource}/?watchId`)
                .then(result => result.json())
        }
    },
    delete: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(result => result.json())
        }
    },
    add: {
        value: (resource, item) => {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(result => result.json())
        }
    },
    edit: {
        value: (resource, id, item) => {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(result => result.json())
        }
    },
    searchUsername: {
        value: function (username) {
          return fetch(`${remoteURL}/users?username=${username}`).then(e =>
            e.json()
          )
        }
      },
    
})