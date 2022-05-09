const list = (req, res) => {
    res.render('board/list')
}

const view = (req, res) => {
    res.render('board/view', {
        name:req.query.name
    })
}

const write = (req, res) => {
    res.render('board/write')
}

const update = (req, res) => {
    res.render('board/update', {
        name:req.query.name
    })
}

const writeAction = (req, res) => {
    res.redirect('/board/view?name=' + req.body.name)
}

const updateAction = (req, res) => {
    res.render('board/view', {
        name:req.query.name
    })
}

module.exports = {
    list,
    view,
    write,
    update,
    writeAction,
    updateAction
};