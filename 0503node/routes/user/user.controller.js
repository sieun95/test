const list = (req, res) => {
    res.render('user/list')
}
const view = (req, res) => {
    res.render('user/view')
}
const update = (req, res) => {
    res.render('user/update')
}
const write = (req, res) => {
    res.render('user/write')
}

module.exports = {
    list,
    view,
    update,
    write,
}