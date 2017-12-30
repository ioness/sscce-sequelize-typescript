'use strict'

import * as express from 'express'

const app: any = express()

app.get('/', (req: any, res: any) => {
  res.json({ works: 1 })
})

app.listen(3000, () => {
  console.log('Server started: sscce ')
})

export default app
