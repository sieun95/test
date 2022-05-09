const list = (req, res) => {
    res.render('board/list')
}
const view = (req, res) => {
    res.render('board/view')
}
const update = (req, res) => {
    res.render('board/update')
}
const write = (req, res) => {
    res.render('board/write')
}

module.exports = {
    list,
    view,
    update,
    write,
}