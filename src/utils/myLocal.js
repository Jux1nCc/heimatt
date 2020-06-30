// 封装操作 localStorage 的方法

// 存数据
function localSet (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

// 取数据
function localGet (key) {
  return JSON.parse(window.localStorage.getItem(key))
}

// 删数据
function localDel (key) {
  window.localStorage.removeItem(key)
}

export { localSet, localGet, localDel }
