// These are helper functions to make life easier.
const key = `_data`

// generate uuid
const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

// get item from localStorage
const get = () => {
  return JSON.parse(localStorage.getItem(key))
}

// set item to localStorage
const set = obj => {
  localStorage.setItem(key, JSON.stringify(obj))
}

// initialize empty array to localStorage
export const init = () => {
  if (localStorage.getItem(key) == null) {
    set([])
  }
}

// add new item to localStorage
export const addItem = (name, assumption, days) => {
  let items = get()
  // set new date
  let reviewDate = new Date
  reviewDate.setDate((new Date).getDate() + days)
  // create new item
  const newItem = {
    id: guid(),
    name,
    assumption,
    reviewDate,
    conclusion: '',
    isReview: false,
  }
  // append and save to localStorage
  set([newItem, ...items])
}

// get item by id
export const getItem = id => {
  let items = get()
  return items.filter(item => item.id === id)[0]
}

// update key in localStorage
export const updateItem = (id, key, value) => {
  let items = get()
  // update data
  items = items.map(item => {
    if (item.id === id) {
      item[key] = value
    }
  })
  // save
  set(items)
}
