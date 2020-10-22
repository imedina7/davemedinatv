/**
 *  @name server.js
 *  @description Express web server 
 *  @author Israel Medina <media@davemedina.tv>
 * 
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 * 
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const envars = require('./config.js')

const apiRouter = require('./api/router')
const redir = require('./lib/utils/redir')

const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const cookieParser = require('cookie-parser')
const csrf = require('csurf')

const port = envars.PORT

const app = express()

app.use(cookieParser())

app.use('/', serveStatic(path.join(__dirname, '../dist')))


const csrfProtection = csrf({ cookie: true })

app.use('/', redir.Router())

app.use(csrfProtection)

app.use('/api', apiRouter())


app.listen(port, () => {
    console.log(`Application started on port number: ${port}.`)
})
