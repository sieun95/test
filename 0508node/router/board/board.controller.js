const pool = require('../../db.js')

const list = async (req, res) => {
    try{
        const [result] = await pool.query(`SELECT * FROM board`)
        res.render('board/list', {
            items:result,
        })
    }catch(e) {
        console.log(e)
    }
}
const view = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`)
        res.render('board/view', {
            items:result[0]
        })
    }
    catch(e) {
        console.error(e)
    }

}

const write = async (req, res) => {
        res.render('board/write')
}

const update = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`)
        res.render('board/update', {
            items:result[0]
        })
    }
    catch(e) {
        console.error(e)
    }
}

const writeAction = async (req, res) => {
   try{
       const [result] = await pool.query(`INSERT INTO board(subject, name, content) VALUES('${req.body.subject}', '${req.body.name}', '${req.body.content}')`)
       console.log('write : ', result)
       res.redirect(`/board/view?idx=${result.insertId}`)    //내가 쓴 페이지를 리다이렉트 해준다.
   }
   catch(e) {
       console.error(e)
   }
    
}

const updateAction = async (req, res) => {
    try{
        
        const [result] = await pool.query(`UPDATE board SET subject='${req.body.subject}', content='${req.body.content}' WHERE idx='${req.body.idx}';`)
        console.log('update : ', result)
        res.redirect(`/board/view?idx=${req.body.idx}`)
    }
    catch(e) {
        console.error(e)
    }
}

const deleteAction = async (req, res) => {
    try {
        const [result] = await pool.query(`DELETE FROM board WHERE idx=${req.query.idx}`)
        console.log(req.query.idx)
        console.log('delete : ', result)
        res.redirect(`/board/list`)
    }
    catch(e) {
        console.error(e)
    }
}

module.exports = {
    list,
    view,
    write,
    update,
    writeAction,
    updateAction,
    deleteAction,
};