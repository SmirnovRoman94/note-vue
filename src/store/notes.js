export default {
    state: {
      notesList: [
        {
          title: 'First Note',
          descr: 'Desription for first note',
          date: new Date(Date.now()).toLocaleString(),
          type: 'standart'
        },
        {
          title: 'Second Note',
          descr: 'Desription for second note',
          date: new Date(Date.now()).toLocaleString(),
          type: 'standart'
        },
        {
          title: 'Third Note',
          descr: 'Desription for third note',
          date: new Date(Date.now()).toLocaleString(),
          type: 'standart'
        }
      ],
      noteType: [
        {
          type: 'standart',
          name: 'Стандартное'
        },
        {
          type: 'warning',
          name: 'Внимание'
        },
        {
          type: 'important',
          name: 'Важное'
        }
      ]
    },
    mutations: {
      addNote(state, payload) {
        state.notesList.push(payload)
      },
      deleteNote(state, payload) {
        state.notesList.splice(payload,1)
      }
    },
    actions: {
      addNote({commit}, payload) {
        commit('addNote', payload)
      },
      deleteNote({commit}, payload) {
        commit('deleteNote', payload)
      }
    },
    getters: {
      getNotes (state) {
        return state.notesList
      },
      getFilteredNotes: state => search => {
        let showList = state.notesList
        
        if (!search) return showList
        // Small
        search = search.trim().toLowerCase()
        // Filter
        showList = showList.filter(function (item) {
          if (item.title.toLowerCase().indexOf(search) !== -1){
            return item
          }
        })
        return showList
      },
  
      getNoteType (state) {
        return state.noteType
      }
    }
  }